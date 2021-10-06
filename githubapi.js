function loadMyInfo() {
    fetch("https://api.github.com/users/mytja").then(response => response.json()).then(data => {
        document.getElementById("bio").innerHTML = data["bio"]
        document.getElementById("location").innerHTML = data["location"]
    })
}