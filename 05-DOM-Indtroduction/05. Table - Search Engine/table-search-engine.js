function solve() {
   const studentList = document.querySelectorAll(`.container tbody tr`)
   const searchTerm = document.getElementById(`searchField`).value.toLowerCase()

   if (!(searchTerm !== ``)) return false

   const students = Array.from(studentList).map(el => el.innerText)

   studentList.forEach(item => {
      item.classList.remove(`select`)
   })

   students.forEach((el, i) => {
      if (students[i].toLowerCase().indexOf(searchTerm) >= 0) {
         studentList[i].classList.add(`select`)
      }
   })   
}