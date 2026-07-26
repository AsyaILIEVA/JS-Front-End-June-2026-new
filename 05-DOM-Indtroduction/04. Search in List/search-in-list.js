function solve() {
   const listItems = document.querySelectorAll(`#towns li`)
   const searchInput = document.getElementById(`searchText`).value 
   const result = document.getElementById(`result`)

   let matches = 0

   listItems.forEach(li => {
      const listItemLoweredText = (li.textContent).toLowerCase()
      const searchLoweredText = searchInput.toLowerCase()

      if (listItemLoweredText.includes(searchLoweredText)) {
         li.style.fontWeight = `bold`
         li.style.textDecoration = `underline`
         matches++
      } else {
         li.style.fontWeight = ``
         li.style.textDecoration = ``
      }
   })

   result.textContent = `${matches} matches found`
}