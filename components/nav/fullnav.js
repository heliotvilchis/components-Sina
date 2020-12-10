function closeDrower() {
    document.getElementById("drawer").style.visibility = "hidden";
    document.getElementById("drawer-navigarion").style.visibility = "hidden";
    document.getElementById("drawer-backdrop").style.visibility = "hidden";
    document.getElementById("drawer-top-line").style.visibility = "hidden";
    document.getElementById("drawer-bottom-line").style.visibility = "hidden";
    $("#body").removeClass("disable-scrolling-menu");
}

function openDrower() {
    document.getElementById("drawer").style.visibility = "visible";
    document.getElementById("drawer-navigarion").style.visibility = "visible";
    document.getElementById("drawer-backdrop").style.visibility = "visible";
    document.getElementById("drawer-top-line").style.visibility = "visible";
    document.getElementById("drawer-bottom-line").style.visibility = "visible";
    $("#body").addClass("disable-scrolling-menu");
}