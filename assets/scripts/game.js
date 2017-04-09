const game = ['', '', '', '', '', '', '', '', '']
let currentPlayer = 'x'

const playGame = function () {
  //user authenticates
  //user selectsw new game
  //player x goes first and selects empty tile
}

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

// $('#myModal').modal({ show: false})

function announceWinner () {
  document.getElementById('announce').innerHTML = 'Player ' + winningPlayer + ' won!'
  // $('#myModal').modal('show');
}

function announceCat () {
  document.getElementById('announce').innerHTML = 'Cat game!  Try again!'
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

const isGameOver = function() {
  // turn the gameboard off
  // display wins
}
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
let tile
document.getElementById('one').addEventListener('click', function () {
  game[0] = currentPlayer; this.innerHTML = currentPlayer;
  makeMove(game, tile, currentPlayer); console.log(game + currentPlayer);
  $(this).unbind('click')
})
document.getElementById('two').addEventListener('click', function () {
  game[1] = currentPlayer; this.innerHTML = currentPlayer;
  makeMove(game, tile, currentPlayer); console.log(game + currentPlayer);
})
document.getElementById('three').addEventListener('click', function () {
  game[2] = currentPlayer; this.innerHTML = currentPlayer;
  makeMove(game, tile, currentPlayer); console.log(game + currentPlayer);
})
document.getElementById('four').addEventListener('click', function () {
  game[3] = currentPlayer; this.innerHTML = currentPlayer;
  makeMove(game, tile, currentPlayer); console.log(game + currentPlayer);
})
document.getElementById('five').addEventListener('click', function () {
  game[4] = currentPlayer; this.innerHTML = currentPlayer;
  makeMove(game, tile, currentPlayer); console.log(game + currentPlayer);
})
document.getElementById('six').addEventListener('click', function () {
  game[5] = currentPlayer; this.innerHTML = currentPlayer;
  makeMove(game, tile, currentPlayer); console.log(game + currentPlayer);
})
document.getElementById('seven').addEventListener('click', function () {
  game[6] = currentPlayer; this.innerHTML = currentPlayer;
  makeMove(game, tile, currentPlayer); console.log(game + currentPlayer);
})
document.getElementById('eight').addEventListener('click', function () {
  game[7] = currentPlayer; this.innerHTML = currentPlayer;
  makeMove(game, tile, currentPlayer); console.log(game + currentPlayer);
})
document.getElementById('nine').addEventListener('click', function () {
  game[8] = currentPlayer; this.innerHTML = currentPlayer;
  makeMove(game, tile, currentPlayer); console.log(game + currentPlayer);
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
    // wait is this it?  I'm saying winning player is game 0.
    winningPlayer = game[0]
    console.log('Player ' + winningPlayer + ' wins!')
    announceWinner(winningPlayer)

    // trackWins(winningPlayer)
    // turnoffclicks()
    //could I pop up a modal here which would announce the winner and reset the game?

  }
  // [345
  else if ((game[3] === game[4]) && (game[4] === game[5]) && (game[5] !== ''))
  {
    winningPlayer = game[3]
    console.log('Player ' + winningPlayer + ' wins!')
    announceWinner(winningPlayer)
    // trackWins(winningPlayer)

  }
  // 678,
  else if ((game[6] === game[7]) && (game[7] === game[8]) && (game[8] !== ''))
  {
    winningPlayer = game[6]
    console.log('Player ' + winningPlayer + ' wins!')
    announceWinner(winningPlayer)
    // trackWins(winningPlayer)

  }
  // 036
  else if ((game[0] === game[3]) && (game[3] === game[6]) && (game[6] !== ''))
  {
    winningPlayer = game[0]
    console.log('Player ' + winningPlayer + ' wins!')
    announceWinner(winningPlayer)
    // trackWins(winningPlayer)

  }
  // [147
  else if ((game[1] === game[4]) && (game[4] === game[7]) && (game[7] !== ''))
  {
    winningPlayer = game[1]
    console.log('Player ' + winningPlayer + ' wins!')
    announceWinner(winningPlayer)
    // trackWins(winningPlayer)

  }
  // [258
  else if ((game[2] === game[5]) && (game[5] === game[8]) && (game[8] !== ''))
  {
    winningPlayer = game[2]
    console.log('Player ' + winningPlayer + ' wins!')
    announceWinner(winningPlayer)
    // trackWins(winningPlayer)

  }
  // [048
  else if ((game[0] === game[4]) && (game[4] === game[8]) && (game[8] !== ''))
  {
    winningPlayer = game[0]
    console.log('Player ' + winningPlayer + ' wins!')
    announceWinner(winningPlayer)
    // trackWins(winningPlayer)

  }

  else if ((game[6] === game[4]) && (game[4] === game[2]) && (game[2] !== ''))
  {
    winningPlayer = game[6]
    console.log('Player ' + winningPlayer + ' wins!')
    announceWinner(winningPlayer)
    // trackWins(winningPlayer)
  }

  else if ((game[0] !== '') && (game[1] !== '') && (game[2] !== '') && (game[3] !== '') && (game[4] !== '') && (game[5] !== '') && (game[6] !== '') && (game[7] !== '') && (game[8] !== '')) {
    winningPlayer = false
    console.log('Cat game - try again!')
    announceCat()
  }
}

// store.game = create.game
