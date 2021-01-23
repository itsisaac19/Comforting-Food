/*
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





function getBlog (key) {
    console.log(localStorage.getItem(key))
    var a = JSON.parse(localStorage.getItem(key))
    //console.log(a)
    loadBlog(a['title'], a['date'], a['author'], a['time'], a['image'] ,a['url'])
}

function loadBlog (title, date, author, time, image, url) {
    fetch(url)
    .then(function(response) {
        response.text().then(function(text) {
            var article;
            article = text;
            displayBlog(title, date, author, time, image, article);
        })
    })
}

function displayBlog (title, date, author, time, image, article) {
    var articleTitle = document.getElementsByClassName('article-title')[0]
    var articleImage = document.getElementsByClassName('img-article-wrapper')[0]
    var detailsWrap = document.getElementsByClassName('article-details')[0]
    var articleWrap = document.getElementsByClassName('main-wrapper-article')[0]

    articleTitle.innerHTML = title; document.title = title
    articleImage.style.backgroundImage = 'url(' + image + ')'; if (image == "") {articleImage.style.display = 'none'; document.getElementsByClassName('main-wrapper-article')[0].style.top = '260px'; document.getElementsByClassName('article-details')[0].style.top = '200px';}
    detailsWrap.children[0].innerHTML = author + ' • ' + time; detailsWrap.children[1].innerHTML = date;
    articleWrap.innerHTML = article
}*/




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