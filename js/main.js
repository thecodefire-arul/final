//Show Navbar

$(document).ready(function(){
    $("#menu").click(function(){
        $("#navbar").fadeIn(200);
    })
});

//Close Navbar by clicking on both Button & Navbar Links

$(document).ready(function(){
    $("#close-nav, #navbar ul li").click(function(){
        $("#navbar").fadeOut(200);
    })
});