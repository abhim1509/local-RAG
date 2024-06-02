Running RAG privately.

Prerequisites:

1. Llamaindex (NodeJS)
2. Privately downloaded LLM

cURL request:

curl --location 'http://localhost:8001/api/chat' \
--header 'Content-Type: application/json' \
--data '{"messages": [{"content":"List some FAQs?"}]}'
