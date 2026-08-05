window.addEventListener("load", solve);

function solve(){
    function solve() {
    const eventInput = document.getElementById("event");
    const noteInput = document.getElementById("note");
    const dateInput = document.getElementById("date");

    const saveBtn = document.getElementById("save");
    const deleteBtn = document.querySelector(".delete");

    const upcomingList = document.getElementById("upcoming-list");
    const eventsList = document.getElementById("events-list");

    saveBtn.addEventListener("click", saveEvent);
    deleteBtn.addEventListener("click", deleteEvents);

    function saveEvent() {
        const event = eventInput.value.trim();
        const note = noteInput.value.trim();
        const date = dateInput.value.trim();

        if (!event || !note || !date) {
            return;
        }

        const li = document.createElement("li");
        li.className = "event-item";

        const container = document.createElement("div");
        container.className = "event-container";

        const article = document.createElement("article");

        const pName = document.createElement("p");
        pName.textContent = `Name: ${event}`;

        const pNote = document.createElement("p");
        pNote.textContent = `Note: ${note}`;

        const pDate = document.createElement("p");
        pDate.textContent = `Date: ${date}`;

        article.appendChild(pName);
        article.appendChild(pNote);
        article.appendChild(pDate);

        const buttons = document.createElement("div");
        buttons.className = "buttons";

        const editBtn = document.createElement("button");
        editBtn.className = "btn edit";
        editBtn.textContent = "Edit";

        const doneBtn = document.createElement("button");
        doneBtn.className = "btn done";
        doneBtn.textContent = "Done";

        buttons.appendChild(editBtn);
        buttons.appendChild(doneBtn);

        container.appendChild(article);
        container.appendChild(buttons);

        li.appendChild(container);
        upcomingList.appendChild(li);

        eventInput.value = "";
        noteInput.value = "";
        dateInput.value = "";

        editBtn.addEventListener("click", function () {
            eventInput.value = event;
            noteInput.value = note;
            dateInput.value = date;

            li.remove();
        });

        doneBtn.addEventListener("click", function () {
            container.removeChild(buttons);

            upcomingList.removeChild(li);

            li.innerHTML = "";
            li.appendChild(article);

            eventsList.appendChild(li);
        });
    }

    function deleteEvents() {
        eventsList.innerHTML = "";
    }
}

window.addEventListener("load", solve);
}

