function lightTheme() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "white";
    document.getElementsByTagName("h3")[0].style.color = "black";
    document.getElementById("navBarTheme").className = "navbar navbar-expand-lg navbar-light bg-light";
    document.getElementById("darkThemeButton").className ="btn btn-secondary";
    document.getElementById("lightThemeButton").className ="btn btn-secondary";
    document.getElementById("themeLabel").innerHTML = "";
}

function darkTheme() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "black";
    document.getElementsByTagName("h3")[0].style.color = "white";
    document.getElementById("navBarTheme").className = "navbar navbar-expand-lg navbar-dark bg-dark";
    document.getElementById("darkThemeButton").className ="btn btn-warning";
    document.getElementById("lightThemeButton").className ="btn btn-warning";
    document.getElementById("themeLabel").innerHTML = "this dark theme with neon text";
}