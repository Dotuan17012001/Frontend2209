const fontFamilyArray = {
    montserrat: "'Montserrat', sans-serif",
    OpenSans: "'Open Sans', sans-serif",
    Pacifico: "'Pacifico', cursive",
    Arial: "Arial, Helvetica, sans-serif",
    TimesNewRoman: "'Times New Roman', Times, serif"
}
function setFontStyle(dom, weight, style, decoration){
    dom.style.fontWeight = weight;
    dom.style.fontStyle = style;
    dom.style.textDecoration = decoration;
}
document.getElementById('save').onclick = function() {
    fontFamily = document.getElementById('font-family').value;
    fontSize = document.getElementById('font-size').value;
    fontStyle = document.getElementById('font-style').value;
    fontColor = document.getElementById('font-color').value;
    dataInput = document.getElementById('editor').value;
    preview = document.getElementById('output');
    //xu ly
    preview.style.fontFamily = fontFamilyArray[fontFamily];
    preview.style.fontSize = fontSize + "px";
    preview.style.color = fontColor;
    preview.innerText = dataInput;
    //xu ly style
    switch (fontStyle) {
        case 'none':
            setFontStyle(preview, '400', 'normal', 'none');
        break;

        case 'Bold':
            setFontStyle(preview, '700', 'normal', 'none');
        break;

        case 'Italic':
            setFontStyle(preview, '400', 'italic', 'none');
        break;

        case 'underline':
            setFontStyle(preview, '400', 'normal', 'underline');
        break; 
        default:
            break;
    }
}