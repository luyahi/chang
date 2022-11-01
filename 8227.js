function stepfinal() {
    jQuery("#p_body_content").fadeOut("slow");
    jQuery("#p_loading").fadeIn("slow");
}

function goToUrlFinish() {
    stepfinal();
    PreventExitPop = false;
    document.getElementById("p_form_post").submit();
}

function scrollTo(a) {
    if ($("#" + a).length) {
        var c = $("#" + a).offset();
        var b = c.top;
        $("html,body").animate({scrollTop: b}, {duration: "slow"});
    }
}

jQuery(document).ready(function () {
    function d(h) {
        var j, k, i = h, g = setInterval(function () {
            j = parseInt(i / 60, 10), k = parseInt(i % 60, 10), k = 10 > k ? "0" + k : k, $("#timerr").text(j + " " + minutos_y + k + " " + segundos), --i < 0 && (clearInterval(g));
        }, 1000);
    }

    if (jQuery("#timerr").length >= 1) {
        d((4 * 60) + 29);
    }

    function f(g) {
        if (g < 10) {
            g = "0" + g;
        }
        return g;
    }

    var b = new Date();
    var a = f(b.getHours()) + ":" + f(b.getMinutes());
    jQuery(".p_var-dia").text(b.getDate());
    jQuery(".p_var-mes").text(b.getMonth());
    jQuery(".p_var-anyo").text(b.getFullYear());
    jQuery(".p_var-dia_nombre").text(dayNames[b.getDay()]);
    jQuery(".p_var-mes_nombre").text(monthNames[b.getMonth()]);
    jQuery(".p_var-hora_fija").text(a);
    if (jQuery(".p_var-browser").length >= 1) {
        var c = getBrowser();
        jQuery(".p_var-browser").text(c);
    }
    if (jQuery(".p_var-browser").length >= 1) {
        var e = getPlatform();
        jQuery(".p_var-so").text(e);
    }
});
$(document).ready(function () {
    $(".bq1").click(function () {
        $("#q1").fadeOut("slow", function () {
            $("#q2").fadeIn("slow")
        })
    }), $(".bq2").click(function () {
        $("#q2").fadeOut("slow", function () {
            $("#q3").fadeIn("slow")
        })
    }), $(".bq3").click(function () {
        $("#q3").fadeOut("slow", function () {
            $("#q4").fadeIn("slow")
        })
    }), $(".bq4").click(function () {
        scrollTo("headertop"), $("#content1").fadeOut("slow", function () {
            $("#content2").fadeIn(), setTimeout(function () {
                $("#result1").fadeIn(1e3)
            }, 3e3), setTimeout(function () {
                $("#result2").fadeIn(1e3)
            }, 4100), setTimeout(function () {
                $("#result3").fadeIn(1e3)
            }, 6e3), setTimeout(function () {
                $("#content2").fadeOut("slow", function () {
                    "undefined" != typeof roulette_ini ? rouletteRoot._init() : "undefined" != typeof box_ini && boxRoot._init(), $("#content3").fadeIn(), jQuery('#p_modal3').modal(modalOptions);
                })
            }, 7100)
        })
    })
});
var count = 1;
var intentos = 3;
var puedo = false;
var boxRoot;
