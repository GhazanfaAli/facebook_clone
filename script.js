document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var number = document.getElementById("number").value;
    var password = document.getElementById("password").value;
    if (number === "03211881365" && password === "pass123") {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "home.html";
    } else {
        alert("Invalid login credentials!");
    }
});

function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html";
}