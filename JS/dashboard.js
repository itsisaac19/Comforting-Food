function setProp (id, author, readTime, date, title, previewText, width, height) {
    var card = document.getElementById(id);

    card.children[0].children[0].innerHTML = author + ' • ' + readTime
    card.children[0].children[1].innerHTML = date
    card.children[1].innerHTML = title; if(title == '') {card.children[1].style.opacity = '0'}

    if (previewText !== undefined && previewText.length > 1) {
        var e = document.createElement('div'); e.innerHTML = previewText; e.className = 'previewText'
        card.appendChild(e); e.style.gridArea = 'spacer'
    }


}

setProp('First', 'Linda Tsai', '4 min read', 'Jan 16, 2021', 'Best Chicken Tikki Methods and Prep','','4', '3');
setProp('Third', 'Linda Tsai', '6 min read', 'Jan 19, 2021', 'Best Chicken Tikki Methods and Prep','','2', '3');
setProp('Fourth', 'Linda Tsai', '4 min read', 'Jan 16, 2021', 'Best Chicken Tikki Methods and Prep','','2', '2');
setProp('Fifth', 'Linda Tsai', '4 min read', 'Jan 16, 2021', 'Best Chicken Tikki Methods and Prep','','2', '2');



fetch('https://cdn.filestackcontent.com/SDtacK3gSKK1q1tggeQg')
.then(function(response) {
    response.text().then(function(text) {
        var article;
        article = text;
        setProp('Second', 'Linda Tsai', '2 min read', 'Jan 19, 2021', '', article,'2', '2');
        
    })
})

function important() {
    document.getElementById('x-sdksdsn').style.gridRow = null
    document.getElementById('x-sdksdsn').style.gridRow = 'span 2'
}
important()



/*
setWidthOfCard('Second', 1);
setWidthOfCard('Third', 2);

setWidthOfCard('Fourth', 1);
setWidthOfCard('Fifth', 2);
setWidthOfCard('Sixth', 2);
setWidthOfCard('Seventh', 1);

*/


//  SCROLL NAV BAR

window.onscroll = function() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("topBarNav").style.transition = 'ease 0.2s'
        document.getElementById("topBarNav").style.paddingTop = "0"; document.getElementById("topBarNav").style.height = "100px";
        document.getElementById("lineBarNav").style.transition = 'ease 0.2s'
        document.getElementById('lineBarNav').style.opacity = '1'
    } else {
        document.getElementById("topBarNav").style.paddingTop = null; document.getElementById("topBarNav").style.height = null
        document.getElementById('lineBarNav').style.opacity = '0.1'
    }
}


document.getElementById('logoFinal').addEventListener('click', function() {
    window.location.href = 'dashboard.html'
})
document.getElementById('navItems').children[0].addEventListener('click', function() {
    window.location.href = 'dashboard.html'
})


// NAV BAR BUTTONS CLICKS LOCATIONS:

document.getElementById('navItems').children[2].addEventListener('click', function() {
    window.location.href = 'portfolio.html'
})
document.getElementById('navItems').children[3].addEventListener('click', function() {
    window.location.href = 'recipes.html'
})
document.getElementById('navItems').children[4].addEventListener('click', function() {
    window.location.href = 'blogs.html'
})
document.getElementById('navItems').children[5].addEventListener('click', function() {
    window.location.href = 'blogs/about.html'
})
document.getElementById('navItems').children[6].addEventListener('click', function() {
    window.location.href = 'dashboard.html'
})
