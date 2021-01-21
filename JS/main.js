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


// BUTTONS CLICKS LOCATIONS:

document.getElementsByClassName('btlarge')[0].addEventListener('click', function(){
    window.location.href = 'dashboard.html'
})
document.getElementsByClassName('btsmall')[0].addEventListener('click', function(){
    window.location.href = 'portfolio.html'
})
document.getElementsByClassName('btsmall')[1].addEventListener('click', function(){
    broadCastBlog('AboutMeBlog')
    window.location.href = 'blogs.html'
})

// NAV BAR BUTTONS CLICKS LOCATIONS:

document.getElementById('navItems').children[0].addEventListener('click', function() {
    window.location.href = 'portfolio.html'
})
document.getElementById('navItems').children[1].addEventListener('click', function() {
    window.location.href = 'recipes.html'
})
document.getElementById('navItems').children[2].addEventListener('click', function() {
    window.location.href = 'blogs.html'
})
document.getElementById('navItems').children[3].addEventListener('click', function() {
    broadCastBlog('AboutMeBlog')
    window.location.href = 'blogs.html'
})
document.getElementById('navItems').children[4].addEventListener('click', function() {
    window.location.href = 'dashboard.html'
})