//Loader

$(document).ready(function() {
    setTimeout(fade, 3000);
})

function fade() {
    $("#loader").fadeOut('slow');
}

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