function changeLanguage() {
    console.log("test");
    if(document.getElementById("language").innerHTML === "Español") {
        document.getElementById("language").innerHTML = "English";
    }
    else {
        document.getElementById("language").innerHTML = "Español";
    }
}