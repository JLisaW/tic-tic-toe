'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const gamesApi = require('./api.js')
const gamesUi = require('./ui.js')

const api = require('./api')
const ui = require('./ui')

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
    gamesApi.show(game.id)
      .then(gamesUi.onSuccess)
      .catch(gamesUi.onError)
  } else {
    console.log('Please provide a book id!')
  }
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#index').on('submit', onIndex)
  $('#game-search').on('submit', onGetGame)
}

module.exports = {
  addHandlers
}
