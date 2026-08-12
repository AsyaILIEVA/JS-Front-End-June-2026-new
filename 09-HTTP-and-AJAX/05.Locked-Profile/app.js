// function lockedProfile() {
//     const main = document.getElementById('main');

//     fetch('http://localhost:3030/jsonstore/advanced/profiles')
//         .then(response => response.json())
//         .then(data => {
//             Object.values(data).forEach((user, index) => {

//                 const profile = document.createElement('div');
//                 profile.classList.add('profile');

//                 profile.innerHTML = `
//                     <img src="./iconProfile2.png" class="userIcon" />

//                     <label>Lock</label>
//                     <input type="radio" name="user${index + 1}Locked" value="lock" checked>

//                     <label>Unlock</label>
//                     <input type="radio" name="user${index + 1}Locked" value="unlock">

//                     <br>
//                     <hr>

//                     <label>Username</label>
//                     <input type="text"
//                            name="user${index + 1}Username"
//                            value="${user.username}"
//                            disabled
//                            readonly />

//                     <div class="user${index + 1}Username">
//                         <hr>

//                         <label>Email:</label>
//                         <input type="email"
//                                name="user${index + 1}Email"
//                                value="${user.email}"
//                                disabled
//                                readonly />

//                         <label>Age:</label>
//                         <input type="number"
//                                name="user${index + 1}Age"
//                                value="${user.age}"
//                                disabled
//                                readonly />
//                     </div>

//                     <button>Show more</button>
//                 `;

//                 main.appendChild(profile);

//                 const lock = profile.querySelector(
//                     `input[name="user${index + 1}Locked"][value="lock"]`
//                 );

//                 const unlock = profile.querySelector(
//                     `input[name="user${index + 1}Locked"][value="unlock"]`
//                 );

//                 const hiddenInfo = profile.querySelector(
//                     `.user${index + 1}Username`
//                 );

//                 const button = profile.querySelector('button');

//                 // Hide email and age initially
//                 hiddenInfo.style.display = 'none';

//                 button.addEventListener('click', () => {
//                     // Locked -> do nothing
//                     if (lock.checked) {
//                         return;
//                     }

//                     // Unlocked -> toggle information
//                     if (button.textContent === 'Show more') {
//                         hiddenInfo.style.display = 'block';
//                         button.textContent = 'Hide it';
//                     } else {
//                         hiddenInfo.style.display = 'none';
//                         button.textContent = 'Show more';
//                     }
//                 });
//             });
//         });
// }

async function lockedProfile() {
    const API_URL = 'http://localhost:3030/jsonstore/advanced/profiles';

    const profile = document.querySelector('.profile');
    const main = document.querySelector('#main');

    const loadDataFromApi = async () => {
        const response = await fetch(API_URL);
        const data = await response.json();

        return data;
    };

    const btnShowMoreFunctionality = (event) => {
        const button = event.currentTarget;
        const currentProfile = button.parentElement;

        const lock = currentProfile.querySelector('input[value="lock"]');
        const unlock = currentProfile.querySelector('input[value="unlock"]');

        const hideData = currentProfile.querySelector('.user1Username');

        // If the profile is locked, do nothing
        if (lock.checked) {
            return;
        }

        // Profile is unlocked
        if (unlock.checked) {
            if (button.textContent === 'Show more') {
                hideData.style.display = 'block';
                button.textContent = 'Hide it';
            } else {
                hideData.style.display = 'none';
                button.textContent = 'Show more';
            }
        }
    };

    const createHtmlElement = (data) => {
        const profileCopy = profile.cloneNode(true);

        const [username, email, age] =
            Array.from(profileCopy.querySelectorAll('input')).slice(2);

        const hideData =
            profileCopy.querySelector('.user1Username');

        const btnShowMore =
            profileCopy.querySelector('button');

        // Add the functionality to the button
        btnShowMore.addEventListener(
            'click',
            btnShowMoreFunctionality
        );

        // Fill in the user data
        username.value = data.username;
        email.value = data.email;
        age.value = data.age;

        // Hide email and age initially
        hideData.style.display = 'none';

        return profileCopy;
    };

    const loadDataToHTML = async (data) => {
        main.innerHTML = '';

        for (const key in data) {
            main.appendChild(createHtmlElement(data[key]));
        }
    };

    const data = await loadDataFromApi();

    await loadDataToHTML(data);
}