function toggle() {
    // const toggleButton = document.getElementsByClassName(`button`)[0]
    const toggleButton = document.querySelector(`#accordion .head .button`)
    const textToShow = document.getElementById(`extra`)
    const currentDisplay = textToShow.style.display

    if (currentDisplay === `block`) {
        textToShow.style.display = `none`
        toggleButton.textContent = `More`
    } else {
        textToShow.style.display = `block`
        toggleButton.textContent = `Less`
    }
}