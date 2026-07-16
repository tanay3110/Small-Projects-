form = document.querySelector("#todo-form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
});

    let inp = document.querySelector('#todo-input');
    let btn = document.querySelector('#todo-form button');

    btn.addEventListener("click", add);

    function add() {
        let task = inp.value;
        if (task.trim() !== "") {
            let li = document.createElement("li");
            li.textContent = task;
            document.querySelector("#todo-list").appendChild(li);
            inp.value = "";
        }
    };
