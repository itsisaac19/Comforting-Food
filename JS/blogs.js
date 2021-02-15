
window.onscroll = positionVid
window.onresize = positionVid

function positionVid () {
    if (window.innerWidth < 1000) {
        return;
    } else {
        if (window.scrollY > 730) {
            var elem = document.getElementsByClassName('articlevideo')[0]
            elem.style.position = 'fixed'
            elem.style.right = '80px'
        } else {
            var elem = document.getElementsByClassName('articlevideo')[0]
            elem.style.position = null
            elem.style.right = null
        }
    }
}

document.getElementById('linksquare').addEventListener('click', copycurrenturl)
document.getElementById('linksquare').addEventListener('mouseenter', showhint)
document.getElementById('linksquare').addEventListener('mouseleave', hidehint)

document.getElementById('heartsquare').addEventListener('click', changeheart)
document.getElementById('heartsquare').addEventListener('mouseenter', showhint)
document.getElementById('heartsquare').addEventListener('mouseleave', hidehint)

function changeheart () {
    var heartfillcolor = window.getComputedStyle(document.getElementById('ic_favorite_24px')).getPropertyValue('fill')
    var heartfilled = false;
    if (heartfillcolor == 'rgba(0, 0, 0, 0)') {
        document.getElementById('ic_favorite_24px').style.fill = '#f9c5c5'
        this.children[0].innerHTML = 'favorited!';
    } else {
        this.children[0].innerHTML = 'favorite';
        document.getElementById('ic_favorite_24px').style.fill = null
    }
}

function copycurrenturl () {
    var globalthis = this
    this.children[0].style.opacity = '1';
    this.children[0].style.top = '-35px';
    this.children[0].innerHTML = 'copied!';

    setTimeout(function() {
        globalthis.children[0].style.opacity = null;
        globalthis.children[0].style.top = null;
    }, 1000)

    var dummy = document.createElement('input'),
    text = window.location.href;

    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
}

function showhint () {
    this.children[0].style.opacity = '1';
    this.children[0].style.top = '-35px';
}
function hidehint () {
    this.children[0].style.opacity = null;
    this.children[0].style.top = null;

    if (this.children[0].innerHTML == 'copied!') {
        this.children[0].innerHTML= 'copy link';
    }
}