const textElement = document.getElementById('text')
const optionButtons = document.getElementById('option-buttons')

let state = {}

function startGame() {
 state = {}
 showTextNode(1)
}

function showTextNode(textNodeIndex) {
 const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
 textElement.innerText = textNode.text
 while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
 }

 textNode.options.forEach(option => {
    if (showOption(option)) {
        const button = document.createElement('button')
        button.innterText = option.text
        button.classList.add('btn')
        button.addEventListener('click', () => selectOption(option))
        optionButtonsElement.appendChild(button)
    }
 }) 
}

function showOption(option) {
    return option.requiredState == null || option.required(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 1,
        text: "you wake up and fart",
        options: [
            {
                text: 'fart more',
                setState: { fart: true },
                nextText: 2
            },
            {
                text: 'go back to sleep',
                nextText: 2

            }
        ]
    },
    {
        id: 2,
        text: 'ok now I am thoroughly confused.' 
    }
]

startGame()