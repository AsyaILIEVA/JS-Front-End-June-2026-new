document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const menu = document.getElementById(`menu`)

    document.querySelector(`form`).addEventListener(`submit`, (e) => {
        e.preventDefault()

        const newItemText = document.getElementById(`newItemText`).value 
        const newItemValue = document.getElementById(`newItemValue`).value 

        const areNotEmptyFields = newItemText !== `` && newItemValue !== ``

        if(areNotEmptyFields) {
            const newItem = document.createElement(`option`)
            newItem.textContent = newItemText
            newItem.setAttribute(`value`, newItemValue)

            menu.append(newItem)

            document.getElementById(`newItemText`).value = ``
            document.getElementById(`newItemValue`).value = ``
            document.getElementById(`newItemText`).focus()
        }
    })
}