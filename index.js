let maindiv = document.querySelector(".maindiv");

let quoteBox = document.createElement("div");
quoteBox.classList.add("quoteBox");

let quoteText = document.createElement("h2");
quoteText.classList.add("quoteText");
quoteText.textContent = "Loading quote...";

quoteBox.appendChild(quoteText);
maindiv.insertBefore(quoteBox, maindiv.firstChild);

function loadQuote() {
    fetch("https://dummyjson.com/quotes")
        .then(res => res.json())
        .then(data => {
            let randomIndex = Math.floor(Math.random() * data.quotes.length);
            let quote = data.quotes[randomIndex];
            quoteText.textContent = `"${quote.quote}" — ${quote.author}`;
        })
        .catch(() => {
            quoteText.textContent = "Stay positive. Work hard. Make it happen.";
        });
}

loadQuote();
setInterval(loadQuote, 10000);

let taskdiv = document.createElement("div");
taskdiv.classList.add("taskdiv");

let inputdiv = document.createElement("div");
inputdiv.classList.add("sidediv");

let inputbox = document.createElement("input");
inputbox.type = "text";
inputbox.id = "inputtag";

let submitbtn = document.createElement("button");
submitbtn.classList.add("submitbtn");
submitbtn.textContent = "Submit";

let tododiv = document.createElement("div");
tododiv.classList.add("tododiv");

let pendingdiv = document.createElement("div");
pendingdiv.classList.add("pendingdiv");

let completeddiv = document.createElement("div");
completeddiv.classList.add("completeddiv");

submitbtn.addEventListener("click", function () {
    let inputvalue = inputbox.value.trim();
    if (inputvalue === "") return;

    let taskdivtodo = document.createElement("div");
    taskdivtodo.classList.add("taskdivtodo");

    let task = document.createElement("h1");
    task.classList.add("taskh1");
    task.textContent = inputvalue;

    let deletebtnn = document.createElement("button");
    deletebtnn.innerHTML = "🗑";
    deletebtnn.classList.add("deletebtn", "iconbtn");

    let updatebtn = document.createElement("button");
    updatebtn.innerHTML = "✏️";
    updatebtn.classList.add("updatebtn", "iconbtn");

    taskdivtodo.appendChild(task);
    taskdivtodo.appendChild(deletebtnn);
    taskdivtodo.appendChild(updatebtn);
    tododiv.appendChild(taskdivtodo);

    deletebtnn.onclick = () => taskdivtodo.remove();

    updatebtn.onclick = () => {
        taskdivtodo.remove();

        let taskdivpending = document.createElement("div");
        taskdivpending.classList.add("taskdivpending");

        let task = document.createElement("h1");
        task.classList.add("taskh1");
        task.textContent = inputvalue;

        let deletebtnn = document.createElement("button");
        deletebtnn.innerHTML = "🗑";
        deletebtnn.classList.add("deletebtn", "iconbtn");

        let updatebtn = document.createElement("button");
        updatebtn.innerHTML = "✏️";
        updatebtn.classList.add("updatebtn", "iconbtn");

        taskdivpending.appendChild(task);
        taskdivpending.appendChild(deletebtnn);
        taskdivpending.appendChild(updatebtn);
        pendingdiv.appendChild(taskdivpending);

        deletebtnn.onclick = () => taskdivpending.remove();

        updatebtn.onclick = () => {
            taskdivpending.remove();

            let taskdivcomplete = document.createElement("div");
            taskdivcomplete.classList.add("taskdivcomplete");

            let task = document.createElement("h1");
            task.classList.add("taskh1");
            task.textContent = inputvalue;

            let deletebtnn = document.createElement("button");
            deletebtnn.innerHTML = "🗑";
            deletebtnn.classList.add("deletebtn", "iconbtn");

            taskdivcomplete.appendChild(task);
            taskdivcomplete.appendChild(deletebtnn);
            completeddiv.appendChild(taskdivcomplete);

            deletebtnn.onclick = () => taskdivcomplete.remove();
        };
    };

    inputbox.value = "";
});

inputdiv.appendChild(inputbox);
inputdiv.appendChild(submitbtn);

maindiv.appendChild(inputdiv);

taskdiv.appendChild(tododiv);
taskdiv.appendChild(pendingdiv);
taskdiv.appendChild(completeddiv);

maindiv.appendChild(taskdiv);
