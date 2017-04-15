const game = ['', '', '', '', '', '', '', '', '']
const player_x = 'x'
const player_o = 'o'
let gameOver = false
let currentPlayer = 'x'

// const game = cells

function clearBoard () {
  console.log('in the clearBoard function now')
  for (const i in game) {
    game[i] = ''
  }
}

function startGame () {
  gameOver = false
}

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
  // gameOver = true
  // winner(winningPlayer)
  // $('#myModal').modal('show');
}

function announceCat () {
  document.getElementById('announce').innerHTML = 'Cat game!  Try again!'
  // gameOver = true
  // $('#myModal').modal('show');
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

// const isGameOver = function() {
//   // turn the gameboard off
//   // display wins
// }
// enable / disable click events

// function turnoffclicks (e) {
//   if (e.target.className === 'panel') {
//     e.stopPropagation()
//     e.preventDefault()
//   }
// }
// // handler modified this way would disable clicks only on elements with class "class_name".
//
// function turnonclicks (e) {
//   if (e.target.className === 'panel') {
//     e.stopPropagation()
//   }
// }

// determine tile selected by document.getElementById
// pass that into the array at the appropriate position
// so like for a click on the first tile, send x or o to game[0]

// function cellClick(tile) {
//     if (cell.innerHTML === 'x' || cell.innerHTML === 'o') {
//         return;
//     }
//

// Remove the event handler from <div>

// To disable:

// To re-enable:
// function reenableClick () {
//   console.log('starting reenableClick')
//   // document.getElementById('one').style.pointerEvents = 'visible'
//   // document.getElementById('two').style.pointerEvents = 'visible'
//   // document.getElementById('three').style.pointerEvents = 'visible'
//   // document.getElementById('four').style.pointerEvents = 'visible'
//   // document.getElementById('five').style.pointerEvents = 'visible'
//   // document.getElementById('six').style.pointerEvents = 'visible'
//   // document.getElementById('seven').style.pointerEvents = 'visible'
//   // document.getElementById('eight').style.pointerEvents = 'visible'
//   // document.getElementById('nine').style.pointerEvents = 'visible'
//   console.log('end reenableClick')
// }
// Use '' if you want to allow CSS rules to set the value

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
    // $(this).unbind('click')
    // document.getElementById('one').style.pointerEvents = 'none'
  }
})
document.getElementById('two').addEventListener('click', function () {
  if (this.innerHTML === '' && gameOver === false) {
    game[1] = currentPlayer; this.innerHTML = currentPlayer
    makeMove(game, tile, currentPlayer); console.log(game + currentPlayer)
    // $(this).unbind('click')
    // document.getElementById('two').style.pointerEvents = 'none'
  }
})
document.getElementById('three').addEventListener('click', function () {
  if (this.innerHTML === '' && gameOver === false) {
    game[2] = currentPlayer; this.innerHTML = currentPlayer
    makeMove(game, tile, currentPlayer); console.log(game + currentPlayer)
    // $(this).unbind('click')
    // document.getElementById('three').style.pointerEvents = 'none'
  }
})
document.getElementById('four').addEventListener('click', function () {
  if (this.innerHTML === '' && gameOver === false) {
    game[3] = currentPlayer; this.innerHTML = currentPlayer
    makeMove(game, tile, currentPlayer); console.log(game + currentPlayer)
    // $(this).unbind('click')
    // document.getElementById('four').style.pointerEvents = 'none'
  }
})
document.getElementById('five').addEventListener('click', function () {
  if (this.innerHTML === '' && gameOver === false) {
    game[4] = currentPlayer; this.innerHTML = currentPlayer
    makeMove(game, tile, currentPlayer); console.log(game + currentPlayer)
    // $(this).unbind('click')
    // document.getElementById('five').style.pointerEvents = 'none'
  }
})
document.getElementById('six').addEventListener('click', function () {
  if (this.innerHTML === '' && gameOver === false) {
    game[5] = currentPlayer; this.innerHTML = currentPlayer
    makeMove(game, tile, currentPlayer); console.log(game + currentPlayer)
    // $(this).unbind('click')
    // document.getElementById('six').style.pointerEvents = 'none'
  }
})
document.getElementById('seven').addEventListener('click', function () {
  if (this.innerHTML === '' && gameOver === false) {
    game[6] = currentPlayer; this.innerHTML = currentPlayer
    makeMove(game, tile, currentPlayer); console.log(game + currentPlayer)
    // $(this).unbind('click')
    // document.getElementById('seven').style.pointerEvents = 'none'
  }
})
document.getElementById('eight').addEventListener('click', function () {
  if (this.innerHTML === '' && gameOver === false) {
    game[7] = currentPlayer; this.innerHTML = currentPlayer
    makeMove(game, tile, currentPlayer); console.log(game + currentPlayer)
    // $(this).unbind('click')
    // document.getElementById('eight').style.pointerEvents = 'none'
  }
})
document.getElementById('nine').addEventListener('click', function () {
  if (this.innerHTML === '' && gameOver === false) {
    game[8] = currentPlayer; this.innerHTML = currentPlayer
    makeMove(game, tile, currentPlayer); console.log(game + currentPlayer)
    // $(this).unbind('click')
    // document.getElementById('nine').style.pointerEvents = 'none'
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
  // $(this).unbind('click')
  winningCombo(game)
}

let winningPlayer
const winningCombo = function (array) {
// [[0 1 2],
  if ((game[0] === game[1]) && (game[1] === game[2]) && (game[2] !== '')) {
    // wait is this it?  I'm saying winning player is game 0.
    winningPlayer = game[0]
    console.log('Player ' + winningPlayer + ' wins!')
    announceWinner(winningPlayer)
    gameOver = true
    // trackWins(winningPlayer)
    // turnoffclicks()
    // could I pop up a modal here which would announce the winner and reset the game?
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
