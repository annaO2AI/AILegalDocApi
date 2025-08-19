const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://aisummary-api-usc-geemebfqfmead8f4.centralus-01.azurewebsites.net"
// "https://aisummary-api-fue6a9gxabdceng4.canadacentral-01.azurewebsites.net"

//ai search
const API_BASE_URL_AISEARCH =
  process.env.NEXT_PUBLIC_API_BASE_URL_AISEARCH ||
  "https://ai-search-recruitment-api-hcg0c3bahzexatab.centralus-01.azurewebsites.net/"



//ai-legal-doc-api
const API_BASE_URL_AI_LEGALDOCAPI =
  process.env.NEXT_PUBLIC_API_BASE_URL_AI_LEGALDOCAPI ||
  "https://ai-legal-doc-api-gqbybhc6dnfhhrg4.canadacentral-01.azurewebsites.net"


export const API_ROUTES = {
  audioFiles: `${API_BASE_URL}/audio-files`,
  models: `${API_BASE_URL}/models`,
  processCall: `${API_BASE_URL}/process-call`,
  sentimentGraphInteractive: `${API_BASE_URL}/sentiment-graph-interactive`,
  downloadReport: `${API_BASE_URL}/download-report`,
  // useaccess: `${API_BASE_URL}/get-user-role`,

  //AI Search api's
  upload: `${API_BASE_URL_AISEARCH}/upload`,
  conversations: `${API_BASE_URL_AISEARCH}/conversations`,
  ask: `${API_BASE_URL_AISEARCH}/ask`,
  deleteConversation: (conversation_id: string) =>
    `${API_BASE_URL_AISEARCH}/conversations/${conversation_id}`,


   //ai-legal-doc-api
   uploadailegal : `${API_BASE_URL_AI_LEGALDOCAPI}/upload`, 
   askailegal : `${API_BASE_URL_AI_LEGALDOCAPI}/ask`, 
   conversationsailegal : `${API_BASE_URL_AI_LEGALDOCAPI}/conversations`, 
}
