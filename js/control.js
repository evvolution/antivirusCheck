$(document).ready(function() {
    initfull()
});

var link = 'server.foshanplus.com/';

window.addEventListener('scroll', function() {
    let t = $('body, html').scrollTop(); // 目前监听的是整个body的滚动条距离
    if (t > 200) {
        $('.box').addClass('virustabbox-active')
    } else {
        $('.box').removeClass('virustabbox-active')
    }
})

window.onload = function() {
    // initSlide();
}

function initfull() {
    $('#fullpage').fullpage({
        mode: 'touch',
    });
}


function getalldata() {

}