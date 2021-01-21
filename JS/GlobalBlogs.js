/*
function setBlogs() {
    fetch('https://cdn.filestackcontent.com/7x9CWlWSzS3FCKTTHSbt')
    .then(function(response) {
        response.text().then(function(text) {
            localStorage.setItem('chickenTikkiMasalaBlog', (text))
            //console.log((text))
        })
    })
    fetch('https://cdn.filestackcontent.com/PiMzlMgpQn2M39aPKqOh')
    .then(function(response) {
        response.text().then(function(text) {
            localStorage.setItem('AboutMeBlog', (text))
            //console.log((text))
        })
    })
}
setBlogs()
*/


function broadCastBlog(blogKey) {
    window.location.href = 'https://comfortingfood.blog/Blogs/'+ blogKey +'.html'
}

