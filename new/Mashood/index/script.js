jQuery(document).ready(function() {
    var offset = 220;
    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.top').fadeIn(duration);
        } else {
            jQuery('.top').fadeOut(duration);
        }
    });
    jQuery('.top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({
            scrollTop: 0
        }, duration);
        return false;
    })
});

function sidebar() {
    $("nav").toggleClass("active");
}
$(".menu").on("click", sidebar);

document.onreadystatechange = function() {
    var state = document.readyState
    if (state == 'interactive') {
        document.getElementById('contents').style.visibility = "hidden";
    } else if (state == 'complete') {
        setTimeout(function() {
            document.getElementById('interactive');
            document.getElementById('load').style.visibility =
                "hidden";
            document.getElementById('contents').style.visibility =
                "visible";
        }, 1000);
    }
}
$('document').ready(function() {
  $('.bubble').click(function() {
    $('.bubble').fadeTo('slow', 0.5);
    $('h1').fadeTo('slow', 0.5);
  }); 
});