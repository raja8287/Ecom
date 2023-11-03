import {React,useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import style from './user.css';
function User() {

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
          sessionStorage.setItem("userid",Data[i]._id)
          document.getElementById("logname").style.boxShadow="0px 0px 10px 1px green";
          document.getElementById("logpass").style.boxShadow="0px 0px 10px 1px green"
          alert(`HI ${Data[i].UserName}`)
        }
      else{
          document.getElementById("logname").style.boxShadow="0px 0px 10px 1px red";
          document.getElementById("logpass").style.boxShadow="0px 0px 10px 1px red"
        }
      }
  }
  else{
    alert("not pass")
  }
}

function GotoCart(){
  window.location.href="cart"
}



  return (
    <div id='logpro'>
<br></br>
   {sessionStorage.getItem("uname")==null || <h3>Profile</h3>}
   {!sessionStorage.getItem("uname")=="" || <h3>LOGIN!</h3>}
    <div id='logde'>
  
        {sessionStorage.getItem("uname")==null || <div id='po'>
          
          <div id='pos'>

        <img src={sessionStorage.getItem("uimg")} alt='profile img'/>
    <h2>WELCOME {sessionStorage.getItem("uname")} </h2>

      <p onClick={()=>{GotoCart()}}> YOUR CART</p>
      { sessionStorage.getItem("uname")!=="Raja"||
            <Link to="Add" style={{textDecoration:"none"}}><p>Add Product</p></Link>}
            <p>Edit profile</p>

            
      <p id="out" onClick={()=>{sessionStorage.removeItem("uimg");sessionStorage.removeItem("uname");sessionStorage.removeItem("Uid");window.location.reload()}}  style={{border:'none'}}>Logout</p>
            </div> </div>}


        {!sessionStorage.getItem("uname")=="" ||   
        
        <div id='prode'>
       
        <div id='proin'>
            <br></br>
            <input placeholder='USERNAME' id='logname'/>
            <br></br>
            <input placeholder='PASSWORD' id='logpass'/>
            <br></br>
          
            <button onClick={()=>{login();window.location.reload()}}> LOGIN</button>
            <br></br>
        <p onClick={()=>{window.location.href="singin"}}> SingIn !</p>
        </div>

        </div>
        
        
        
        }
    </div>
    
   </div>  )
}

export default User

/**
 * 
 * 
   
 * 
 */