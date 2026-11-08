const VERCEL_TOKEN =
  vcp_5HCtJObRBh9wvcDxTiWgkFcjl5GjAOYJEf4hfL5Gm7rIqjvnZx1Q7Hhn;
const PROJECT_ID = "prj_0prkiDEwxQBH5KhCcP8ai17b3OmH"; // Replace with your Vercel Project ID
const DAYS_TO_KEEP = 3;
const THREE_DAYS_AGO = Date.now() - DAYS_TO_KEEP * 24 * 60 * 60 * 1000;

async function cleanupOldDeployments() {
  if (!VERCEL_TOKEN) {
    console.error("Error: VERCEL_TOKEN environment variable is missing.");
    process.exit(1);
  }

  try {
    // 1. Fetch recent deployments from the Vercel API
    console.log("Fetching deployments...");
    const response = await fetch(`https://vercel.com{PROJECT_ID}&limit=100`, {
      headers: { Authorization: `Bearer ${VERCEL_TOKEN}` },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch deployments: ${response.statusText}`);
    }

    const data = await response.json();
    const deployments = data.deployments || [];
    console.log(`Found ${deployments.length} total deployments.`);

    // 2. Loop through and delete deployments older than 3 days
    for (const deployment of deployments) {
      // Safety skip: Never delete active production deployments
      if (deployment.target === "production") {
        console.log(`Skipping active production deployment: ${deployment.url}`);
        continue;
      }

      if (deployment.createdAt < THREE_DAYS_AGO) {
        console.log(
          `Deleting deployment: ${deployment.url} (Created: ${new Date(deployment.createdAt).toDateString()})`,
        );

        const deleteResponse = await fetch(
          `https://vercel.com{deployment.uid}`,
          {
            method: "DELETE",
            headers: { Authorization: `Bearer ${VERCEL_TOKEN}` },
          },
        );

        if (!deleteResponse.ok) {
          console.error(
            `Failed to delete ${deployment.uid}: ${deleteResponse.statusText}`,
          );
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
