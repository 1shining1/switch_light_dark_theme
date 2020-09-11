



document.addEventListener("DOMContentLoaded", function(){
    // Handler when the DOM is fully loaded

    document.getElementById('themeSwitch').addEventListener('change', function(event){
        (event.target.checked) ? document.body.setAttribute('secondary-theme', 'dark') :
        document.body.removeAttribute('secondary-theme');
    });

});
    
    
   
