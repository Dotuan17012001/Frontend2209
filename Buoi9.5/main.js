

$(document).ready(function () {
    $('#save').click(function(){
        const textest =$('#text').val();
        $('#output').text(textest);
    })

    $('#colorchange').change(function (e) { 
        e.preventDefault();
        let color = $(this).val();
        $('#output').css('color', color);

    });
});