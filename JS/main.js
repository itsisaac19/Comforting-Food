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
    window.location.href = 'https://comfortingfood.blog/dashboard.html'
})
document.getElementsByClassName('btsmall')[0].addEventListener('click', function(){
    window.location.href = 'https://comfortingfood.blog/portfolio.html'
})
document.getElementsByClassName('btsmall')[1].addEventListener('click', function(){
    window.location.href = 'https://comfortingfood.blog/Blogs/about.html'
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