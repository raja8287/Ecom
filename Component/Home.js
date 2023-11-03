import React, { PureComponent, useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Order from './Order';
import Profile from './profile';
import Pro_info from './pro_info';
import Slider from '../practice/slider_show';
import SliderTOW from '../practice/sliderTOW';
import Advi from './advi';
import A from './A';


const Home=()=>{
  const [Data,setData]=useState([]);
  const [CD,setCd]=useState('');
  const [add,setAdd]=useState([]);

  useEffect(()=>{ 
    fetch("http://localhost:4000/",{
      method:'GET',
    }).then((result)=>result.json()).then((data)=>setData(data),cartdata())



  },[])

function cartdata(){
  
  fetch(`http://localhost:4000/${sessionStorage.getItem('userid')}`,{
    method:'GET',
 }).then((result)=>result.json()).then((Data)=>setCd(Data))

}


  const Addtocart=(item)=>{
    localStorage.setItem("cart_item",item.product_link);
      localStorage.setItem("cart_item_name",item.product_name)
      localStorage.setItem("cart_item_price",item.product_price)
      localStorage.setItem("cart_item_q",'1')
      var t={use:[item.product_link,item.product_name,item.product_price]};
      var name=sessionStorage.getItem("uname");
      var uid=sessionStorage.getItem("userid");



      if(!name=="" && !uid==""){
        fetch("http://localhost:4000/addtocart",{
          method:'POST',
          headers:{
            Accept:'application/json',
            "Content-Type": "application/json",
          },
          body:JSON.stringify({uname:name,uq:1,uId:uid,udata:t})
        })

   
    }
    else{
      alert("login please")
    }
  }

function ViewProdunct(item){
  
  sessionStorage.setItem("vp name",item.product_name);
  sessionStorage.setItem("vp img",item.product_link);
  sessionStorage.setItem("vp price",item.product_price);
  sessionStorage.setItem("vp dis",item.product_dis);
 // window.location.href='/product_info';
} 
function glow(){
  var d=document.getElementById("btnth")
  
  d.style.border="2px solid #4FFFB0"
}







return(<>
<div id='Home'>

  {Data.map((item,index)=>{
    
    return(<>
    {index!==8 ||<SliderTOW datas={ViewProdunct}/>}
      {index!==12 || <Advi/>}
      {index!==16 || <A/>}
      



  {index!==4 || <>   
 <div className='slider-cont'>





  <div id='sct'>
    
  <h2> Iphone 13   </h2>


<p>10% CASHBACK on SBI Card <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/SBI-logo.svg/1200px-SBI-logo.svg.png'/>


</p>


  </div>

<div id='sctt'>
  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsucMsV7XWtkawe0zMBIMq_D2Aco0WhkWvDw&usqp=CAU'/>
<button id='scttbtnO'onClick={()=>{ViewProdunct({product_name:'IPHONE 13',product_link:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsucMsV7XWtkawe0zMBIMq_D2Aco0WhkWvDw&usqp=CAU',product_price:'69900',product_dis:"full galate product he"})}}>GRAB NOW</button>
<button id='btnth' onClick={()=>{Addtocart({product_name:'IPHONE 13',product_link:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsucMsV7XWtkawe0zMBIMq_D2Aco0WhkWvDw&usqp=CAU',product_price:'69900'});glow()}}>Only 69,900 &#x20B9;</button>


</div>

    </div></>}

        <div id='detail' >
        <Link to='product_info'>
  <img  src={item.product_link} alt="Card image cap"  onClick={()=>{ViewProdunct(item)}}/></Link>
  <br></br>
  <b >&#x20B9;{item.product_price} </b>
  <div >
    <h5 >{item.product_name}</h5>
 
    { !sessionStorage.getItem("uname")|| <>{ index!==add || <div id='add'><b>Added To Cart</b></div>}</>}


    <br></br>
<button id='cart' className='G' onClick={()=>{Addtocart(item);setAdd(index)}}>Add to Cart  <i class="fa fa-shopping-cart"></i></button>
  </div>
</div>
    </>)
  })}

</div>

<Routes>
  <Route path='product_info' element={<Pro_info/>}/>
</Routes>
</>
)
}
export default Home;

/*   fetch("http://localhost:4000/cartput",{
  method:'PUT',
  headers:{
    Accept:'application/json',
    "Content-Type": "application/json",
  },
  body:JSON.stringify({uI:tem.UserData,upn:uid,qt:tem.Qnt+1})
})


*/

/*
  <figure>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdmRkLSB2SpedTC0SBW8_48oW6gmfNWiWtzw&usqp=CAU'/>
    
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRIkf3Re0bHtbQoWAK-5DemnrDGY2KQ5rjbw&usqp=CAU'/>
  
  
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXRZeHo20Kf0bISfM_Nk1oxR24YByMJMtkuA&usqp=CAU'/>

    
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSUJjx0qfWck2ulyMtJtNCNAdGKw-uwRNj8Ap6rG9BX-pMpldzXreD6E7k9Q0BugZPnTc&usqp=CAU'/>
  </figure>
*/