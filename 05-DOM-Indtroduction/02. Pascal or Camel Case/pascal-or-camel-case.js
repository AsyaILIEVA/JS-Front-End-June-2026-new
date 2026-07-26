function solve() {
  const userInput = document.getElementById(`text`).value.toLowerCase().split(` `)
  const convention = document.getElementById(`naming-convention`).value 
  const resultElement = document.getElementById(`result`)

  const uppercaseWords = function (arr, index) {
    return arr.slice(index).map(word => word[0].toUpperCase() + word.slice(1)).join(``)    
  }

  switch (convention) {
    case `Camel Case`:
      resultElement.textContent = userInput[0] + uppercaseWords(userInput, 1)
      break;
    case `Pascal Case`:
      resultElement.textContent = uppercaseWords(userInput, 0)
      break;
    default:
      resultElement.textContent = `Error!`;
      
  }
}