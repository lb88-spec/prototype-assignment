const button = document.getElementById("btn");

button.addEventListener("click", function () {
    const message = document.getElementById("message");

    message.textContent = "Great job! You clicked the button.";

    document.body.style.backgroundColor = "#d7ffd9";
});
