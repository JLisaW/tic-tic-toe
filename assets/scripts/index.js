'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
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

// array containing tiles objects
const tiles = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// const wins = [[1, 2, 3], [1, 4, 7], [1, 5, 9], [2, 4, 8], [3, 6, 9], [3, 5, 7], [4, 5, 6], [6, 7, 8], [7, 8, 9]];
// populate the array of tiles as they are selected
const tilesSelected = []
tilesSelected.sort()
const wins = [[1, 2, 3], [1, 4, 7], [1, 5, 9], [2, 4, 8], [3, 6, 9], [3, 5, 7], [4, 5, 6], [6, 7, 8], [7, 8, 9]]

// event handler determines tile # and pushes to the tilesSelected array
document.getElementById('one').addEventListener('click', function () { this.tiles = tiles[0]; console.log(this.tiles); tilesSelected.push(this.tiles) })
document.getElementById('two').addEventListener('click', function () { this.tiles = tiles[1]; console.log(this.tiles); tilesSelected.push(this.tiles) })
document.getElementById('three').addEventListener('click', function () { this.tiles = tiles[2]; console.log(this.tiles); tilesSelected.push(this.tiles) })
document.getElementById('four').addEventListener('click', function () { this.tiles = tiles[3]; console.log(this.tiles); tilesSelected.push(this.tiles) })
document.getElementById('five').addEventListener('click', function () { this.tiles = tiles[4]; console.log(this.tiles); tilesSelected.push(this.tiles) })
document.getElementById('six').addEventListener('click', function () { this.tiles = tiles[5]; console.log(this.tiles); tilesSelected.push(this.tiles) })
document.getElementById('seven').addEventListener('click', function () { this.tiles = tiles[6]; console.log(this.tiles); tilesSelected.push(this.tiles) })
document.getElementById('eight').addEventListener('click', function () { this.tiles = tiles[7]; console.log(this.tiles); tilesSelected.push(this.tiles) })
document.getElementById('nine').addEventListener('click', function () { this.tiles = tiles[8]; console.log(this.tiles); tilesSelected.push(this.tiles) })
