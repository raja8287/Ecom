import React, { useState } from 'react'

function SingIn() {
  const [pro,setPro]=useState([]);
  function Imgset(e){
    var reader=new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload =()=>{
      setPro(reader.result);

    };
    reader.onerror=error=>{
      console.log("ERROE :",error)
    };

  }


  function signnal(){
    var name=document.getElementById("username").value;
    var pass=document.getElementById("userpass").value;
    var cpass=document.getElementById("cpass").value;
    if(pro=="" || !name || !pass || !cpass){
      document.getElementById("username").style.boxShadow="0px 0px 10px 1px red";
      document.getElementById("userpass").style.boxShadow="0px 0px 10px 1px red";
      document.getElementById("cpass").style.boxShadow="0px 0px 10px 1px red";

    
      

    }
    else{
      document.getElementById("username").style.boxShadow="0px 0px 10px 1px green";
      document.getElementById("userpass").style.boxShadow="0px 0px 10px 1px green";
      document.getElementById("cpass").style.boxShadow="0px 0px 10px 1px green";

      
    }

  }



  function PostUser(event){
    event.preventDefault();
    var name=document.getElementById("username").value;
    var pass=document.getElementById("userpass").value;
    var cpass=document.getElementById("cpass").value;
    
    if(pro=="" || !name || !pass || !cpass){

        alert("file the form")
    }
    else{
      if(pass==cpass){
      fetch("http://localhost:4000/postuser",{
       
        method:'POST',
        crossDomain:true,
        headers:{
    
           Accept:'application/json',
           "Content-Type": "application/json",
          // "Content-Type": "image/png"
          },
        body:JSON.stringify({userimg:pro,username:name,userpass:pass})
      })
      document.getElementById('posin').style.display="flex"
     window.location.href="/"
    }
    else{
      alert("password not mathced")
    }
  }
  }


  return (
    <div id='sing'>
      <div id='posin'><b> SignIn SUCCESSFULLY!</b><p onClick={()=>{document.getElementById("posin").style.display="none"}}>X</p></div>
    <div id='singde' >

    <div id='singimg'>
        <img src={pro || "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1200px-Plus_symbol.svg.png" } alt='profile img' />  
        <br></br>
        <input type='file' onChange={(e)=>{Imgset(e);signnal()}}/>
    </div>
    <div id='singin'>
        <br></br>
        <input placeholder='USERNAME' id='username' onChange={()=>{signnal()}}/>
        <br></br>
        <input placeholder='PASSWORD' id='userpass' onChange={()=>{signnal()}}/>
        <br></br>
        <input placeholder='CONFIRM PASSWORD' id='cpass' onChange={()=>{signnal()}}/>
        <br></br>
        <button onClick={(e)=>{PostUser(e)}}> SignIn</button>
        <p onClick={()=>{window.location.href='/profile'}}>Already SingIn!</p>
    </div>

    </div>
  
</div>
    
  )
}

export default SingIn