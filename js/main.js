


document.addEventListener("DOMContentLoaded", function(){
    // Handler when the DOM is fully loaded

    // change theme 
    document.getElementById('themeSwitch').addEventListener('change', function(event){
        (event.target.checked) ? document.body.setAttribute('secondary-theme', 'dark') :
        document.body.removeAttribute('secondary-theme');
    });


    // nice scrolling
    $("body").niceScroll({
        cursorcolor:"#2ab9a5",
        cursorwidth:"10px"
    });

    // $(".nicescroll-box").niceScroll(".wrap",{cursorcolor:"aquamarine"});


});
    
