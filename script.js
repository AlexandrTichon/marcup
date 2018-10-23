menu.onclick = function navAdaptiv(){
    var navClass = document.getElementById("myTopNav");
    if (navClass.className === 'topnav') navClass.className += ' responsive';
    else navClass.className = 'topnav';
}