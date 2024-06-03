Running RAG privately.

Prerequisites:

1. Llamaindex (NodeJS)
2. Privately downloaded LLM
3. Add .env file with following variables:
   KNOWLEDGE_SOURCE="./data"
   LLM_MODEL=""
   EMBEDDING_MODEL=""
   PORT=""
   STORAGE_CACHE_DIR="./cache"
   PROMPT=""

cURL request:

curl --location 'http://localhost:8001/api/chat' \
--header 'Content-Type: application/json' \
--data '{"messages": [{"content":"List some FAQs?"}]}'

11-24
40.9-52.766
50-52
