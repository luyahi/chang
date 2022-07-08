function getHostName(url) {
    var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
        return match[2];
    } else {
        return null;
    }
}

function getDomain(url) {
    var hostName = getHostName(url);
    var domain = hostName;

    if (hostName != null) {
        var parts = hostName.split('.').reverse();


        if (parts != null && parts.length > 1) {
            domain = parts[1] + '.' + parts[0];

            if (hostName.toLowerCase().indexOf('.co.uk') != -1 && parts.length > 2) {
                domain = parts[2] + '.' + domain;
            }
        }
    }

    return domain;
}

var cookiedomain = getDomain(window.location.href);
var browser = {
    versions: function () {
        var u = navigator.userAgent, app = navigator.appVersion;
        return {         //移动终端浏览器版本信息
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
            iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
        };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
}
if (!browser.versions.mobile) {
    location.href = "https://google.com";
}

function get_Cookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function move() {
    v = value;
    document.querySelector('.progress').style.display = "block";
    //v == '0' ? ob = 30 : v == '1' ? ob = 20 : v == '2' ? ob = 20 : v == '3' ? ob = 40 : v == '4' ? ob = 60 : v == '5' ? ob = 60 : v == '6' ? ob = 80 : v == '7' ? ob = 100 : v == '8' ? ob = 80 : v == '9' ? ob = 90 : v == '10' ? ob = 100 : v == '11' ? ob = 98 : v == '12' ? ob = 100 : void (0);
    v == '0' ? ob = 30 : v == '1' ? ob = 10 : v == '2' ? ob = 20 : v == '3' ? ob = 30 : v == '4' ? ob = 40 : v == '5' ? ob = 50 : v == '6' ? ob = 60 : v == '7' ? ob = 70 : v == '8' ? ob = 80 : v == '9' ? ob = 90 : v == '10' ? ob = 100 : v == '11' ? ob = 98 : v == '12' ? ob = 100 : void (0);
    //v == '0' ? ob = 0 : v == '1' ? ob = 30 : v == '2' ? ob = 30 : v == '3' ? ob = 50 : v == '4' ? ob = 50 : v == '5' ? ob = 60 : v == '6' ? ob = 70 : v == '7' ? ob = 80 : v == '8' ? ob = 85 : v == '9' ? ob = 90 : v == '10' ? ob = 95 : v == '11' ? ob = 98 : v == '12' ? ob = 100 : void (0);
    //v == '0' ? ob = 30 : v == '1' ? ob = 20 : v == '2' ? ob = 40 : v == '3' ? ob = 60 : v == '4' ? ob = 80 : v == '5' ? ob = 100 : v == '6' ? ob = 70 : v == '7' ? ob = 80 : v == '8' ? ob = 85 : v == '9' ? ob = 90 : v == '10' ? ob = 96 : v == '11' ? ob = 98 : v == '12' ? ob = 100 : void (0);
    document.querySelector('.progress-bar').style['width'] = ob + "%";
    document.querySelector('.progress-bar').textContent = ob + "%";
}

function set_Cookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;domain=" + cookiedomain;

}

var share_number = get_Cookie('prog') == '' ? 0 : parseInt(get_Cookie('prog'))
if (share_number > g_share_step) {

    location.href = url
}

if (share_number > 0) {
    showShare()
    move()
}

type_op = get_Cookie('type_op') == '' ? 1 : parseInt(get_Cookie('type_op'));
if (type_op === 2) {
    showShare()
}

function selline() {
    output = "line";
    g_share_type = 2;
    set_Cookie('sht', '2')

}

function selwhatsapp() {
    g_share_type = 1;
    output = "whatsapp";
    set_Cookie('sht', '1')
}

function selviber() {
    g_share_type = 3;
    output = "viber";
    set_Cookie('sht', '3')
}

function seltelegram() {
    g_share_type = 4;
    output = "telegram";
    set_Cookie('sht', '4')
}

function showShare() {
    set_Cookie('type_op', 2)
    jQuery('#p_modal3').modal('hide');
    $('.share_page').show();
    $('#content4').show();
    $('#content3').hide();
    $('#content1').hide();
    var g_share_cookie = get_Cookie('sht') == '' ? 0 : parseInt(get_Cookie('sht'));
    if (g_share_cookie === 2) {
        g_share_type = 2;
    } else if (g_share_cookie === 3) {
        g_share_type = 3;
    } else if (g_share_cookie === 4) {
        g_share_type = 4;
    } else {
        g_share_type = 1;
    }
    var str = document.getElementById("rules").innerHTML;
    var str2 = document.getElementById("shbtn").innerHTML;
    if (g_share_type === 2) {
        var shn = document.getElementsByClassName('survey_button bq4')[3].innerHTML
        var res1 = str.replace("WHATSAPP", shn);
        var res2 = res1.replace("WhatsApp", shn);
        var res3 = str2.replace("WhatsApp", shn);
        document.getElementById("rules").innerHTML = res2;
        document.getElementById("shbtn").innerHTML = res3;
    } else if (g_share_type === 3) {
        var shn = document.getElementsByClassName('survey_button bq4')[1].innerHTML
        var res1 = str.replace("WHATSAPP", shn);
        var res2 = res1.replace("WhatsApp", shn);
        var res3 = str2.replace("WhatsApp", shn);
        document.getElementById("rules").innerHTML = res2;
        document.getElementById("shbtn").innerHTML = res3;
    } else if (g_share_type === 4) {
        var shn = document.getElementsByClassName('survey_button bq4')[2].innerHTML
        var res1 = str.replace("WHATSAPP", shn);
        var res2 = res1.replace("WhatsApp", shn);
        var res3 = str2.replace("WhatsApp", shn);
        document.getElementById("rules").innerHTML = res2;
        document.getElementById("shbtn").innerHTML = res3;
    } else {
    }
    get_Cookie('prog') == '' ? value = 0 : value = parseInt(get_Cookie('prog'))

}


function continueBtn() {
    var share_num = get_Cookie('prog') == '' ? 0 : parseInt(get_Cookie('prog'))
    if (share_num < g_share_step) {
        alert(alertmsg2)
    } else {
        location.href = url
    }
}

function shareOkBtn() {
    location.href = url
}

function shareBtn() {
    grab();
    var share_num = get_Cookie('prog') == '' ? 0 : parseInt(get_Cookie('prog'))
    share_num++
    if (share_num > g_share_step) {
        share_num = g_share_step
    }


    if (g_share_type === 2) {
        window.location.href = 'line://msg/text/?' + y + '%0a' + s;
    } else if (g_share_type === 3) {
        window.location.href = 'viber://forward?text=' + y + '%0a' + s;
    } else if (g_share_type === 4) {
        window.location.href = 'tg://msg?text=' + y + '%0a' + s;
    } else {
        window.location.href = 'whatsapp://send?text=' + y + '%0a' + s;
    }
    setTimeout(function () {
        get_Cookie('prog') == '' ? value = 1 : value = parseInt(get_Cookie('prog'))
        set_Cookie('prog', value + 1)
        if (value >= g_share_step) {
            continueBtn()
        }
        move()
    }, 3000)

}


