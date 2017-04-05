#!/bin/bash

# use like this:
#
#    ID=123 TITLE="Harry Potter: Deathly Hallows" AUTHOR="J.K. Rowling" ./scripts/books.sh
#


  curl --include --request POST "http://localhost:4741/books" \
    --header "Content-Type: application/json" \
    --data '{
      "book": {
        "title": "Joni Journey",
        "author": "Joni the bawss"
      }
    }'
