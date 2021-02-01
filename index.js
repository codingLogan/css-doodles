const CARD_DATA = [
    {name: 'Bulbasaur'},
    {name: 'Ivysaur'},
    {name: 'Venusaur'},
    {name: 'Charmander'},
    {name: 'Charmeleon'},
    {name: 'Charizard'},
]

const container = document.querySelector('.checkbox-container')
const progress = document.querySelector('.progress')

function updateProgress() {
    const checkboxes = document.querySelectorAll("input[type='checkbox']").length
    const checked = document.querySelectorAll("input[type='checkbox']:checked").length
    const percent = Math.floor((checked / checkboxes) * 80)
    console.log(checkboxes, checked, percent)
    progress.style.width = `${percent}vw`
}

function createCheckbox(name) {
    const div = document.createElement('div')
    div.classList.add('card-checkbox')

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.value = name
    checkbox.id = name
    checkbox.addEventListener('click', updateProgress)
    
    div.appendChild(checkbox)
    
    const label = document.createElement('label')
    label.setAttribute('for', name)
    label.innerText = name

    div.appendChild(label)
    container.appendChild(div)
}

function createCheckboxes() {
    console.log("loading boxoes")
    CARD_DATA.forEach(card => {
        createCheckbox(card.name)
    })
}

createCheckboxes()