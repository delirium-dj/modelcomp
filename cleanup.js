import https from 'https';

const VERCEL_TOKEN = process.env.VERCEL_TOKEN;
const PROJECT_ID = 'prj_0prkidewxqbh5khccp8ai17b3omh'; // Your verified Project ID
const DAYS_TO_KEEP = 3;
const THREE_DAYS_AGO = Date.now() - (DAYS_TO_KEEP * 24 * 60 * 60 * 1000);

if (!VERCEL_TOKEN) {
  console.error("Error: VERCEL_TOKEN secret is missing.");
  process.exit(1);
}

const options = {
  hostname: '://vercel.com',
  path: `/v6/deployments?projectId=${PROJECT_ID}&limit=100`,
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${VERCEL_TOKEN}`,
    'Content-Type': 'application/json'
  }
};

console.log("Fetching deployments from Vercel API...");

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  
  res.on('end', () => {
    if (res.statusCode !== 200) {
      console.error(`API Error: Received status ${res.statusCode}`);
      process.exit(1);
    }

    try {
      const json = JSON.parse(data);
      const deployments = json.deployments || [];
      console.log(`Found ${deployments.length} total deployments.`);

      deployments.forEach((d) => {
        if (d.target === 'production') return;

        if (d.createdAt < THREE_DAYS_AGO) {
          console.log(`Deleting deployment: ${d.url} (${d.uid})`);
          
          const delOptions = {
            hostname: '://vercel.com',
            path: `/v13/deployments/${d.uid}`,
            method: 'DELETE',
            headers: {
              'Authorization': `Bearer ${VERCEL_TOKEN}`
            }
          };

          const delReq = https.request(delOptions, (delRes) => {
            if (delRes.statusCode === 200) {
              console.log(`Successfully deleted ${d.uid}`);
            } else {
              console.error(`Failed to delete ${d.uid}: Status ${delRes.statusCode}`);
            }
          });
          delReq.end();
        }
      });
    } catch (e) {
      console.error("Failed to parse JSON response:", e.message);
      process.exit(1);
    }
  });
});

req.on('error', (e) => {
  console.error(`Connection failed: ${e.message}`);
  process.exit(1);
});

req.end();
