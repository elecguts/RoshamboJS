import './style.css'

let player1Choice = ' '
let player2Choice = ' '

const player1RockButton = document.querySelector('.player1 .fa-hand-back-fist')
const player1PaperButton = document.querySelector('.player1 .fa-hand')
const player1ScissorsButton = document.querySelector(
  '.player1 .fa-hand-scissors'
)
const player2RockButton = document.querySelector('.player2 .fa-hand-back-fist')
const player2PaperButton = document.querySelector('.player2 .fa-hand')
const player2ScissorsButton = document.querySelector(
  '.player2 .fa-hand-scissors'
)
console.log(player1RockButton)
console.log(player1PaperButton)
console.log(player1ScissorsButton)
console.log(player2RockButton)
console.log(player2PaperButton)
console.log(player2ScissorsButton)

function clickOnPlayer1RockButton() {
  player1Choice = 'rock'
  console.log(`Player one's choice is ${player1Choice}!`)
  readyToPlay()
}
function clickOnPlayer1PaperButton() {
  player1Choice = 'paper'
  console.log(`Player one's choice is ${player1Choice}!`)
  readyToPlay()
}
function clickOnPlayer1ScissorsButton() {
  player1Choice = 'scissors'
  console.log(`Player one's choice is ${player1Choice}!`)
  readyToPlay()
}
function clickOnPlayer2RockButton() {
  player2Choice = 'rock'
  console.log(`Player two's choice is ${player2Choice}!`)
  readyToPlay()
}
function clickOnPlayer2PaperButton() {
  player2Choice = 'paper'
  console.log(`Player two's choice is ${player2Choice}!`)
  readyToPlay()
}
function clickOnPlayer2ScissorsButton() {
  player2Choice = 'scissors'
  console.log(`Player two's choice is ${player2Choice}!`)
  readyToPlay()
}
function readyToPlay() {
  if (player1Choice != ' ' && player2Choice != ' ') {
    console.log('We are ready to play!')
    weHaveAWinner()
  } else {
    console.log('We are not ready')
  }
}
function weHaveAWinner() {
  console.log(player1Choice)
  console.log(player2Choice)
  console.log('We have a winner!')
}
player1RockButton?.addEventListener('click', clickOnPlayer1RockButton)
player1PaperButton?.addEventListener('click', clickOnPlayer1PaperButton)
player1ScissorsButton?.addEventListener('click', clickOnPlayer1ScissorsButton)
player2RockButton?.addEventListener('click', clickOnPlayer2RockButton)
player2PaperButton?.addEventListener('click', clickOnPlayer2PaperButton)
player2ScissorsButton?.addEventListener('click', clickOnPlayer2ScissorsButton)
