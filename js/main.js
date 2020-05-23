//Show Navbar

$(document).ready(function(){
    $("#menu").click(function(){
        $("#navbar").fadeIn(500);
    })
});

//Close Navbar by clicking on both Button & Navbar Links

$(document).ready(function(){
    $(".nav-close, .nav-links").click(function(){
        $("#navbar").fadeOut(500);
    })
});