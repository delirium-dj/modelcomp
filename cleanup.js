// ❌ WRONG (Never hardcode strings or console.log this value)
// const VERCEL_TOKEN = "ucj_example_token_here";

//  CORRECT (Securely reads the secret injected by GitHub)
const VERCEL_TOKEN = process.env.VERCEL_TOKEN;
const PROJECT_ID = "prj_0prkiDEwxQBH5KhCcP8ai17b3OmH"; // It is safe to keep your Vercel Project ID here
const DAYS_TO_KEEP = 3;
const THREE_DAYS_AGO = Date.now() - DAYS_TO_KEEP * 24 * 60 * 60 * 1000;

async function cleanupOldDeployments() {
  if (!VERCEL_TOKEN) {
    console.error("Error: VERCEL_TOKEN environment variable is missing.");
    process.exit(1);
  }

  try {
    console.log("Fetching deployments...");
    const response = await fetch(`https://vercel.com{PROJECT_ID}&limit=100`, {
      headers: { Authorization: `Bearer ${VERCEL_TOKEN}` }, // Sent securely in the request header
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch deployments: ${response.statusText}`);
    }

    const data = await response.json();
    const deployments = data.deployments || [];
    console.log(`Found ${deployments.length} total deployments.`);

    for (const deployment of deployments) {
      if (deployment.target === "production") continue;

      if (deployment.createdAt < THREE_DAYS_AGO) {
        // We print the deployment URL and deployment UID, NOT the security token
        console.log(`Deleting deployment: ${deployment.url}`);

        const deleteResponse = await fetch(
          `https://vercel.com{deployment.uid}`,
          {
            method: "DELETE",
            headers: { Authorization: `Bearer ${VERCEL_TOKEN}` },
          },
        );

        if (!deleteResponse.ok) {
          console.error(`Failed to delete ${deployment.uid}`);
        } else {
          console.log(`Successfully deleted ${deployment.uid}`);
        }
      }
    }
    console.log("Cleanup process completed!");
  } catch (error) {
    console.error("Error running cleanup process.");
    process.exit(1);
  }
}

cleanupOldDeployments();
