const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const yourScore = document.querySelector('[data-your-score')
const computerScore = document.querySelector('[data-computer-score')


const SELECTIONS = [
    {
        name : 'rock',
        emoji: '✊',
        beats: 'scissors'
    },
    {
        name : 'paper',
        emoji : '✋',
        beats: 'rock'
    },
    {
        name : 'scissors',
        emoji : '✌️',
        beats : 'paper'
    }
]


selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionNameFromHTML = selectionButton.dataset.selection; //ngambil nama dari html
        const selectionFromListJS = SELECTIONS.find(selection =>  selection.name === selectionNameFromHTML) //ngambil nama / data dari list / dict diatas
        makeSelection(selectionFromListJS)
    })
})

function makeSelection(selection) {
    const computerSelection = randomSelection()
    const playerWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection, selection)
    
    addSelectionResult(computerSelection, computerWinner)
    addSelectionResult(selection, playerWinner)

    if(playerWinner) incrementScore(yourScore)
    if(computerWinner) incrementScore(computerScore)

}

function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
}

function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name
}

function addSelectionResult(selection, winner) {
    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('result-selection')
    if (winner) div.classList.add('winner')

    finalColumn.after(div)
}

function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}