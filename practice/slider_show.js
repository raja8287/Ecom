import React from 'react'
function Slider() {
 
  
var silde=document.getElementById("sild");

var bnt1=document.getElementById("btn1");

var bnt2=document.getElementById("btn2");

var bnt3=document.getElementById("btn3");
var bnt4=document.getElementById("btn4");


function btnO(){
  silde.style.transform="translateX(0px)";

}
function btnT(){
  silde.style.transform="translateX(-50%)";

}
function btnTH(){
  silde.style.transform="translateX(-100%)";

}
function btnF(){
  silde.style.transform="translateX(-200%)";

}
function btnFi(){
  silde.style.transform="translateX(-300%)";

}
    
  return (<>

  <div className='slider'>
    <h3>SLIDER</h3>
    <div id='sild'>
    <img src="data:image/jpeg;base64,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" alt='img1'/>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm6yf8TN1IjJp7GGSWaF0uTzH1FSKORJ7PyQ&usqp=CAU" alt='img1'/>

    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT4DMI-OzbvuWzja-oRQg347VQ9erx405jyw&usqp=CAU" alt='img1' />

    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ7rKQmLDZX0v3I5Ff2eqYvIPUOFwxgO9kgQ&usqp=CAU" alt='img1'/>
    <img src='data:image/jpeg;base64,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' alt='imge'/>
  </div>
 <div className='inds'>
 <span id='btn1' onClick={()=>{btnO()}}></span>
 <span id='btn2' onClick={()=>{btnT()}}></span>
 <span id='btn3' onClick={()=>{btnTH()}}></span>
 <span id='btn4' onClick={()=>{btnF()}}></span>
 <span id='btn5' onClick={()=>{btnFi()}}></span>

 </div>
 
  </div>


    </>
  )
}

export default Slider;
/*
   bnt1.onclick=function(){
  silde.style.transform="translateX(0px)";
}
bnt2.onclick=function(){
  silde.style.transform="translateX(-50%)";
}
bnt3.onclick=function(){
  silde.style.transform="translateX(-100%)";
}

bnt4.onclick=function(){
  silde.style.transform="translateX(-200%)";
}

*/
 