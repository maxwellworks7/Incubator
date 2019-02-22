function changeNav(){
    if (document.getElementById("nav-bar").style.width === "225px")
        document.getElementById("nav-bar").style.width = "50px";
    else document.getElementById("nav-bar").style.width = "225px";

    if (document.getElementById("main").style.marginLeft === "225px")
        document.getElementById("main").style.marginLeft= "50px"
    else document.getElementById("main").style.marginLeft= "225px"
}