const game = ['', '', '', '', '', '', '', '', '']
let currentPlayer = 'x'

const makeMove = function (array, tile, player) {
  if (currentPlayer === 'x') {
    array[tile] = currentPlayer
    currentPlayer = 'o'
  } else {
    array[tile] = currentPlayer
    currentPlayer = 'x'
  }
}
// determine tile selected by document.getElementById
// pass that into the array at the appropriate position
// so like for a click on the first tile, send x or o to game[0]
let tile
document.getElementById('one').addEventListener('click', function () {
  game[0] = currentPlayer; this.innerHTML = currentPlayer;
  makeMove(game, tile, currentPlayer); console.log(game);
})
document.getElementById('two').addEventListener('click', function () {
  game[1] = currentPlayer; this.innerHTML = currentPlayer;
  makeMove(game, tile, currentPlayer); console.log(game);
})
document.getElementById('three').addEventListener('click', function () {
  game[2] = currentPlayer; this.innerHTML = currentPlayer;
  makeMove(game, tile, currentPlayer); console.log(game);
})
document.getElementById('four').addEventListener('click', function () {
  game[3] = currentPlayer; this.innerHTML = currentPlayer;
  makeMove(game, tile, currentPlayer); console.log(game);
})
document.getElementById('five').addEventListener('click', function () {
  game[4] = currentPlayer; this.innerHTML = currentPlayer;
  makeMove(game, tile, currentPlayer); console.log(game);
})
document.getElementById('six').addEventListener('click', function () {
  game[5] = currentPlayer; this.innerHTML = currentPlayer;
  makeMove(game, tile, currentPlayer); console.log(game);
})
document.getElementById('seven').addEventListener('click', function () {
  game[6] = currentPlayer; this.innerHTML = currentPlayer;
  makeMove(game, tile, currentPlayer); console.log(game);
})
document.getElementById('eight').addEventListener('click', function () {
  game[7] = currentPlayer; this.innerHTML = currentPlayer;
  makeMove(game, tile, currentPlayer); console.log(game);
})
document.getElementById('nine').addEventListener('click', function () {
  game[8] = currentPlayer; this.innerHTML = currentPlayer;
  makeMove(game, tile, currentPlayer); console.log(game);
})

// makeMove(game, tile, currentPlayer)

// console.log(game)
// console.log(currentPlayer)

// makeMove(game, 0, currentPlayer)

// console.log(game)
// console.log(currentPlayer)

let winningPlayer

const winningCombo = function (array) {
// [[0 1 2],
  if ((game[0] === game[1]) && (game[1] === game[2]) && (game[2] !== '')) {
    winningPlayer = game[0]
    console.log('Player ' + winningPlayer + ' wins!')

  }
  // [345
  else if ((game[3] === game[4]) && (game[4] === game[5]) && (game[5] !== ''))
  {
    winningPlayer = game[0]
    console.log('Player ' + winningPlayer + ' wins!')

  }
  // 678,
  else if ((game[6] === game[7]) && (game[7] === game[8]) && (game[8] !== ''))
  {
    winningPlayer = game[0]
    console.log('Player ' + winningPlayer + ' wins!')

  }
  // 036
  else if ((game[0] === game[3]) && (game[3] === game[6]) && (game[6] !== ''))
  {
    winningPlayer = game[1]
    console.log('Player ' + winningPlayer + ' wins!')

  }
  // [147
  else if ((game[1] === game[4]) && (game[4] === game[7]) && (game[7] !== ''))
  {
    winningPlayer = game[2]
    console.log('Player ' + winningPlayer + ' wins!')

  }
  // [258
  else if ((game[2] === game[5]) && (game[5] === game[8]) && (game[8] !== ''))
  {
    winningPlayer = game[2]
    console.log('Player ' + winningPlayer + ' wins!')

  }
  // [048
  else if ((game[0] === game[4]) && (game[4] === game[8]) && (game[8] !== ''))
  {
    winningPlayer = game[3]
    console.log('Player ' + winningPlayer + ' wins!')

  }
  // 642
  else if ((game[6] === game[4]) && (game[4] === game[2]) && (game[2] !== ''))
  {
    winningPlayer = game[5]
    console.log('Player ' + winningPlayer + ' wins!')

  }
  winningCombo(game)
  console.log(winningCombo)
}



// winningCombo(game)
// console.log(winningCombo)
// console.log(game)

// // array containing tiles objects
// const tiles = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
//
// // const wins = [[1, 2, 3], [1, 4, 7], [1, 5, 9], [2, 4, 8], [3, 6, 9], [3, 5, 7], [4, 5, 6], [6, 7, 8], [7, 8, 9]];
// // populate the array of tiles as they are selected
// const tilesSelected = ['o', 'o', 'o']
//
// // tilesSelected.sort()
//
// // const wins = [[1, 2, 3], [1, 4, 7], [1, 5, 9], [2, 4, 8], [3, 6, 9], [3, 5, 7], [4, 5, 6], [6, 7, 8], [7, 8, 9]]
//
// // event handler determines tile # and pushes to the tilesSelected array
// document.getElementById('one').addEventListener('click', function () { this.tiles = tiles[0]; console.log(this.tiles); this.innerHTML = 'o' })
// document.getElementById('two').addEventListener('click', function () { this.tiles = tiles[1]; console.log(this.tiles); this.innerHTML = 'o' })
// document.getElementById('three').addEventListener('click', function () { this.tiles = tiles[2]; console.log(this.tiles); this.innerHTML = 'o' })
// document.getElementById('four').addEventListener('click', function () { this.tiles = tiles[3]; console.log(this.tiles); tilesSelected.push(this.tiles); this.innerHTML = 'o' })
// document.getElementById('five').addEventListener('click', function () { this.tiles = tiles[4]; console.log(this.tiles); tilesSelected.push(this.tiles); this.innerHTML = 'x' })
// document.getElementById('six').addEventListener('click', function () { this.tiles = tiles[5]; console.log(this.tiles); tilesSelected.push(this.tiles); this.innerHTML = 'o' })
// document.getElementById('seven').addEventListener('click', function () { this.tiles = tiles[6]; console.log(this.tiles); tilesSelected.push(this.tiles); this.innerHTML = 'x' })
// document.getElementById('eight').addEventListener('click', function () { this.tiles = tiles[7]; console.log(this.tiles); tilesSelected.push(this.tiles); this.innerHTML = 'o' })
// document.getElementById('nine').addEventListener('click', function () { this.tiles = tiles[8]; console.log(this.tiles); tilesSelected.push(this.tiles); this.innerHTML = 'x' })
//
// // write a function that does all the above, then calls isgameover.
//
// function isGameOver () {
//   // for (let i = 0; i < tiles.length; i++) {
//   // const i = 0
//   if ((tilesSelected[0] === tilesSelected[1]) && (tilesSelected[0] === tilesSelected[2]) && (tilesSelected[0] !== 0)) {
//     console.log('Blocks 1, 2 and 3 win')
//         // _win = 1
//     // return
//   }
// }
//
// isGameOver()
