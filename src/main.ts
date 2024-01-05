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
const player1RevealChoice = document.querySelector('.player1 p i')
const player2RevealChoice = document.querySelector('.player2 p i')

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
  if (player1Choice != ' ') {
    if (player1RevealChoice) {
      player1RevealChoice.className = player1RevealChoice.className + ' ready'
    }
  }
  if (player2Choice != ' ') {
    if (player2RevealChoice) {
      player2RevealChoice.className = player2RevealChoice.className + ' ready'
    }
  }
  if (player1Choice != ' ' && player2Choice != ' ') {
    console.log('We are ready to play!')
    if (player1Choice === 'rock') {
      if (player1RevealChoice) {
        player1RevealChoice.className = 'fa-solid fa-hand-back-fist'
      }
    }
    if (player1Choice === 'paper') {
      if (player1RevealChoice) {
        player1RevealChoice.className = 'fa-solid fa-hand'
      }
    }
    if (player1Choice === 'scissors') {
      if (player1RevealChoice) {
        player1RevealChoice.className = 'fa-solid fa-hand-scissors'
      }
    }

    if (player2Choice === 'rock') {
      if (player2RevealChoice) {
        player2RevealChoice.className = 'fa-solid fa-hand-back-fist'
      }
    }
    if (player2Choice === 'paper') {
      if (player2RevealChoice) {
        player2RevealChoice.className = 'fa-solid fa-hand'
      }
    }
    if (player2Choice === 'scissors') {
      if (player2RevealChoice) {
        player2RevealChoice.className = 'fa-solid fa-hand-scissors'
      }
    }
    weHaveAWinner()
  } else {
    console.log('We are not ready')
  }
}
function weHaveAWinner() {
  if (
    (player1Choice === 'rock' && player2Choice === 'scissors') ||
    (player1Choice === 'scissors' && player2Choice === 'paper') ||
    (player1Choice === 'paper' && player2Choice === 'rock')
  ) {
    setTimeout(function () {
      window.alert('Player 1 wins!'), 100
    })
  } else if (player1Choice === player2Choice) {
    setTimeout(function () {
      window.alert('We have a tie!'), 100
    })
  } else {
    setTimeout(function () {
      window.alert('Player 2 wins!')
    }, 100)
  }
  console.log('Game over!')
  setTimeout(function () {
    player1Choice = ' '
    player2Choice = ' '
    if (player1RevealChoice) {
      player1RevealChoice.className = 'fa-solid fa-question'
    }
    if (player2RevealChoice) {
      player2RevealChoice.className = 'fa-solid fa-question'
    }
  }, 2000)
}
player1RockButton?.addEventListener('click', clickOnPlayer1RockButton)
player1PaperButton?.addEventListener('click', clickOnPlayer1PaperButton)
player1ScissorsButton?.addEventListener('click', clickOnPlayer1ScissorsButton)
player2RockButton?.addEventListener('click', clickOnPlayer2RockButton)
player2PaperButton?.addEventListener('click', clickOnPlayer2PaperButton)
player2ScissorsButton?.addEventListener('click', clickOnPlayer2ScissorsButton)
