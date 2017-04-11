curl --include --request GET "http://localhost:4741/games" \
  --header "Content-Type: application/json" \
  --data '{
  "game": {
    "id": ,
    "cells": ["","","","","","","","",""],
    "over": false,
    "player_x": {
      "id": ,
      "email": ""
    },
    "player_o": null
  }
}
