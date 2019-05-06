(function(){
    if (window.myBookmarklet !== undefined){
        myBookmarklet();
    } else {
        document.body.appendChild(document.createElement('script')).src='https://cb0c8b0e.ngrok.io/static/js/bookmarklet.js?r='+Math.floor(Math.random()*99999999999999999999);
    }
})();