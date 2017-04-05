curl --include --request PATCH "http://localhost:4741/games/45" \
    --header "Content-Type: application/json" \
    --data '{
      "book": {
        "title": "an example title",
        "author": "Rebekah"
      }
    }'
