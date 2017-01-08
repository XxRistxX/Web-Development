/**
 * Created by Christophe Bonin on 04/01/2017.
 */
$(document).ready(function(){
    $("#btndown").click(function(){
        $(".btnsocial").slideToggle(1000);
    });
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}

