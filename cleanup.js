const VERCEL_TOKEN = process.env.VERCEL_TOKEN;
const PROJECT_ID = process.env.PROJECT_ID;
const TEAM_ID = process.env.TEAM_ID;
const DAYS_TO_KEEP = Number(process.env.DAYS_TO_KEEP || 3);
const THREE_DAYS_AGO = Date.now() - DAYS_TO_KEEP * 24 * 60 * 60 * 1000;

async function vercelFetch(url, options = {}) {
  const sep = url.includes("?") ? "&" : "?";
  const teamParam = TEAM_ID ? `${sep}teamId=${encodeURIComponent(TEAM_ID)}` : "";
  // Only append teamId if not already present
  const finalUrl = url.includes("teamId=") ? url : url + teamParam;
  return fetch(finalUrl, {
    ...options,
    headers: {
      Authorization: `Bearer ${VERCEL_TOKEN}`,
      ...(options.headers || {}),
    },
  });
}

async function cleanupOldDeployments() {
  if (!VERCEL_TOKEN) {
    console.error("Error: VERCEL_TOKEN environment variable is missing.");
    process.exit(1);
  }
  if (!PROJECT_ID) {
    console.error("Error: PROJECT_ID environment variable is missing.");
    process.exit(1);
  }

  try {
    console.log("Fetching deployments...");
    const url = `https://api.vercel.com/v6/deployments?projectId=${encodeURIComponent(PROJECT_ID)}&limit=100`;
    const response = await vercelFetch(url);

    if (!response.ok) {
      const body = await response.text();
      throw new Error(`Failed to fetch deployments: ${response.status} ${response.statusText} ${body}`);
    }

    const data = await response.json();
    const deployments = data.deployments || [];
    console.log(`Found ${deployments.length} total deployments.`);

    for (const deployment of deployments) {
      if (deployment.target === "production") {
        console.log(`Skipping active production deployment: ${deployment.url}`);
        continue;
      }

      if (deployment.createdAt < THREE_DAYS_AGO) {
        console.log(
          `Deleting deployment: ${deployment.url} (Created: ${new Date(deployment.createdAt).toDateString()})`,
        );

        const deleteUrl = `https://api.vercel.com/v13/deployments/${encodeURIComponent(deployment.uid)}`;
        const deleteResponse = await vercelFetch(deleteUrl, { method: "DELETE" });

        if (!deleteResponse.ok) {
          const body = await deleteResponse.text();
          console.error(`Failed to delete ${deployment.uid}: ${deleteResponse.status} ${deleteResponse.statusText} ${body}`);
        } else {
          console.log(`Successfully deleted ${deployment.uid}`);
        }
      }
    }
    console.log("Cleanup process completed!");
  } catch (error) {
    console.error("Error running cleanup:", error);
    process.exit(1);
  }
}

cleanupOldDeployments();