function attachEvents() {
    document.getElementById(`submit`).addEventListener(`click`, addComment)
    document.getElementById(`refresh`).addEventListener(`click`, displayAllComments)

}

const URL = `http://localhost:3030/jsonstore/messenger`

async function addComment() {

    const authorName = document.querySelector(`[name = "author"]`)
    const msgText = document.querySelector(`[name = "content]`)

    if (!(authorName.value) || !(msgText.value)) {
        return
    }

    fetch(URL, {
        method: `POST`,
        headers: {
    "Content-type": "application/json"
        },
        body: JSON.stringify({
            author: authorName.value.trim(),
            content: msgText.value.trim(),
        })
    }).then(res => {
        return res.json()
    }).catch(err => {
        alert(err)
    })
    
    authorName.value = ``
    msgText.value = ``
}

function displayAllComments() {
    
    //Send a request → get the response → convert it to JSON → use the data → handle errors:
    
    fetch(URL) //fetch() sends an HTTP request to the URL.
    //fetch() returns a Promise.
    //You don't get the actual data immediately because the browser needs to wait for the server to respond.
    
    .then(res => {
        return res.json()
    })
    //Once the server responds, .then() runs.
    //The res is the response object.
    //When I get the response, convert it to JSON and pass(return) that JSON to the next step.

    .then(attachComments)
    //.then(comments => {
    //attachComments(comments);
    //})
    //This function probably takes the comments and displays them on the page.
    
    .catch(e => alert(e))

}

function attachComments(data) {
    const textArea = document.getElementById(`messages`)
    const allComments = []

    Object.values(data).forEach(c => allComments.push(`${c.author}: ${c.content}`))

    textArea.value = allComments.join(`\n`)
}

attachEvents();