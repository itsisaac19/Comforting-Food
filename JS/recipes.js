var expanded = false
function expandViewOfSidebar () {
    
    if (expanded == true) {
        var bar = document.getElementById('sideBarNav')
        bar.style.right = null; this.style.transform = null
        expanded = false
        return; 
    }

    var bar = document.getElementById('sideBarNav')
    bar.style.right = '0'; this.style.transform = 'rotate(90deg)'
    expanded = true
}
document.getElementById('logoFinal').addEventListener('click', expandViewOfSidebar)
document.getElementById('hinterClose').addEventListener('click', function() {
    document.getElementById('logoFinal').dispatchEvent(new Event('click'));
})


// NAV BAR BUTTONS CLICKS LOCATIONS:

document.getElementById('navItems').children[0].addEventListener('click', function() {
    window.location.href = 'https://comfortingfood.blog/portfolio.html'
})
document.getElementById('navItems').children[1].addEventListener('click', function() {
    window.location.href = 'https://comfortingfood.blog/recipes.html'
})
document.getElementById('navItems').children[2].addEventListener('click', function() {
    window.location.href = 'https://comfortingfood.blog/blogs.html'
})
document.getElementById('navItems').children[3].addEventListener('click', function() {
    window.location.href = 'https://comfortingfood.blog/Blogs/about.html'
})
document.getElementById('navItems').children[4].addEventListener('click', function() {
    window.location.href = 'https://comfortingfood.blog/dashboard.html'
})


//  SCROLL NAV BAR

window.onscroll = function() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        if (expanded == false) {
            return;
        } else {
            document.getElementById('logoFinal').dispatchEvent(new Event('click'));
        }
    } else {

    }
}

window.onscroll = function() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("topBarNav").style.transition = 'ease 0.2s'
        document.getElementById("mainHeader").style.transition = 'ease 0.2s'
        document.getElementById("logoWrap").style.transition = 'ease 0.2s'
        document.getElementById("guiderP").style.transition = 'ease 0.2s'

        document.getElementById("topBarNav").style.paddingTop = "0";
        document.getElementById("mainHeader").style.top = "35px"; 
        document.getElementById("logoWrap").style.top = "35px"; 
        document.getElementById("guiderP").style.top = "55px"; 
        document.getElementById("topBarNav").style.borderBottom = "solid 1px gray"; 
    } else {
        document.getElementById("topBarNav").style.paddingTop = null; 
        document.getElementById("mainHeader").style.top = null;
        document.getElementById("logoWrap").style.top = null; 
        document.getElementById("guiderP").style.top = null; 
        document.getElementById("topBarNav").style.borderBottom = "solid 1px lightgray"; 
    }
}