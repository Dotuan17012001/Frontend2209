// const colorPicker = document.getElementById('input-color');
// const elems = document.querySelectorAll('.title');
// colorPicker.addEventListener('change', function() {
//   Array.from(elems).forEach(v => v.style.color = this.value);
// });


let boxelement = document.getElementById('box').innerText;
let newbies = "Hello hawo r u "+ boxelement;
document.getElementById('box-2').innerHTML = newbies;

//set color
document.getElementById('box').style.backgroundColor="#999";
document.getElementById('box-2').style.backgroundColor="red";

//set width
document.getElementById('box-2').style.width="400px";

//add link vao the a 2 cach
let googleLink = document.getElementById('link').innerText;
document.getElementById("addLink").attributes['href'].value = googleLink;
// document.getElementById("addLink").setAttribute('href',googleLink);
document.getElementById("addLink").setAttribute('taget','_blank');

function clickMeHandling(){
  let text = document.getElementById('totext').value;
  document.getElementById('result').innerHTML=text;
}

// Cach-2
// document.getElementById('color-picker').onchange=function () {
//     let color1=document.getElementById('color-picker').value;
//     document.getElementById('result').style.backgroundColor=color1;
// }

// Cach-3
// document.getElementById('color-picker').addEventListener('change',function() {
//   let color1=this.value;
//   document.getElementById('result').style.backgroundColor=color1;
// })
  
//c ach 4 sai
document.getElementById('color-picker').addEventListener('change',() => {
  let color1=this.value;
  document.getElementById('result').style.backgroundColor=color1;
})

// button.addEventListener('click', (event) => {
//   const target = event.target
// }


 let test=document.getElementById('box').innerText;
 test=test+' hahahahaha';
 document.getElementById('box-2').innerHTML=test;
