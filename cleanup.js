import https from 'https';

/**
 * cleanup.js
 *
 * Deletes Vercel deployments older than DAYS_TO_KEEP days, while always
 * keeping the latest KEEP_LATEST_PRODUCTION production deployments so the
 * live site never goes offline.
 *
 * Required env:
 *   VERCEL_TOKEN             Vercel API token
 *
 * Optional env (defaults shown):
 *   PROJECT_ID               prj_0prkiDEwxQBH5KhCcP8ai17b3OmH
 *   TEAM_ID                  delirium-djs-projects
 *   DAYS_TO_KEEP             3
 *   KEEP_LATEST_PRODUCTION   3   (number of recent production deploys to never delete)
 */

const VERCEL_TOKEN = process.env.VERCEL_TOKEN;
const PROJECT_ID = process.env.PROJECT_ID || 'prj_0prkiDEwxQBH5KhCcP8ai17b3OmH';
const TEAM_ID = process.env.TEAM_ID || 'delirium-djs-projects';
const DAYS_TO_KEEP = Number(process.env.DAYS_TO_KEEP || 3);
const KEEP_LATEST_PRODUCTION = Number(process.env.KEEP_LATEST_PRODUCTION || 3);
const CUTOFF = Date.now() - DAYS_TO_KEEP * 24 * 60 * 60 * 1000;
const LIMIT = 100;
const MAX_PAGES = 200;

if (!VERCEL_TOKEN) {
  console.error('Error: VERCEL_TOKEN secret is missing.');
  process.exit(1);
}

function request({ path, method }) {
  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: 'api.vercel.com',
        path,
        method,
        headers: {
          Authorization: `Bearer ${VERCEL_TOKEN}`,
          'Content-Type': 'application/json',
        },
      },
      (res) => {
        let data = '';
        res.on('data', (chunk) => {
          data += chunk;
        });
        res.on('end', () => {
          resolve({ statusCode: res.statusCode, body: data });
        });
      },
    );
    req.on('error', reject);
    req.end();
  });
}

async function listDeployments() {
  const deployments = [];
  let until;
  let pages = 0;

  do {
    pages += 1;
    if (pages > MAX_PAGES) {
      throw new Error(`Safety brake: stopped after ${MAX_PAGES} pages`);
    }

    const url = `/v7/deployments?projectId=${PROJECT_ID}&teamId=${TEAM_ID}&limit=${LIMIT}${until ? `&until=${until}` : ''}`;
    console.log(`Fetching deployments page ${pages}...`);
    const res = await request({ path: url, method: 'GET' });

    if (res.statusCode !== 200) {
      throw new Error(
        `Failed to list deployments: HTTP ${res.statusCode} ${res.body}`,
      );
    }

    let json;
    try {
      json = JSON.parse(res.body);
    } catch (err) {
      throw new Error(`Failed to parse deployments response: ${err.message}`);
    }

    const pageDeployments = Array.isArray(json.deployments) ? json.deployments : [];
    deployments.push(...pageDeployments);

    until = json.pagination?.next;
    console.log(
      `Page ${pages}: ${pageDeployments.length} deployments (next cursor: ${until ?? 'none'})`,
    );
  } while (until);

  return deployments;
}

async function deleteDeployment(uid) {
  const res = await request({ path: `/v13/deployments/${uid}?teamId=${TEAM_ID}`, method: 'DELETE' });
  return res.statusCode;
}

async function run() {
  const all = await listDeployments();
  console.log(`Found ${all.length} total deployments.`);

  // --- Protect the latest N production deployments so the site stays online ---
  const production = all.filter((d) => d.target === 'production');
  production.sort((a, b) => Number(b.createdAt) - Number(a.createdAt));
  const keepProduction = new Set(
    production.slice(0, KEEP_LATEST_PRODUCTION).map((d) => d.uid),
  );
  console.log(
    `Production deployments: ${production.length}. Keeping latest ${KEEP_LATEST_PRODUCTION}:`,
  );
  production
    .slice(0, KEEP_LATEST_PRODUCTION)
    .forEach((d) =>
      console.log(`  KEEP  ${d.uid} (created ${d.createdAt})`),
    );

  // --- Decide what to delete ---
  const toDelete = all.filter((d) => {
    if (keepProduction.has(d.uid)) return false; // protected recent production
    if (Number(d.createdAt) >= CUTOFF) return false; // still within retention
    return true; // old and not protected
  });

  const nonProdDeleted = toDelete.filter((d) => d.target !== 'production').length;
  const prodDeleted = toDelete.filter((d) => d.target === 'production').length;

  console.log(
    `Candidates for deletion: ${toDelete.length} (${nonProdDeleted} non-production, ${prodDeleted} old production beyond kept set).`,
  );

  if (toDelete.length === 0) {
    console.log('Nothing to delete.');
    return;
  }

  let deleted = 0;
  let failed = 0;

  for (const d of toDelete) {
    const uid = d.uid;
    const url = d.url || '<no url>';
    const createdAt = d.createdAt ?? '<unknown>';

    try {
      const status = await deleteDeployment(uid);

      if (status === 200) {
        console.log(`Deleted ${uid} (${url}, created ${createdAt})`);
        deleted += 1;
      } else if (status === 404 || status === 410) {
        console.log(`Already removed: ${uid} (${url}) — HTTP ${status}`);
        deleted += 1;
      } else {
        console.error(`Failed to delete ${uid} (${url}): HTTP ${status}`);
        failed += 1;
      }
    } catch (err) {
      console.error(`Error deleting ${uid} (${url}): ${err.message}`);
      failed += 1;
    }
  }

  console.log(`Done: ${deleted} deleted, ${failed} failed.`);

  if (failed > 0) {
    process.exit(1);
  }
}

run().catch((err) => {
  console.error('Fatal error:', err.message);
  process.exit(1);
});
