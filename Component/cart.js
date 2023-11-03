import React, { PureComponent, useEffect, useState } from 'react';


function Cart(){
   const [Tot,setTop]=useState([]);
   const [Cart,setCartD]=useState([])
 useEffect(()=>{
   fetch(`http://localhost:4000/${sessionStorage.getItem('userid')}`,{
      method:'GET',
   }).then((result)=>result.json()).then((Data)=>setCartD(Data));
 },[])

 function Tota(){
   var cd=0;
 Cart.map((item)=>{
   let d=item.UserData[2];
   cd+=d;
   setTop(cd)

 })

 }

/*
setTimeout(() => {
  Tota()
}, 100);
  */ 


//for deleting item from the user cart
function Delete_item(item){

  fetch("http://localhost:4000/deletecartitem",{
    method:'DELETE',
    headers: {
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({cartitem:item._id})
})


}

function YourOrder(Cartitem){
  var curent =new Date()
  var mont=curent.getMonth()+1;
  var d=curent.getDate()+"/"+mont+"/"+curent.getFullYear();
  var t=curent.getHours()+":"+curent.getMinutes()

  for(let i=0;Cartitem.length>i;i++){
  fetch("http://localhost:4000/Userorder",{
    method:'POST',
    headers: {
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({Orderitem:Cartitem[i].UserData,tp:Cartitem[i].UserData[2],Uname:Cartitem[0].Username,id:Cartitem[0].UserId,Uadd:"house no 43 gali no 1 neb sarai 110068 ,new delhi",Custphone:8700826036,orderstate:"ordered",Dat: d ,time: t})
})
document.getElementById("cpo").style.display="flex";

  }
  
  
 
}







function RemoveCart(item){
  console.log("item :",item[0].UserId)
  fetch("http://localhost:4000/deletecart",{

   method:'DELETE',
    headers: {
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({cart:item[0].UserId})
  });
  
}


return(<>

<div id='pr'>
<div id='address_detail'>
  <p onClick={()=>{document.getElementById("address_detail").style.display="none"}}>X</p>
    <input type='text' placeholder='Name' id='nameAd'/>
    <input type='text' placeholder='address' id='addressAd'/>
    <input type='text' placeholder='Pincode' id='pinAd'/>
    <input type='text' placeholder='Phone no' id='phoneAd'/>
    <button >Confirme</button>

  
</div>
  <br></br>
    <h2>CART</h2>
    <div id='cpo'>
      <h3>ORDER IS PLACED SUCCESSFULLY ! &#128516;</h3>
      <b onClick={()=>{document.getElementById("cpo").style.display="none"}}>X</b>
    </div>
    <div id='pd'>
        <b>Product</b>
         <hr></hr>
    <h4>NAME </h4>
    <hr></hr>
        <b onClick={()=>{Tota()}}>price</b>
        <hr></hr>
        
        <p>Quentity</p>
     
        <hr></hr>

    </div>
    <hr></hr>
  

    {!sessionStorage.getItem("uname")=="" ||<h3>NEED TO LOGIN!</h3>}
{!sessionStorage.getItem("uname") ||<>     
<div>
{!Cart.length==0 ||<h3> <i class="fa fa-shopping-cart"></i> Cart! IS EMPTY </h3>}

  {Cart.map((item,index)=>{
      return(<>
      
       
      <div id='pq'>
      <b>{index+1}</b>
      <div>
   <img src={item.UserData[0]} alt='j'/>
      </div>
      <hr></hr>
   <h4>{item.UserData[1]}</h4>
   <hr></hr>
   <b>{item.UserData[2]} &#x20B9;</b>
   <hr></hr>
   <p>{item.Qnt}</p>
   <p id='del' onClick={()=>{Delete_item(item);window.location.reload()}}>	&#128465;</p>
  
 </div>
 
     
     <hr></hr>
     </>)

    })}
    
    </div>
    </>
    }
  
    {!sessionStorage.getItem("uname") ||
    
 <div id='tp'>
  { Cart.length==0 ||
<>
    <b onClick={()=>{Tota()}} title='Click here to get the total price'>TOTAL PRICE:</b>
    { !Tot ||<h3>{Tot} &#x20B9;</h3>}
    
    <button style={{background:"#32de84"}} onClick={()=>{YourOrder(Cart);Tota();RemoveCart(Cart);window.location.reload()}} >PLACE ORDER</button>
    <button style={{background:"#007FFF",cursor:'pointer'}} onClick={()=>{window.location.href='/'}}>Continue Shopping</button>
    </>}
 </div>}
</div>
    </>)
}
export default Cart;
