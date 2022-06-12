$(".faq").on("click", ".item", function () {
    $(this).toggleClass("active");
    $(this).children(".body-faq").slideToggle(200)
});

$(".wallet-methods").on("click", ".list-wallet>.item", function () {
    const type = $(this).attr("data-type");
    $(this).parent().parent().parent().parent().removeClass("active")
    if (type === "bn-data") {
        $(".instr.type-a.stage-b").addClass("active")
    } else if (type === "cb-data") {
        $(".instr.type-b.stage-b").addClass("active")
    } else if (type === "cr-data") {
        $(".instr.type-c.stage-c").addClass("active")
    } else if (type === "ot-data") {
        $(".instr.type-d.stage-c").addClass("active")
    }
});

$(".head-instr>h1>span").click(function () {
    const container = $(this).parent().parent().parent()
    const stage = $(this).parent().parent().children("p").children("span").text();
    if (stage === "2") {
        $(container).removeClass("active");
        $(".stage-a").addClass("active");
    } else {
        if ($(container).hasClass("type-a")) {
            $(container).removeClass("active");
            $(".type-a.stage-b").addClass("active");
        } else if ($(container).hasClass("type-b")) {
            $(container).removeClass("active");
            $(".type-b.stage-b").addClass("active");
        }
    }
});

$(".button-arrow-next").click(function () {
    const container = $(this).parent().parent().parent().parent()
    if ($(container).hasClass("type-a")) {
        $(container).removeClass("active");
        $(".type-a.stage-c").addClass("active");
    } else if ($(container).hasClass("type-b")) {
        $(container).removeClass("active");
        $(".type-b.stage-c").addClass("active");
    }
});

$(".send").on("input", function (e) {
    const val = parseFloat(e.target.value.replace(/,/g, "."));

    if (val < 9) {
        $(".bonus-data>p>span").text(0)
        $(".get").val(val * 2)
    } else if (val >= 50 && val <= 199) {
        $(".bonus-data>p>span").text(0)
        $(".get").val(val * (0 / 100) + val * 2)
    } else if (val >= 200 && val <= 499) {
        $(".bonus-data>p>span").text(10)
        $(".get").val(val * (10 / 100) + val * 2)
    } else if (val >= 500 && val <= 999) {
        $(".bonus-data>p>span").text(15)
        $(".get").val(val * (15 / 100) + val * 2)
    } else if (val >= 1000 && val <= 2999) {
        $(".bonus-data>p>span").text(20)
        $(".get").val(val * (20 / 100) + val * 2)
    } else if (val >= 3000 && val <= 4999) {
        $(".bonus-data>p>span").text(30)
        $(".get").val(val * (30 / 100) + val * 2)
    } else if (val >= 5000 && val <= 9999) {
        $(".bonus-data>p>span").text(40)
        $(".get").val(val * (40 / 100) + val * 2)
    } else if (val >= 10000) {
        $(".bonus-data>p>span").text(50)
        $(".get").val(val * (50 / 100) + val * 2)
    } else {
        $(".bonus-data>p>span").text(0)
    }
})

$(".fast-count").on("click", ".item", function () {
    const val = parseFloat($(this).children("p").children("span").text().replace(/,/g, "."));
    if (val <= 75) {
        $(".send").val(val);
        $(".get").val((val * (0 / 100) + val * 2).toFixed(5))
        $(".bonus-data>p>span").text(0)
   } else if (val <= 250) {
        $(".send").val(val);
        $(".get").val((val * (10 / 100) + val * 2).toFixed(5))
        $(".bonus-data>p>span").text(10)
    } else if (val <= 700) {
        $(".send").val(val);
        $(".get").val((val * (15 / 100) + val * 2).toFixed(5))
        $(".bonus-data>p>span").text(15)
    } else if (val <= 1) {
        $(".send").val(val);
        $(".get").val((val * (40 / 100) + val * 2).toFixed(5))
        $(".bonus-data>p>span").text(40)
    }
});

function CopyToClipboard(id) {
    var r = document.createRange();
    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
}

const hidealert = () => {
    $(".adress-copy").fadeOut();
};

$(".copy-adress").click(function () {
    $(".adress-copy").fadeIn();
    setTimeout(hidealert, 2000);
});