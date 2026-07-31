document.addEventListener('DOMContentLoaded', solve);

function solve() {
   const formElement = document.getElementById('task-input');
   const contentElement = document.getElementById('content');

   formElement.addEventListener('submit', (e) => {
      e.preventDefault();
      contentElement.innerHTML = '';

      const taskInput = document
         .querySelector('input[type="text"]')
         .value
         .split(', ');

      taskInput.forEach(element => {
         const divEl = document.createElement('div');
         const pEl = document.createElement('p');

         pEl.textContent = element;
         pEl.style.display = 'none';

         divEl.append(pEl);

         divEl.addEventListener('click', (e) => {
            e.target.querySelector(`p`).style.display = 'block';
         });

         contentElement.append(divEl);
      });
   });
}