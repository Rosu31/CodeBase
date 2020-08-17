var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({
        loop: false
    })
    .add({
        targets: '.ml2 .letter',
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 70 * i
    }).add({
        targets: '.ml2',
        // opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });

$(".card-link").hover(
    function () {
        $(this).addClass("a_hover");
        $(this).find(".card-text").addClass("line-text_hover");
    },
    function () {
        $(this).removeClass("a_hover");
        $(this).find(".card-text").removeClass("line-text_hover");
    }
);

currentItem = $(".current-item");
if (currentItem[0]) {
    currentItem.css({
        "width": currentItem.width(),
        "left": currentItem.position().left
    });
}
$("#navigation li").hover(
    // ホバー時
    function () {
        // ホバーしているメニューの幅と左位置に変更
        $("#slide-line").css({
            "width": $(this).width(),
            "left": $(this).position().left
        });
    },
    // ホバーが外れたとき
    function () {
        // カレントメニューがある場合
        if (currentItem[0]) {
            // カレントメニューに下線を戻す
            $("#slide-line").css({
                "width": currentItem.width(),
                "left": currentItem.position().left
            });
        }
        // カレントメニューがない場合
        else {
            // 下線を消す
            $("#slide-line").width(0);
        }
    }
);