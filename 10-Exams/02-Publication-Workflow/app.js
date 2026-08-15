window.addEventListener("load", solve);

function solve() {
    const titleInput = document.getElementById("title");
    const authorInput = document.getElementById("author");
    const summaryInput = document.getElementById("summary");
    const addBtn = document.getElementById("add-btn");

    const draftList = document.getElementById("draft-list");
    const publishedList = document.getElementById("published-list");

    addBtn.addEventListener("click", function (event) {
        event.preventDefault();

        const title = titleInput.value.trim();
        const author = authorInput.value.trim();
        const summary = summaryInput.value.trim();

        if (!title || !author || !summary) {
            return;
        }

        const li = document.createElement("li");

        const article = document.createElement("article");

        const titleElement = document.createElement("p");
        titleElement.textContent = title;

        const authorElement = document.createElement("p");
        authorElement.textContent = author;

        const summaryElement = document.createElement("p");
        summaryElement.textContent = summary;

        article.appendChild(titleElement);
        article.appendChild(authorElement);
        article.appendChild(summaryElement);

        const buttons = document.createElement("div");
        buttons.className = "buttons";

        const editBtn = document.createElement("button");
        editBtn.className = "edit-btn";
        editBtn.textContent = "Edit";

        const approveBtn = document.createElement("button");
        approveBtn.className = "approve-btn";
        approveBtn.textContent = "Approve";

        buttons.appendChild(editBtn);
        buttons.appendChild(approveBtn);

        li.appendChild(article);
        li.appendChild(buttons);

        draftList.appendChild(li);

        titleInput.value = "";
        authorInput.value = "";
        summaryInput.value = "";

        addBtn.disabled = true;

        editBtn.addEventListener("click", function () {
            titleInput.value = titleElement.textContent;
            authorInput.value = authorElement.textContent;
            summaryInput.value = summaryElement.textContent;

            li.remove();
            addBtn.disabled = false;
        });

        approveBtn.addEventListener("click", function () {
            li.remove();

            const publishedLi = document.createElement("li");

            const publishedArticle = document.createElement("article");

            const publishedTitle = document.createElement("p");
            publishedTitle.textContent = titleElement.textContent;

            const publishedAuthor = document.createElement("p");
            publishedAuthor.textContent = authorElement.textContent;

            const publishedSummary = document.createElement("p");
            publishedSummary.textContent = summaryElement.textContent;

            publishedArticle.appendChild(publishedTitle);
            publishedArticle.appendChild(publishedAuthor);
            publishedArticle.appendChild(publishedSummary);

            const publishBtn = document.createElement("button");
            publishBtn.className = "publish-btn";
            publishBtn.textContent = "Publish";

            publishedLi.appendChild(publishedArticle);
            publishedLi.appendChild(publishBtn);

            publishedList.appendChild(publishedLi);

            addBtn.disabled = false;

            publishBtn.addEventListener("click", function () {
                publishedLi.remove();
                addBtn.disabled = false;
            });
        });
    });
}
  