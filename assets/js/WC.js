//Cifra vizualizzata
let numeroJs=0;
function start(){
let displayNumber=document.createElement('div');
displayNumber.className='display-num';
displayNumber.innerHTML=`<div class="numero">${numeroJs}</div> <img class="resetImg" src="assets/img/2.png">`;
document.body.append(displayNumber)

//Bottone più
let buttonPlus=document.createElement('div');
buttonPlus.className="plus";
buttonPlus.innerHTML='+';
document.body.append(buttonPlus);

buttonPlus.addEventListener('click',()=>{
    numeroJs++;
    displayNumber.innerHTML=`<div class="numero">${numeroJs}</div> <img class="resetImg" src="assets/img/2.png">`
   console.log(numeroJs);
   
    
})
//Bottone meno
let buttonMinus=document.createElement('div');
buttonMinus.className="minus";
buttonMinus.innerHTML='-';
document.body.append(buttonMinus);

buttonMinus.addEventListener('click',()=>{
    if(numeroJs>0){numeroJs--};
    displayNumber.innerHTML=`<div class="numero">${numeroJs}</div> <img class="resetImg" src="assets/img/2.png">`
   console.log(numeroJs);
 
})
//Bottone reset
let buttonReset=document.querySelector('.display-num , .resetImg')
buttonReset.addEventListener('click',()=>{
 numeroJs=0;
 displayNumber.innerHTML=`<div class="numero">${numeroJs}</div> <img class="resetImg" src="assets/img/2.png">`
})
};
start()