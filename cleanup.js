const VERCEL_TOKEN = process.env.VERCEL_TOKEN;
const PROJECT_ID = 'prj_0prkidewxqbh5khccp8ai17b3omh'; 
const DAYS_TO_KEEP = 3;
const THREE_DAYS_AGO = Date.now() - DAYS_TO_KEEP * 24 * 60 * 60 * 1000;

async function cleanupOldDeployments() {
  if (!VERCEL_TOKEN) {
    console.error("Error: VERCEL_TOKEN environment variable is missing.");
    process.exit(1);
  }

  try {
    console.log("Fetching deployments from Vercel...");
    
    const query = new URLSearchParams({ projectId: PROJECT_ID, limit: '100' }).toString();
    const url = 'https://vercel.com?' + query;
    
    const response = await fetch(url, {
      headers: { 
        'Authorization': 'Bearer ' + VERCEL_TOKEN,
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 GitHubAutomation'
      },
    });

    const contentType = response.headers.get("content-type") || "";
    
    if (!contentType.includes("application/json")) {
      const htmlText = await response.text();
      
      // Extract the webpage title or body text to see what Vercel is displaying
      const titleMatch = htmlText.match(/<title>([\s\S]*?)<\/title>/i);
      const cleanTitle = titleMatch ? titleMatch[1].trim() : "No Title Found";
      
      // Grab text inside <body> to see the human-readable error
      const bodyMatch = htmlText.match(/<body>([\s\S]*?)<\/body>/i);
      const bodySnippet = bodyMatch ? bodyMatch[1].replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().substring(0, 300) : htmlText.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().substring(0, 300);

      throw new Error(`\n[Vercel Page Intercepted]\nHTTP Status: ${response.status}\nPage Title: ${cleanTitle}\nPage Content: ${bodySnippet}\n`);
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
          console.error("Failed to delete " + deployment.uid);
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
