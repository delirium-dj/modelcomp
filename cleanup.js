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
    
    // Explicit clean URL with explicit query parameters
    const targetUrl = 'https://vercel.com' + PROJECT_ID + '&limit=100';
    
    const response = await fetch(targetUrl, {
      method: 'GET',
      headers: { 
        'Authorization': 'Bearer ' + VERCEL_TOKEN,
        'Content-Type': 'application/json'
      }
    });

    const contentType = response.headers.get("content-type") || "";
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error("Vercel API status " + response.status + ": " + errorText.substring(0, 200));
    }

    if (!contentType.includes("application/json")) {
      const htmlText = await response.text();
      const titleMatch = htmlText.match(/<title>([\s\S]*?)<\/title>/i);
      const cleanTitle = titleMatch ? titleMatch[1].trim() : "No Title Found";
      throw new Error("API Route Blocked. Received HTML page titled: '" + cleanTitle + "'. Please check your endpoint spelling.");
    }

    const data = await response.json();
    const deployments = data.deployments || [];
    console.log("Found " + deployments.length + " total deployments.");

    let deletionCount = 0;

    for (const deployment of deployments) {
      // Do not delete active production setups
      if (deployment.target === 'production') continue;

      if (deployment.createdAt < THREE_DAYS_AGO) {
        console.log("Deleting deployment: " + deployment.url);
        
        const deleteUrl = 'https://api.vercel.com/v13/deployments/' + deployment.uid;
        const deleteResponse = await fetch(deleteUrl, {
          method: 'DELETE',
          headers: { 
            'Authorization': 'Bearer ' + VERCEL_TOKEN,
            'Content-Type': 'application/json'
          }
        });

        if (!deleteResponse.ok) {
          const deleteError = await deleteResponse.text();
          console.error("Failed to delete " + deployment.uid + ": " + deleteError.substring(0, 100));
        } else {
          console.log("Successfully deleted " + deployment.uid);
          deletionCount++;
        }
      }
    }
    console.log('Cleanup process completed successfully! Total removed: ' + deletionCount);
  } catch (error) {
    console.error('Detailed Execution Error:', error.message || error);
    process.exit(1);
  }
}

cleanupOldDeployments();
