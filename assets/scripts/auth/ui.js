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
  // now enable new game stuff
  $('#signoff').show()
  $('#signup').hide()
  $('#signin').hide()
  $('#chpw').show()
  $('#newgame').show()
  store.user = data.user
}

const signInFailure = (error) => {
  console.error('signin failure ran.  error is:', error)
}

const signOutSuccess = (data) => {
  $('#signin').show()
  $('#chpw').hide()
  $('#signoff').hide()
  $('#signup').show()
  $('#newgame').hide()
  $('.ticBoard').hide()
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
  console.log('create game success ran.  data is:', data)
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
// 'use strict'
//
// const store = require('../store')
// // const game = require('../game')
//
// // const pwchangesuccess = pwchangesuccess
// // const pwchangefail = pwchangefail
//
// // const signUpSuccess = (data) => {
// //   console.log(data)
// // }
// //
// // const signUpFailure = (error) => {
// //   console.error(error)
// // }
// //
// // const signInSuccess = (data) => {
// //   console.log('signin success ran.  data is:', data)
// //   store.user = data.user
// // }
// //
// // const signInFailure = (error) => {
// //   console.error('signin failure ran.  error is:', error)
// // }
// //
// // const signOutSuccess = (data) => {
// //   console.log('signout success and nothing was returned')
// //   store.user = null
// // }
//
// const signOutFailure = (error) => {
//   console.error(error)
// }
//
// // const changePasswordSuccess = (data) => {
// //   // document.getElementById(pwchok).style.display = 'block'
// //   console.log('password successfully changed UI')
// // }
//
// // const changePasswordFailure = (error) => {
// //   game.togglePwfail()
// //   // show alert from index.html that is hidden (yet to be written)
// //   // which will need to be hidden unles/untill it is needed
// //   console.error(error)
// // }
//
// const createGameSuccess = (data) => {
//   store.game = data.game
//   console.log(store.game)
// }
//
// const createGameFailure = (error) => {
//   return error
// }
//
// const updateGameSuccess = (data) => {
//   store.game = data.game
//   console.log('update game successful', data)
// }
//
// const updateGameFailure = (error) => {
//   return error
// }
//
// // function toggle (a) {
// //   if (document.getElementById(a).style.display === 'none') {
// //     document.getElementById(a).style.display = 'block'
// //   } else {
// //     document.getElementById(a).style.display = 'none'
// //   }
// // }
//
// module.exports = {
//   // signUpSuccess,
//   // signUpFailure,
//   // signInSuccess,
//   // signInFailure,
//   signOutFailure,
//   // signOutSuccess,
//   // changePasswordFailure,
//   // changePasswordSuccess,
//   createGameFailure,
//   createGameSuccess,
//   updateGameFailure,
//   updateGameSuccess
// }
