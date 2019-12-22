const submit = document.getElementById("submit");
const burgerInput = document.getElementById("burgerInput");
const devour = document.querySelectorAll(".devour");


//Creates new http object
const http = new XMLHttpRequest();

//Function to send POST requests;

//Send request to create new burger record in DB.
submit.addEventListener("click", function (event) {
    let burger = burgerInput.value;
    console.log(burger);
    http.open("POST", '/api/newburger', true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.send(`burger=${burger}`);
    event.preventDefault();
    location.reload();
})

//Send request to change "devoured" status of a single burger
devour.forEach((button) => {
button.addEventListener("click", function(event) {
    let id = this.getAttribute("data-id");
    console.log(id);
    http.open("POST", `/api/devoured/${id}`, true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    event.preventDefault();
    http.send();
    location.reload();
});
})