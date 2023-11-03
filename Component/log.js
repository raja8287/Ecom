import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import SingIn from './SingIn';

function Log() {
  const [Data,setD]=useState([])
  const [imgs,setImg]=useState([]);
  const [uname,setU]=useState([]);
  useEffect(()=>{

    fetch("http://localhost:4000/userdata",{
      method:'GET'
    }).then((result)=>result.json()).then((ata)=>setD(ata)    
    );

  },[])




function login(){
  var name=document.getElementById("logname").value;
  var pass=document.getElementById("logpass").value;
  if(name && pass){
      for(let i=0;i<Data.length;i++){
        if(Data[i].UserName==name && Data[i].Pass==pass){
          setU(Data[i].UserName);
          setImg(Data[i].Userimg);
          sessionStorage.setItem("loged","true")
          sessionStorage.setItem("uimg",Data[i].Userimg)
          sessionStorage.setItem("uname",Data[i].UserName)
          document.getElementById("logname").style.boxShadow="0px 0px 10px 1px green";
          document.getElementById("logpass").style.boxShadow="0px 0px 10px 1px green"
          alert("succsefuly logedin")
        }
        else{
          alert("user not found")
          document.getElementById("logname").style.boxShadow="0px 0px 10px 1px red";
          document.getElementById("logpass").style.boxShadow="0px 0px 10px 1px red"
        }
      }
  }
  else{
    alert("not pass")
  }
}

  return (<>
    <div id='profile'>
    {sessionStorage.getItem("uname")  || 

        <div id='prode'>
 
        <div id='proin'>
            <br></br>
            <input placeholder='USERNAME' id='logname'/>
            <br></br>
            <input placeholder='PASSWORD' id='logpass'/>
            <br></br>
          
            <button onClick={()=>{login()}}> LOGIN</button>
            <br></br>
        <p onClick={()=>{window.location.href="singin"}}> SingIn !</p>
        </div>

        </div>
}
{!sessionStorage.getItem("uname") || <div>
        <img src={sessionStorage.getItem("uimg")} alt='profile img'/>
    <h3>HI {sessionStorage.getItem("uname")} </h3>

      <p>Edit profile</p>
            <Link to="Add" style={{textDecoration:"none"}}>Add Product</Link>
            
      <p onClick={()=>{sessionStorage.removeItem("uimg");sessionStorage.removeItem("uname")}}>logout</p>
            </div>}
    </div>


    
 
    </>
  )
  
  
}

export default Log