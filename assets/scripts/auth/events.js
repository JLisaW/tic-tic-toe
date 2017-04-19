'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')
const game = require('../game.js')

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
  // console.log('signin ran')

  const data = getFormFields(this)
  api.signIn(data)
  .then(ui.signInSuccess)
  .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  // console.log('signout ran')

  api.signOut()
  .then(ui.signOutSuccess)
  .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  // console.log('change password ran!')
  // clear modal form here
  const data = getFormFields(this)
  api.changePassword(data)
  .then(ui.changePasswordSuccess)
  .catch(ui.changePasswordFailure)
}

const onIndex = function (event) {
  event.preventDefault()
  api.index()
    .then(ui.onIndexSuccess)
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
    // console.log('Please provide a game id!')
  }
}

// const onUpdateGame = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   const game = data.game
//   api.updateGame()

//   // if (game.id.length !== 0) {
//   //   api.update(data)
//   //   .then(api.onNoContentSuccess)
//   //   .catch(api.onError)
//   // } else {
//   //   console.log('Please provide a game id!')
//   // }
// }

// const data = '{}'

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

// function clearIdForm () {
//   document.getElementById('sign-upemail').reset()
// }

// function clearFormFields() {
//   $('#sign-up').val('')
//   $('#fieldIdTwo').val('')
// }

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#stats').on('click', onIndex)
  $('#game-search').on('submit', onGetGame)
  $('.create-game').on('click', createGame)
  $('#sign-up').trigger('reset')
  $('#signupModal').on('hidden.bs.modal', function () {
    $(this).find('form')[0].reset()
  })
  $('#changepwModal').on('hidden.bs.modal', function () {
    $(this).find('form')[0].reset()
  })
  $('#signinModal').on('hidden.bs.modal', function () {
    $(this).find('form')[0].reset()
  })
}

module.exports = {
  addHandlers
  // onIndex
}
