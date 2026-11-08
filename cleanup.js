const VERCEL_TOKEN = process.env.VERCEL_TOKEN;

// ⚠️ MAKE SURE THIS MATCHES YOUR VERCEL PROJECT ID
// You can find this in Vercel Dashboard > Project Settings > General
const PROJECT_ID = "prj_cZ6fRz2Xp2qf6Sj9K3mP8vWq4t1B";

const DAYS_TO_KEEP = 3;
const THREE_DAYS_AGO = Date.now() - DAYS_TO_KEEP * 24 * 60 * 60 * 1000;

async function cleanupOldDeployments() {
  if (!VERCEL_TOKEN) {
    console.error(
      "Error: VERCEL_TOKEN environment variable is missing in GitHub Secrets.",
    );
    process.exit(1);
  }

  try {
    console.log("Fetching deployments from Vercel...");
    const response = await fetch(`https://vercel.com{PROJECT_ID}&limit=100`, {
      headers: { Authorization: `Bearer ${VERCEL_TOKEN}` },
    });

    if (!response.ok) {
      // This will read out the exact error message text from Vercel's server
      const errorText = await response.text();
      throw new Error(
        `Vercel API returned status ${response.status}: ${errorText}`,
      );
    }

    const data = await response.json();
    const deployments = data.deployments || [];
    console.log(`Found ${deployments.length} total deployments.`);

    for (const deployment of deployments) {
      if (deployment.target === "production") continue;

      if (deployment.createdAt < THREE_DAYS_AGO) {
        console.log(`Deleting deployment: ${deployment.url}`);

        const deleteResponse = await fetch(
          `https://vercel.com{deployment.uid}`,
          {
            method: "DELETE",
            headers: { Authorization: `Bearer ${VERCEL_TOKEN}` },
          },
        );

        if (!deleteResponse.ok) {
          const deleteError = await deleteResponse.text();
          console.error(`Failed to delete ${deployment.uid}: ${deleteError}`);
        } else {
          console.log(`Successfully deleted ${deployment.uid}`);
        }
      }
    }
    console.log("Cleanup process completed successfully!");
  } catch (error) {
    // 🔍 This prints out the complete error stack trace to the GitHub console log
    console.error("Detailed Execution Error:", error);
    process.exit(1);
  }
}

cleanupOldDeployments();
