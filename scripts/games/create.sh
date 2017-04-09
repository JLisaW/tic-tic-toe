curl --include --request GET "http://localhost:4741/games" \
  --header "Content-Type: application/json" \
  --data '{
  "games": {
    "id": ,
    "game": ["","","","","","","","",""],
    "over": false,
    "currentPlayer": {
      "id": ,
      "email": "aa"
    },
  },
}'
