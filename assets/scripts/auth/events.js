'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')
const game = require('../game')

const onSignUp = function (event) {
  const data = getFormFields(this)
  // this points to event.target
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('signin ran')

  const data = getFormFields(this)
  api.signIn(data)
  .then(ui.signInSuccess)
  .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('signout ran')

  api.signOut()
  .then(ui.signOutSuccess)
  .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('change password ran!')

  const data = getFormFields(this)
  api.changePassword(data)
  .then(ui.changePasswordSuccess)
  .catch(ui.changePasswordFailure)
}

const onIndex = function (event) {
  event.preventDefault()
  api.index()
    .then(ui.onSuccess)
    .catch(ui.onError)
}

const onGetGame = function (event) {
  event.preventDefault()
  const game = getFormFields(event.target).game

  if (game.id.length !== 0) {
    api.show(game.id)
      .then(ui.onSuccess)
      .catch(ui.onError)
  } else {
    console.log('Please provide a book id!')
  }
}

// const onAddGame = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   const game = data.game
//   console.log("you're inside addbook function", event.target)
//   if (game.id.length !== 0) {
//     api.add(data)
//       .then(api.onSuccess)
//       .catch(api.onError)
//   } else {
//     console.log('give me data')
//   }
// }

const onUpdateGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const game = data.game

  if (game.id.length !== 0) {
    api.update(data)
    .then(api.onNoContentSuccess)
    .catch(api.onError)
  } else {
    console.log('Please provide a game id!')
  }
}

// const data = '{}'

// const createGame = function () {
//   api.createGame(data)
//   console.log('in the createGame function')
//   .then(api.createGameSuccess)
//   .catch(api.onError)
// }

const createGame = function (event) {
  game.startGame()
  event.preventDefault()
  game.clearBoard()
  game.removeXO()
  api.createGame()
  // game.reenableClick()
  .then(ui.createGameSuccess)
  .catch(ui.createGameFailure)
}

// const onAddGame = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   const game = data.game
//   console.log("you're inside onAddGame function", event.target)
//   if (game.id.length !== 0) {
//     gamesApi.add(data)
//       .then(gamesUi.onSuccess)
//       .catch(gamesUi.onError)
//   } else {
//     console.log('give me data')
//   }
// }

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#index').on('submit', onIndex)
  $('#game-search').on('submit', onGetGame)
  $('#game-update').on('submit', onUpdateGame)
  $('.create-game').on('click', createGame)
}

module.exports = {
  addHandlers
}

// 'use strict'
//
// const getFormFields = require(`../../../lib/get-form-fields`)
//
// const api = require('./api')
// const ui = require('./ui')
// const game = require('../game')
//
// const onSignUp = function (event) {
//   const data = getFormFields(this)
//   // this points to event.target
//   event.preventDefault()
//   api.signUp(data)
//     .then(game.signUpSuccess)
//     .catch(game.signUpFailure)
// }
//
// const onSignIn = function (event) {
//   event.preventDefault()
//   console.log('signin ran')
//
//   const data = getFormFields(this)
//   api.signIn(data)
//   .then(game.signInSuccess)
//   .catch(game.signInFailure)
// }
//
// const onSignOut = function (event) {
//   event.preventDefault()
//   console.log('signout ran')
//
//   api.signOut()
//   .then(game.signOutSuccess)
//   .catch(game.signOutFailure)
// }
//
// const onChangePassword = function (event) {
//   event.preventDefault()
//   console.log('change password ran!')
//
//   const data = getFormFields(this)
//   api.changePassword(data)
//   .then(game.changePasswordSuccess)
//   .catch(game.changePasswordFailure)
// }
//
// const onIndex = function (event) {
//   event.preventDefault()
//   api.index()
//     .then(ui.onSuccess)
//     .catch(ui.onError)
// }
//
// const onGetGame = function (event) {
//   event.preventDefault()
//   const game = getFormFields(event.target).game
//
//   if (game.id.length !== 0) {
//     api.show(game.id)
//       .then(ui.onSuccess)
//       .catch(ui.onError)
//   } else {
//     console.log('Please provide a book id!')
//   }
// }
//
// // const onAddGame = function (event) {
// //   event.preventDefault()
// //   const data = getFormFields(event.target)
// //   const game = data.game
// //   console.log("you're inside addbook function", event.target)
// //   if (game.id.length !== 0) {
// //     api.add(data)
// //       .then(api.onSuccess)
// //       .catch(api.onError)
// //   } else {
// //     console.log('give me data')
// //   }
// // }
//
// const onUpdateGame = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   const game = data.game
//
//   if (game.id.length !== 0) {
//     api.update(data)
//     .then(api.onNoContentSuccess)
//     .catch(api.onError)
//   } else {
//     console.log('Please provide a game id!')
//   }
// }
//
// // const data = '{}'
//
// // const createGame = function () {
// //   api.createGame(data)
// //   console.log('in the createGame function')
// //   .then(api.createGameSuccess)
// //   .catch(api.onError)
// // }
//
// const createGame = function (event) {
//   event.preventDefault()
//   game.clearBoard()
//   game.removeXO()
//   api.createGame()
//   game.toggleBoard()
//   // .then(ui.createGameSuccess)
//   // .catch(ui.createGameFailure)
// }
//
// // const onAddGame = function (event) {
// //   event.preventDefault()
// //   const data = getFormFields(event.target)
// //   const game = data.game
// //   console.log("you're inside onAddGame function", event.target)
// //   if (game.id.length !== 0) {
// //     gamesApi.add(data)
// //       .then(gamesUi.onSuccess)
// //       .catch(gamesUi.onError)
// //   } else {
// //     console.log('give me data')
// //   }
// // }
//
// const addHandlers = () => {
//   $('#sign-up').on('submit', onSignUp)
//   $('#sign-in').on('submit', onSignIn)
//   $('#sign-out').on('submit', onSignOut)
//   $('#change-password').on('submit', onChangePassword)
//   $('#index').on('submit', onIndex)
//   $('#game-search').on('submit', onGetGame)
//   $('#game-update').on('submit', onUpdateGame)
//   $('.create-game').on('click', createGame)
// }
//
// module.exports = {
//   addHandlers
// }
