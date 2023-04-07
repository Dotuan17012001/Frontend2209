$(document).ready(function () {
    $('label[for=text-search]').click(function () {
        $('#text-search').toggleClass('active');
    })

    $('#menubar').on('click',()=>{

        $('#menu').toggleClass('active');
    
    })
});


