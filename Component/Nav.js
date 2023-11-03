import React, { PureComponent, useEffect, useState } from 'react';
import {Route,Link,Routes} from 'react-router-dom';
import style from './Nav.css';
import Home from './Home';
import Order from './Order';
import Cart from './cart';
import Profile from './profile';
import Log from './log';
import SingIn from './SingIn';
import User from './user';
import Slider from '../practice/slider_show';
import Pro_info from './pro_info';
const Nav=()=>{
    const[itn,setitn]=useState([])
  const [Items,setItem]=useState([]);
  const [Si,setSi]=useState([]);
  const [v,setV]=useState([]);

            function Ham(){
             var c= document.getElementById("h").style.display;
             if(c=="block"){
                document.getElementById('h').style.display="none";
                document.getElementById('a').style.display="none";
                document.getElementById('m').style.display="none";
                document.getElementById('e').style.display="none";

                document.getElementById('search').style.display="none";


             }
             else{
                document.getElementById("h").style.display="block"
                document.getElementById('a').style.display="block";
                document.getElementById('m').style.display="block";
                document.getElementById('e').style.display="block";

                document.getElementById('search').style.display="block";


             }
                
            }

            function search_item_navbar(){
                let v=document.getElementById('sear').value;
                setV(v)
                fetch(`http://localhost:4000/`,{
                    method:'GET'
                }).then((result)=>result.json()).then((data)=>setItem(data))
                for(var i=0;i<Items.length;i++){
                    if(v.substring(0,4).toLowerCase()===Items[i].product_name.substring(0,4).toLowerCase() || v.toLowerCase()===Items[i].product_name.toLowerCase()){
                        const v ={
                            name:Items[i].product_name,
                            price:Items[i].product_price,
                            img:Items[i].product_link
                        };
                            setSi(v)
                            
                    }
                    else{
                    console.log('not founded')
                    }
                }
            }

          //  alert(Si.price)
    return(
        <>
        <div className='navl'>
        <div className='Nav'>

        <div id='ham' style={{fontSize:"20px"}}><span onClick={()=>{Ham()}} > &#8801;</span> </div>



        <div id='h'>
            <Link to='/' style={{textDecoration:"none",color:"blue"}}><span> Home</span></Link>
        </div>

        <div id='a'>
            <Link to="OrderList" style={{textDecoration:"none"}}>Your Order</Link>
        </div>

        <div id='m'>
            <Link to="cart" style={{textDecoration:"none",color:"white"}}> <span> <i class="fa fa-shopping-cart"></i></span></Link>
            
        </div>


<div id='e'>
    <Link to="profile"><img src={sessionStorage.getItem("uimg") || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"} style={{width:"20px",height:"20px",borderRadius:"100%"}}/></Link>
</div>
       
     

        <div id='search'>
        <input placeholder='Search Product' type='text' id='sear' onChange={()=>{search_item_navbar()}}/>
        <button type="submit" onClick={()=>{search_item_navbar()}}><i class="fa fa-search"></i></button>
        <div id='sb'>
<>
   
    { v=='' ||<>
         <div key="h" id='sbdiv'>
         <img src={Si.img}/>
         <p>{Si.name}</p>
         <b>{Si.price} &#x20B9;</b>
     </div>
  </>
    }


     
    </>

    
    
</div>
        </div>


        
        
        </div>

        </div>
      
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='OrderList' element={<Order/>}/>
            <Route path='profile' element={<User/>}/>
            <Route path='cart/' element={<Cart/>}/>
            <Route path='profile/Add' element={<Profile/>}/>
            <Route path='/product_info' element={<Pro_info/>}/>
      <Route path="Singin" element={<SingIn/>}/>
      <Route path="pr" element={<Slider/>}/>


        </Routes>
        </>
    )
}

export default Nav;

/**
 * 
 * 
 *     <div id='s'>
            <Link to="log" style={{textDecoration:"none"}}>LOGIN</Link>
            
        </div>
 */