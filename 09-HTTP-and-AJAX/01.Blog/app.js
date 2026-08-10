function attachEvents() {
    document.getElementById(`btnLoadPosts`).addEventListener(`click`, loadPosts);
    document.getElementById(`btnViewPost`).addEventListener(`click`, viewPost);
}
const mainURL = ` http://localhost:3030/jsonstore`
let post = []

async function loadPosts() {

    try {
        
        let response = await fetch(`${mainURL}/blog/posts`)

        if (response.status !== 200) {
            throw new Error()
        }

        let data = await response.json()

        document.getElementById(`posts`).innerHTML = ``

        Object.entries(data).forEach(([key, value]) => {
            let optionElement = document.createElement(`option`)
            optionElement.value = key 
            optionElement.textContent = value.title

            document.getElementById(`posts`).appendChild(optionElement)

            post.push({ title: value.title, body: value.body })
        })


    } catch (error) {
        console.error(error)
    }
    
}


async function viewPost() {
    
    try {
        const selectElement = document.getElementById(`posts`)

        let response = await fetch(`${mainURL}/blog/comments`)

        if (response.status !== 200) {
            throw new Error()
        }

        let data = await response.json()

        let comments = Object.values(data).filter(x => x.postId === selectElement.value)

        document.getElementById(`post-title`).textContent = selectElement.selectedOptions[0].textContent

        let po = post.filter(p => p.title === selectElement.selectedOptions[0].textContent)

        document.getElementById(`post-body`).textContent = po[0].body
        document.getElementById(`post-comments`).innerHTML = ``

        comments.forEach(comment => {
            let listItem = document.createElement(`li`)
            listItem.textContent = comment.text 
            document.getElementById(`post-comments`).appendChild(listItem)
        })

    } catch (error) {
        console.error(error)
    }
}

attachEvents();