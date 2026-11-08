const VERCEL_TOKEN = process.env.VERCEL_TOKEN;
const PROJECT_ID = 'prj_0prkidewxqbh5khccp8ai17b3omh'; // Your verified Project ID
const DAYS_TO_KEEP = 3;
const THREE_DAYS_AGO = Date.now() - DAYS_TO_KEEP * 24 * 60 * 60 * 1000;

async function cleanupOldDeployments() {
  if (!VERCEL_TOKEN) {
    console.error("Error: VERCEL_TOKEN environment variable is missing.");
    process.exit(1);
  }

  try {
    console.log("Fetching deployments from Vercel...");
    
    // Safely constructs: https://vercel.com
    const query = new URLSearchParams({ projectId: PROJECT_ID, limit: '100' }).toString();
    const url = 'https://vercel.com?' + query;
    
    const response = await fetch(url, {
      headers: { 'Authorization': 'Bearer ' + VERCEL_TOKEN },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error("Vercel API status " + response.status + ": " + errorText);
    }

    const data = await response.json();
    const deployments = data.deployments || [];
    console.log("Found " + deployments.length + " total deployments.");

    for (const deployment of deployments) {
      if (deployment.target === 'production') continue;

      if (deployment.createdAt < THREE_DAYS_AGO) {
        console.log("Deleting deployment: " + deployment.url);
        
        const deleteUrl = 'https://vercel.com' + deployment.uid;
        const deleteResponse = await fetch(deleteUrl, {
          method: 'DELETE',
          headers: { 'Authorization': 'Bearer ' + VERCEL_TOKEN },
        });

        if (!deleteResponse.ok) {
          const deleteError = await deleteResponse.text();
          console.error("Failed to delete " + deployment.uid + ": " + deleteError);
        } else {
          console.log("Successfully deleted " + deployment.uid);
        }
      }
    }
    console.log('Cleanup process completed successfully!');
  } catch (error) {
    console.error('Detailed Execution Error:', error);
    process.exit(1);
  }
}

cleanupOldDeployments();
