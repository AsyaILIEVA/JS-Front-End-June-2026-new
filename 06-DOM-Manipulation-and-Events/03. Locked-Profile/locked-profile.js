document.addEventListener('DOMContentLoaded', solve);

function solve() {
    
    document.querySelector(`main`).addEventListener(`click`, e => {
        if (e.target.nodeName == `BUTTON`) {
            const profile = e.target.closest(`.profile`)
            const state = profile.querySelector(`input[name*="Locked"]:checked`).getAttribute(`id`).substr(5,20).toLowerCase

            if (state === `unlock`) {
                
                const hiddenFieldsEl = profile.querySelector(`.hidden-fields`)

                if (hiddenFieldsEl.classList.contains(`active`)) {
                    hiddenFieldsEl.classList.remove(`active`)
                    e.target.textContent = `Show less`                    
                } else {
                    hiddenFieldsEl.classList.add(`active`)
                    e.target.textContent = `Show more`
                }
            }            
        }
    })
}

// function lockedProfile() {
//     const buttons = document.querySelectorAll('.profile button');

//     buttons.forEach(button => {
//         button.addEventListener('click', showHide);
//     });

//     function showHide(e) {
//         const profile = e.target.parentElement;

//         const unlocked = profile.querySelector(
//             'input[value="unlock"]'
//         ).checked;

//         if (!unlocked) {
//             return;
//         }

//         const hiddenDiv = profile.querySelector('div');

//         if (e.target.textContent === 'Show more') {
//              hiddenDiv.style.display = 'block';
//              e.target.textContent = 'Hide it';
//         } else {
//              hiddenDiv.style.display = 'none';
//              e.target.textContent = 'Show more';
//         }
//     }
// }