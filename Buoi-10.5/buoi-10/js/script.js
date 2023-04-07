const fontFamilyArray = {
    montserrat: "'Montserrat', sans-serif",
    OpenSans: "'Open Sans', sans-serif",
    Pacifico: "'Pacifico', cursive",
    Arial: "Arial, Helvetica, sans-serif",
    TimesNewRoman: "'Times New Roman', Times, serif"
}
function setFontStyle(dom, weight, style, decoration){
    dom.css({
        'font-weight': weight,
        'font-style': style,
        'text-decoration': decoration,
    });
}
// Handle event
$(document).ready(function () {
    $('#save').click(function (e) {
        e.preventDefault();
        let fontFamily = $('#font-family').val();
        let fontSize = $('#font-size').val();
        let fontStyle = $('#font-style').val();
        let fontColor = $('#font-color').val();
        let preview = $('#output');
        preview.css({
            'font-family': fontFamilyArray[fontFamily],
            'font-size': fontSize + 'px',
            'color': fontColor,
        });
        console.log(fontStyle);
        switch (fontStyle) {
            case 'none':
                setFontStyle(preview, '400', 'normal', 'none');
            break;
    
            case 'bold':
                setFontStyle(preview, '700', 'normal', 'none');
            break;
    
            case 'italic':
                setFontStyle(preview, '400', 'italic', 'none');
            break;
    
            case 'underline':
                setFontStyle(preview, '400', 'normal', 'underline');
            break;
        }
    });

    $('#editor').keyup(function (e) { 
        let text = $(this).val();
        $('#output').html(text);
    });
    $('#editor').on('blur', function () {
        let text = $(this).val();
        if (text) {
            $('button[type=submit]').removeAttr('disabled');
        } else {
            $('button[type=submit]').attr('disabled', 'disabled');
        }
    })
    $('button[type=submit]').click(function () {
        $('img').fadeToggle();
    })
});