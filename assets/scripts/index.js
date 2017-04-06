'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const game = require('./game')

$(() => {
  setAPIOrigin(location, config, game)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

const authEvents = require('./auth/events.js')

// On document ready
$(() => {
  authEvents.addHandlers()
})

// signin
$(() => {
  setAPIOrigin(location, config)
  $('form').on('submit', function (event) {
    event.preventDefault()
    const input = $('#emailInput').val()
    console.log(input)
    $('#signinModal').modal('hide')
  })
})

// signup
$(() => {
  setAPIOrigin(location, config)
  $('form').on('submit', function (event) {
    event.preventDefault()
    const input = $('#emailInput').val()
    console.log(input)
    $('#signupModal').modal('hide')
  })
})

// changepw
$(() => {
  setAPIOrigin(location, config)
  $('form').on('submit', function (event) {
    event.preventDefault()
    const input = $('#emailInput').val()
    console.log(input)
    $('#changepwModal').modal('hide')
  })
})
