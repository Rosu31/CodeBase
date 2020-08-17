$(".nav-item").mouseover(function () {
    $("slide-line").animate({
        "width": $(this).width(),
        "left": $(this).position().left
    }, "fast");
});