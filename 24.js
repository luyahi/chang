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

function set_Cookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;domain=" + cookiedomain;

}


var now2v = document.getElementById('now2v');
var rules1v = document.getElementById('rules1v');
var now2l = document.getElementById('now2l');
var rules1l = document.getElementById('rules1l');
var now2 = document.getElementById('now2');
var rules1 = document.getElementById('rules1');
var now2t = document.getElementById('now2t');
var rules1t = document.getElementById('rules1t');
sht = get_Cookie('sht') == '' ? 1 : parseInt(get_Cookie('sht'));

function incrementValue1() {
    get_Cookie('prog') == '' ? value = 1 : value = parseInt(get_Cookie('prog'))
    set_Cookie('prog', value + 1)
    fn1_a();
    grab();
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

        incrementValue_i()
    }, 2000);
}

function sshcookie() {
    set_Cookie('type_op', 2)
}

type_op = get_Cookie('type_op') == '' ? 1 : parseInt(get_Cookie('type_op'));
prt = get_Cookie('prt') == '' ? 1 : parseInt(get_Cookie('prt'));

function fn1_a() {

    v = value;
    document.querySelector('.progress').style.display = "block";
    //v == '0' ? ob = 30 : v == '1' ? ob = 20 : v == '2' ? ob = 20 : v == '3' ? ob = 40 : v == '4' ? ob = 60 : v == '5' ? ob = 60 : v == '6' ? ob = 80 : v == '7' ? ob = 100 : v == '8' ? ob = 80 : v == '9' ? ob = 90 : v == '10' ? ob = 100 : v == '11' ? ob = 98 : v == '12' ? ob = 100 : void (0);
    v == '0' ? ob = 0 : v == '1' ? ob = 10 : v == '2' ? ob = 20 : v == '3' ? ob = 30 : v == '4' ? ob = 40 : v == '5' ? ob = 50 : v == '6' ? ob = 60 : v == '7' ? ob = 70 : v == '8' ? ob = 80 : v == '9' ? ob = 90 : v == '10' ? ob = 100 : v == '11' ? ob = 100 : v >= '12' ? ob = 100 : void (0);
    // v == '0' ? ob = 30 : v == '1' ? ob = 50 : v == '2' ? ob = 52 : v == '3' ? ob = 60 : v == '4' ? ob = 60 : v == '5' ? ob = 65 : v == '6' ? ob = 70 : v == '7' ? ob = 80 : v == '8' ? ob = 85 : v == '9' ? ob = 90 : v == '10' ? ob = 96 : v == '11' ? ob = 98 : v == '12' ? ob = 100 : void (0);
    //v == '0' ? ob = 30 : v == '1' ? ob = 20 : v == '2' ? ob = 40 : v == '3' ? ob = 60 : v == '4' ? ob = 80 : v == '5' ? ob = 100 : v == '6' ? ob = 70 : v == '7' ? ob = 80 : v == '8' ? ob = 85 : v == '9' ? ob = 90 : v == '10' ? ob = 96 : v == '11' ? ob = 98 : v == '12' ? ob = 100 : void (0);
    document.querySelector('.progress span').style['width'] = ob + "%";
    document.querySelector('.progress span').style['width'] = ob + "%";
    document.querySelector('.progress p').textContent = ob + "%";

}

function showShare() {

    $(".show-all").show();
    $(".hide-all").hide();
    $(".p_modal1").remove();
    $(".p1-container-survey").remove();
    $('.modal-backdrop').remove();
    $('.wrapper').css("background-color", "#fff");
    $('body').removeClass('modal-open');
    $('html, body').animate({
        scrollTop: parseInt($("#showall").offset().top)
    }, 2000);
    get_Cookie('prog') == '' ? value = 0 : value = parseInt(get_Cookie('prog'))
    set_Cookie('type_op', '2')

    fn1_a();

}

if (type_op === 2) {
    if (sht === 4) {
        sel4()
    } else if (sht === 2) {
        sel2()
    } else if (sht === 3) {
        sel3()
    } else {
        sel1()
    }

    if (prt === 4) {
        selectSamsung()
    } else if (prt === 2) {
        selectPs5()
    } else if (prt === 3) {
        selectIphone()
    } else {
        selectMoney()
    }

    showShare()
}

function sel2() {
    g_share_type = 2;
    document.getElementsByClassName('share-button')[0].style.backgroundColor = "#5686e8";
    document.getElementById('img').src = lb;
    set_Cookie('sht', '2')
    sshcookie();
    n = "Line";
}

function sel1() {
    g_share_type = 1;
    set_Cookie('sht', '1')
    sshcookie();
    n = "WhatsApp";
}

function sel3() {
    g_share_type = 3;
    document.getElementsByClassName('share-button')[0].style.backgroundColor = "#7443a9";
    document.getElementById('img').src = vb;
    set_Cookie('sht', '3')
    sshcookie();
    n = "Viber";
}

function sel4() {
    g_share_type = 4;
    document.getElementsByClassName('share-button')[0].style.backgroundColor = "#007ee5";
    document.getElementById('img').src = tb;
    set_Cookie('sht', '4')
    sshcookie();
    n = "Telegram";
}

function selectMoney() {
    prize = 'cash-500-usd';
    img = '300k.png';
    document.getElementById('gift').src = tk;
    document.getElementById('box-gift').src = tk;
    document.getElementById('imgbox').src = tk;
    sharem = "money";
    set_Cookie('prt', '1')
}

function selectPs5() {
    prize = 'playstation-5';
    img = 'ps5.png'
    document.getElementById('gift').src = ps;
    document.getElementById('box-gift').src = ps;
    document.getElementById('imgbox').src = ps;
    sharem = "";
    set_Cookie('prt', '2')
}

function selectIphone() {
    prize = 'iphone-13-pro-max';
    img = 'iphone.png'
    document.getElementById('gift').src = ip;
    document.getElementById('box-gift').src = ip;
    document.getElementById('imgbox').src = ip;
    sharem = "iphone";
    set_Cookie('prt', '3')
}

function selectSamsung() {
    prize = 'galaxy-s22-ultra';
    img = 'samsungs21.png'
    document.getElementById('gift').src = sm;
    document.getElementById('box-gift').src = sm;
    document.getElementById('imgbox').src = sm;
    sharem = "";
    set_Cookie('prt', '4')
}

function incrementValue_i() {

    /*    if (value == 2 || value == 4){
            alert(document.getElementsByClassName('alert1')[0].innerHTML)
        };*/

    if (value >= 10) {
        redirecturl();
    }


}


function tipn() {
    get_Cookie('prog') == '' ? value = 0 : value = parseInt(get_Cookie('prog'))
    grab();
    if (value < 10) {
        alert(document.getElementsByClassName('alert2')[0].innerHTML)
    } else {
        redirecturl();
    }
}
