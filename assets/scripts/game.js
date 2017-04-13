const api = require('./auth/api')
const ui = require('./auth/ui')
const game = ['', '', '', '', '', '', '', '', '']
const player_x = 'x'
const player_o = 'o'
let gameOver = false
let currentPlayer = 'x'
// const game = cells

// when user access page, only show signin or sighup.
// then after aujth, present board  pw reset, new game button
// show and/or hid elements by id
// jquery
// hid signin once your'e in and enable it once yourre out

// add stats

const moveData = {
  'game': {
    'cell': {
      'index': '',
      'value': ''
    },
    'over': false
  }
}

function clearBoard () {
  console.log('in the clearBoard function now')
  for (const i in game) {
    game[i] = ''
  }
}

function removeXO () {
  console.log('in the removeXO function now')
  gameOver = false
  moveData.game.over = false
  document.getElementById('one').innerHTML = ''
  document.getElementById('two').innerHTML = ''
  document.getElementById('three').innerHTML = ''
  document.getElementById('four').innerHTML = ''
  document.getElementById('five').innerHTML = ''
  document.getElementById('six').innerHTML = ''
  document.getElementById('seven').innerHTML = ''
  document.getElementById('eight').innerHTML = ''
  document.getElementById('nine').innerHTML = ''
}

const makeMove = function (array, tile, player) {
  api.updateGame(moveData)
  .then(ui.updateGameSuccess)
  .catch(ui.updateGameFailure)
  if (currentPlayer === 'x') {
    array[tile] = currentPlayer
    currentPlayer = 'o'
  } else {
    array[tile] = currentPlayer
    currentPlayer = 'x'
  }
  // $(this).unbind('click')
  winningCombo(game)
}

function announceWinner () {
  document.getElementById('announce').innerHTML = 'Player ' + winningPlayer + ' won!'
  gameOver = true
  moveData.game.over = true
  console.log(moveData)
  // $('#myModal').modal('show');
}

function announceCat () {
  document.getElementById('announce').innerHTML = 'Cat game!  Try again!'
  gameOver = true
  moveData.game.over = true
  // $('#myModal').modal('show');
}

let tile

document.getElementById('one').addEventListener('click', function () {
  if (this.innerHTML === '' && gameOver === false) {
    console.log(gameOver)
    game[0] = currentPlayer; this.innerHTML = currentPlayer
    moveData.game.cell.index = 0
    moveData.game.cell.value = currentPlayer
    makeMove(game, tile, currentPlayer); console.log(game + currentPlayer)
  }
})
document.getElementById('two').addEventListener('click', function () {
  if (this.innerHTML === '' && gameOver === false) {
    game[1] = currentPlayer; this.innerHTML = currentPlayer
    moveData.game.cell.index = 1
    moveData.game.cell.value = currentPlayer
    makeMove(game, tile, currentPlayer); console.log(game + currentPlayer)
  }
})
document.getElementById('three').addEventListener('click', function () {
  if (this.innerHTML === '' && gameOver === false) {
    game[2] = currentPlayer; this.innerHTML = currentPlayer
    moveData.game.cell.index = 2
    moveData.game.cell.value = currentPlayer
    makeMove(game, tile, currentPlayer); console.log(game + currentPlayer)
  }
})
document.getElementById('four').addEventListener('click', function () {
  if (this.innerHTML === '' && gameOver === false) {
    game[3] = currentPlayer; this.innerHTML = currentPlayer
    moveData.game.cell.index = 3
    moveData.game.cell.value = currentPlayer
    makeMove(game, tile, currentPlayer); console.log(game + currentPlayer)
  }
})
document.getElementById('five').addEventListener('click', function () {
  if (this.innerHTML === '' && gameOver === false) {
    game[4] = currentPlayer; this.innerHTML = currentPlayer
    moveData.game.cell.index = 4
    moveData.game.cell.value = currentPlayer
    makeMove(game, tile, currentPlayer); console.log(game + currentPlayer)
  }
})
document.getElementById('six').addEventListener('click', function () {
  if (this.innerHTML === '' && gameOver === false) {
    game[5] = currentPlayer; this.innerHTML = currentPlayer
    moveData.game.cell.index = 5
    moveData.game.cell.value = currentPlayer
    makeMove(game, tile, currentPlayer); console.log(game + currentPlayer)
  }
})
document.getElementById('seven').addEventListener('click', function () {
  if (this.innerHTML === '' && gameOver === false) {
    game[6] = currentPlayer; this.innerHTML = currentPlayer
    moveData.game.cell.index = 6
    moveData.game.cell.value = currentPlayer
    makeMove(game, tile, currentPlayer); console.log(game + currentPlayer)
  }
})
document.getElementById('eight').addEventListener('click', function () {
  if (this.innerHTML === '' && gameOver === false) {
    game[7] = currentPlayer; this.innerHTML = currentPlayer
    moveData.game.cell.index = 7
    moveData.game.cell.value = currentPlayer
    makeMove(game, tile, currentPlayer); console.log(game + currentPlayer)
  }
})
document.getElementById('nine').addEventListener('click', function () {
  if (this.innerHTML === '' && gameOver === false) {
    game[8] = currentPlayer; this.innerHTML = currentPlayer
    moveData.game.cell.index = 8
    moveData.game.cell.value = currentPlayer
    makeMove(game, tile, currentPlayer); console.log(game + currentPlayer)
  }
})

let winningPlayer
const winningCombo = function (array) {
// [[0 1 2],
  if ((game[0] === game[1]) && (game[1] === game[2]) && (game[2] !== '')) {
    // wait is this it?  I'm saying winning player is game 0.
    winningPlayer = game[0]
    console.log('Player ' + winningPlayer + ' wins!')
    announceWinner(winningPlayer)
    // trackWins(winningPlayer)
    // turnoffclicks()
    // could I pop up a modal here which would announce the winner and reset the game?
  } else if ((game[3] === game[4]) && (game[4] === game[5]) && (game[5] !== '')) {
    winningPlayer = game[3]
    console.log('Player ' + winningPlayer + ' wins!')
    announceWinner(winningPlayer)
  } else if ((game[6] === game[7]) && (game[7] === game[8]) && (game[8] !== '')) {
    winningPlayer = game[6]
    console.log('Player ' + winningPlayer + ' wins!')
    announceWinner(winningPlayer)
  } else if ((game[0] === game[3]) && (game[3] === game[6]) && (game[6] !== '')) {
    winningPlayer = game[0]
    console.log('Player ' + winningPlayer + ' wins!')
    announceWinner(winningPlayer)
  } else if ((game[1] === game[4]) && (game[4] === game[7]) && (game[7] !== '')) {
    winningPlayer = game[1]
    console.log('Player ' + winningPlayer + ' wins!')
    announceWinner(winningPlayer)
  } else if ((game[2] === game[5]) && (game[5] === game[8]) && (game[8] !== '')) {
    winningPlayer = game[2]
    console.log('Player ' + winningPlayer + ' wins!')
    announceWinner(winningPlayer)
  } else if ((game[0] === game[4]) && (game[4] === game[8]) && (game[8] !== '')) {
    winningPlayer = game[0]
    console.log('Player ' + winningPlayer + ' wins!')
    announceWinner(winningPlayer)
  } else if ((game[6] === game[4]) && (game[4] === game[2]) && (game[2] !== '')) {
    winningPlayer = game[6]
    console.log('Player ' + winningPlayer + ' wins!')
    announceWinner(winningPlayer)
  } else if ((game[0] !== '') && (game[1] !== '') && (game[2] !== '') && (game[3] !== '') && (game[4] !== '') && (game[5] !== '') && (game[6] !== '') && (game[7] !== '') && (game[8] !== '')) {
    winningPlayer = false
    console.log('Cat game - try again!')
    announceCat()
  }
}

// store.game = create.game
module.exports = {
  clearBoard,
  removeXO,
  gameOver,
  moveData
}
