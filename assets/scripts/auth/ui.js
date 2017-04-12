'use strict'

const store = require('../store')

const signUpSuccess = (data) => {
  console.log(data)
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
  console.log('signin success ran.  data is:', data)
  store.user = data.user
}

const signInFailure = (error) => {
  console.error('signin failure ran.  error is:', error)
}

const signOutSuccess = (data) => {
  console.log('signout success and nothing was returned')
  store.user = null
}

const signOutFailure = (error) => {
  console.error(error)
}

const changePasswordSuccess = (data) => {
  console.log('password successfully changed')
}

const changePasswordFailure = (error) => {
  console.error(error)
}

const createGameSuccess = (data) => {
  store.game = data.game
  console.log(store.game)
}

const createGameFailure = (error) => {
  return error
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutFailure,
  signOutSuccess,
  changePasswordFailure,
  changePasswordSuccess,
  createGameFailure,
  createGameSuccess
}
