#!/bin/bash

ID="10"
curl "http://localhost:4741/games/$ID" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json"

echo
