const game = ['', '', '', '', '', '', '', '', '']
const player_x = 'x'
const player_o = 'o'
let gameOver = false
let currentPlayer = 'x'

// LEFT TO DO
// hide WINNER announcement as soon as user selects any item after a game
  // has been won
// hide elements at startup
  // user stats
// enable after signin
  // user stats
// hide after signout
  // user stats
// show user stats
// write readme
// API stuff
  // get game
  // update game
  // get all games

function clearBoard () {
  console.log('in the clearBoard function now')
  for (const i in game) {
    game[i] = ''
  }
}

function startGame () {
  gameOver = false
  document.getElementById('announce').innerHTML = ''
  $('.ticBoard').show()
  $('#signupSuccessAnnounce').hide()
  $('#signupFailureAnnounce').hide()
  $('#signinSuccessAnnounce').hide()
  $('#signinFailureAnnounce').hide()
  $('#pwchangeSuccessAnnounce').hide()
  $('#pwchangeFailureAnnounce').hide()
  $('#signoutSuccessAnnounce').hide()
  $('#signoutFailureAnnounce').hide()
}
// function trackWins (winningPlayer) {
//   let xWins = 0
//   let oWins = 0
//   if (winningPlayer === 'x') {
//     xWins++
//   }
//   else {
//     oWins++
//   }
//   console.log(winningPlayer + oWins + 'this is trackwins')
// }

// const winner = function () {
  // let xWins = 0
  // let oWins = 0
//   if (winningPlayer === 'x') {
//     xWins +=
//     console.log('x has ' + xWins + ' wins')
//   } else {
//     oWins +=
//     console.log('o has ' + oWins + ' wins')
//   }
// }

function removeXO () {
  console.log('in the removeXO function now')
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

function announceWinner () {
  document.getElementById('announce').innerHTML = 'Player ' + winningPlayer + ' won!'
}

function announceCat () {
  document.getElementById('announce').innerHTML = 'Cat game!  Try again!'
}

function toggleTable () {
  const lTable = document.getElementById('tictactoeBoard')
  lTable.style.display = (lTable.style.display === 'table') ? 'none' : 'table'
}

let tile

document.getElementById('one').addEventListener('click', function () {
  if (this.innerHTML === '' && gameOver === false) {
    console.log(gameOver)
    game[0] = currentPlayer; this.innerHTML = currentPlayer
    makeMove(game, tile, currentPlayer); console.log(game + currentPlayer)
  }
})
document.getElementById('two').addEventListener('click', function () {
  if (this.innerHTML === '' && gameOver === false) {
    game[1] = currentPlayer; this.innerHTML = currentPlayer
    makeMove(game, tile, currentPlayer); console.log(game + currentPlayer)
  }
})
document.getElementById('three').addEventListener('click', function () {
  if (this.innerHTML === '' && gameOver === false) {
    game[2] = currentPlayer; this.innerHTML = currentPlayer
    makeMove(game, tile, currentPlayer); console.log(game + currentPlayer)
  }
})
document.getElementById('four').addEventListener('click', function () {
  if (this.innerHTML === '' && gameOver === false) {
    game[3] = currentPlayer; this.innerHTML = currentPlayer
    makeMove(game, tile, currentPlayer); console.log(game + currentPlayer)
  }
})
document.getElementById('five').addEventListener('click', function () {
  if (this.innerHTML === '' && gameOver === false) {
    game[4] = currentPlayer; this.innerHTML = currentPlayer
    makeMove(game, tile, currentPlayer); console.log(game + currentPlayer)
  }
})
document.getElementById('six').addEventListener('click', function () {
  if (this.innerHTML === '' && gameOver === false) {
    game[5] = currentPlayer; this.innerHTML = currentPlayer
    makeMove(game, tile, currentPlayer); console.log(game + currentPlayer)
  }
})
document.getElementById('seven').addEventListener('click', function () {
  if (this.innerHTML === '' && gameOver === false) {
    game[6] = currentPlayer; this.innerHTML = currentPlayer
    makeMove(game, tile, currentPlayer); console.log(game + currentPlayer)
  }
})
document.getElementById('eight').addEventListener('click', function () {
  if (this.innerHTML === '' && gameOver === false) {
    game[7] = currentPlayer; this.innerHTML = currentPlayer
    makeMove(game, tile, currentPlayer); console.log(game + currentPlayer)
  }
})
document.getElementById('nine').addEventListener('click', function () {
  if (this.innerHTML === '' && gameOver === false) {
    game[8] = currentPlayer; this.innerHTML = currentPlayer
    makeMove(game, tile, currentPlayer); console.log(game + currentPlayer)
  }
})

const makeMove = function (array, tile, player) {
  if (currentPlayer === 'x') {
    array[tile] = currentPlayer
    currentPlayer = 'o'
  } else {
    array[tile] = currentPlayer
    currentPlayer = 'x'
  }
  winningCombo(game)
}

let winningPlayer
const winningCombo = function (array) {
  if ((game[0] === game[1]) && (game[1] === game[2]) && (game[2] !== '')) {
    winningPlayer = game[0]
    console.log('Player ' + winningPlayer + ' wins!')
    announceWinner(winningPlayer)
    gameOver = true
  } else if ((game[3] === game[4]) && (game[4] === game[5]) && (game[5] !== '')) {
    winningPlayer = game[3]
    console.log('Player ' + winningPlayer + ' wins!')
    announceWinner(winningPlayer)
    gameOver = true
  } else if ((game[6] === game[7]) && (game[7] === game[8]) && (game[8] !== '')) {
    winningPlayer = game[6]
    console.log('Player ' + winningPlayer + ' wins!')
    announceWinner(winningPlayer)
    gameOver = true
  } else if ((game[0] === game[3]) && (game[3] === game[6]) && (game[6] !== '')) {
    winningPlayer = game[0]
    console.log('Player ' + winningPlayer + ' wins!')
    announceWinner(winningPlayer)
    gameOver = true
  } else if ((game[1] === game[4]) && (game[4] === game[7]) && (game[7] !== '')) {
    winningPlayer = game[1]
    console.log('Player ' + winningPlayer + ' wins!')
    announceWinner(winningPlayer)
    gameOver = true
  } else if ((game[2] === game[5]) && (game[5] === game[8]) && (game[8] !== '')) {
    winningPlayer = game[2]
    console.log('Player ' + winningPlayer + ' wins!')
    announceWinner(winningPlayer)
    gameOver = true
  } else if ((game[0] === game[4]) && (game[4] === game[8]) && (game[8] !== '')) {
    winningPlayer = game[0]
    console.log('Player ' + winningPlayer + ' wins!')
    announceWinner(winningPlayer)
    gameOver = true
  } else if ((game[6] === game[4]) && (game[4] === game[2]) && (game[2] !== '')) {
    winningPlayer = game[6]
    console.log('Player ' + winningPlayer + ' wins!')
    announceWinner(winningPlayer)
    gameOver = true
  } else if ((game[0] !== '') && (game[1] !== '') && (game[2] !== '') && (game[3] !== '') && (game[4] !== '') && (game[5] !== '') && (game[6] !== '') && (game[7] !== '') && (game[8] !== '')) {
    winningPlayer = false
    console.log('Cat game - try again!')
    announceCat()
    gameOver = true
  }
}

// store.game = create.game
module.exports = {
  clearBoard,
  removeXO,
  toggleTable,
  startGame
}
