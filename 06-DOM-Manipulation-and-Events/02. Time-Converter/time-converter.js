document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const inputDays = document.getElementById(`days-input`)
    const inputHours = document.getElementById(`hours-input`)
    const inputMins = document.getElementById(`minutes-input`)
    const inputSecs = document.getElementById(`seconds-input`)

    const values = { days: 86400, hours: 3600, minutes: 60, seconds: 1 }

    Array.from(document.querySelectorAll(`form`)).forEach(form => {
        form.addEventListener(`submit`, handleSubmitForm)
    })

    function updateValues(secondsAmount) {
        inputDays.value = Number(secondsAmount / values.days).toFixed(2)
        inputHours.value = Number(secondsAmount / values.hours).toFixed(2)
        inputMins.value = Number(secondsAmount / values.minutes).toFixed(2)
        inputSecs.value = Number(secondsAmount / values.seconds).toFixed(2)
    }   

    function handleSubmitForm(e) {
        e.preventDefault()

        const currentInputEl = e.target.querySelector(`input[type="number"]`)
        const currentValue = Number(currentInputEl.value)

        if (currentValue < 1) {
            return
        }

        let multyplier = values[currentInputEl.getAttribute(`id`).split(`-input`)[0]]

        multyplier = multyplier ? multyplier : 1

        updateValues(currentValue * multyplier)
    }

}