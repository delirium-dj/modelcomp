const VERCEL_TOKEN = process.env.VERCEL_TOKEN;
const PROJECT_ID = 'prj_0prkidewxqbh5khccp8ai17b3omh'; 

// ⚠️ IF YOU ARE IN A TEAM, CHANGE THIS TO YOUR TEAM SLUG/ID (e.g. 'my-team-name')
// Leave it as null if you are on a personal hobby account.
const TEAM_SLUG = null; 

const DAYS_TO_KEEP = 3;
const THREE_DAYS_AGO = Date.now() - DAYS_TO_KEEP * 24 * 60 * 60 * 1000;

async function cleanupOldDeployments() {
  if (!VERCEL_TOKEN) {
    console.error("Error: VERCEL_TOKEN environment variable is missing.");
    process.exit(1);
  }

  try {
    console.log("Fetching deployments from Vercel...");
    
    // Construct query securely
    const params = { projectId: PROJECT_ID, limit: '100' };
    if (TEAM_SLUG) params.teamId = TEAM_SLUG;
    
    const query = new URLSearchParams(params).toString();
    const url = 'https://vercel.com?' + query;
    
    const response = await fetch(url, {
      headers: { 'Authorization': 'Bearer ' + VERCEL_TOKEN },
    });

    const contentType = response.headers.get("content-type") || "";
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Vercel API returned status ${response.status}: ${errorText.substring(0, 200)}`);
    }

    if (!contentType.includes("application/json")) {
      const textOutput = await response.text();
      throw new Error(`Unexpected response type (${contentType}). Content: ${textOutput.substring(0, 200)}`);
    }

    const data = await response.json();
    const deployments = data.deployments || [];
    console.log("Found " + deployments.length + " total deployments.");

    for (const deployment of deployments) {
      if (deployment.target === 'production') continue;

      if (deployment.createdAt < THREE_DAYS_AGO) {
        console.log("Deleting deployment: " + deployment.url);
        
        const deleteParams = TEAM_SLUG ? ('?teamId=' + TEAM_SLUG) : '';
        const deleteUrl = 'https://vercel.com' + deployment.uid + deleteParams;
        
        const deleteResponse = await fetch(deleteUrl, {
          method: 'DELETE',
          headers: { 'Authorization': 'Bearer ' + VERCEL_TOKEN },
        });

        if (!deleteResponse.ok) {
          const deleteError = await deleteResponse.text();
          console.error("Failed to delete " + deployment.uid + ": " + deleteError.substring(0, 100));
        } else {
          console.log("Successfully deleted " + deployment.uid);
        }
      }
    }
    console.log('Cleanup process completed successfully!');
  } catch (error) {
    console.error('Detailed Execution Error:', error.message || error);
    process.exit(1);
  }
}

cleanupOldDeployments();
