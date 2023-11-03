import React, { PureComponent, useState } from 'react';


const Profile=()=>{
    const [Da,setDa]=useState([]);
   
   
   
    const uploadimg=(e)=>{
            var reader=new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload=()=>{
              console.log(reader.result);
              setDa(reader.result);
            };
            reader.onerror=error=>{
              console.log("ERROE :",error)
            };
    }

const InData=()=>{
    var n=document.getElementById("name").value;
    var dis=document.getElementById("dis").value;
    var pri=document.getElementById("price").value
    if(!n=="" && !dis=="" && !pri==""){
        document.getElementById("name").style.boxShadow="0px 0px 4px 1px green";
        document.getElementById("dis").style.boxShadow="0px 0px 4px 1px green";
        document.getElementById("price").style.boxShadow="0px 0px 4px 1px green";

    }
    else{
        document.getElementById("name").style.boxShadow="0px 0px 4px 1px red";
        document.getElementById("dis").style.boxShadow="0px 0px 4px 1px red";
        document.getElementById("price").style.boxShadow="0px 0px 4px 1px red";

    }
}



const PostData=(e)=>{
    e.preventDefault()
    
    var n=document.getElementById("name").value;
    var dis=document.getElementById("dis").value;
    var pri=document.getElementById("price").value;
    var ty=document.getElementById("ty").value;
   if(n!=="" && dis!=="" && pri!=="" && Da!==""){
 fetch("http://localhost:4000/PostPro",{
    method:'POST',
    crossDomain:true,
    headers:{

       Accept:'application/json',
       "Content-Type": "application/json",
      // "Content-Type": "image/png"
      },
    body:JSON.stringify({pro_link:Da,pro_name:n,pro_dis:dis,pro_pri:pri,pro_type:ty})

})
document.getElementById("apd").style.display="flex";
document.getElementById("name").value="";
document.getElementById("dis").value="";
document.getElementById("price").value="";
document.getElementById("ty").value="";
setDa("")
setDa('')

       }
        else{
        alert("file the input")
    }
}


return(<>
<div id='profile'>
    
    
<br></br>
    <h3>ADD PRODUCT</h3>
    
    <div id='apd'><div><b>Product Added!</b> </div><b onClick={()=>{document.getElementById("apd").style.display="none"}} style={{cursor:"pointer"}} >X</b></div>
    <div id='proimg'>
        <img src={Da} alt='profile' />
     
    
    </div>
    <br></br>
    <input type="file" alt='i' onChange={(e)=>{uploadimg(e)}}/>
    <div id='in'>
    
    <input type="text" placeholder='Product name' id='name' onChange={()=>{InData()}}/>
    <br></br>
    <input type='text' placeholder='Product discription' id='dis' onChange={()=>{InData()}}/>
    <br></br>
    <input type='text'  placeholder='Price' id='price' onChange={()=>{InData()}}/>
<br></br>
    <select id='ty'>
        <option>Electronic</option>
        <option>Smart phone</option>
        <option>food</option>
        <option>Fashion wear</option>
        <option>Toy</option>
        <option>Sport</option>
        <option>other</option>
    </select>
    </div>
    <button onClick={(e)=>{PostData(e)}}>Upload</button>
    
</div>

</>)
}
export default Profile;