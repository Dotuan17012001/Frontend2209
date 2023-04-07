// const car = {
//     soBanh: 4,
//     name:'lambo',
//     dungTich:1.2
// }
// class Car{
//     constructor(name,dungTich,thieHao,brand){
//         this.name=name
//         this.dungTich=dungTich
//         this.thieHao=thieHao
//         this.brand=brand
//     }

//     getFullName = function(){
//         return `${this.brand}+ '-' +${this.name}`
//     }
// }

// const fadil = new Car('gadi',1.2,6,'vinfast')
// document.write('<h1>'+ fadil.getFullName+'</h1>')



const fontFamilyArray ={
     montserrat: "'Montserrat', sans-serif",
     openSans: "'Open Sans', sans-serif",
     pacifico: "'Pacifico', cursive",
     arial:"Arial, Helvetica, sans-serif" ,
     timesNewRoman:"'Times New Roman', Times, serif"
}
function setFontStyle(dom,weight,style,decoration){
  dom.style.fontWeight = weight;
  dom.style.fontStyle=style;
  dom.style.textDecoration=decoration;
}

document.getElementById('save').onclick = function(){
    fontFamily =document.getElementById('font-family').value;
    fontSize =document.getElementById('font-size').value;
    fontStyle =document.getElementById('font-style').value;
    fontColor =document.getElementById('font-color').value;
    dataInput =document.getElementById('editor').value;
    
    preview = document.getElementById('output'); 
    //Xu li
    preview.style.fontFamily =fontFamilyArray[fontFamily];
    preview.style.fontSize =fontSize+"px";
    preview.style.color=fontColor;
    preview.innerText =dataInput;
   
    //Xu li style
    switch(fontStyle){
        case 'none':
            setFontStyle(preview, "400", "normal", "none")
            break;
        case 'bold':
            setFontStyle(preview, "700", "normal", "none")
            break;
        case 'italic':
            setFontStyle(preview, "400", "italic", "none")
            break;
        case 'underline':
            setFontStyle(preview, "400", "normal", "underline")
            break;

       
    }
    
}




