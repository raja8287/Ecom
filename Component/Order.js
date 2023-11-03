import React, { PureComponent, useEffect, useState } from 'react';


const Order=(item)=>{
    const [ord,setOrder]=useState([]);
    const [ch,setYo]=useState([]);
    const [Tp,setTp]=useState([]);
    const [stp,setstp]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:4000/order/${sessionStorage.getItem('userid')}`,{
            method:'GET'
        }).then((result)=>result.json()).then((data)=>setOrder(data))
        Tota2()

    },[])
console.log(ord)
/*const My={};
l()
function l(){
    for(let i=0;i<ord.length;i++){
        console.log("order of ",i+1)
    for(let j=0;j<ord[i].Order.length;j++){
     //   console.log("in",j+1,ord[i].Order[j].UserData[1]);
        My[i][j]=ord[i].Order[j].UserData;
        console.log("hi",My[i][j])
    }
    }

}
*/

/**
 *   var cd=0;
  ord.map((item,index)=>{
    let d=item[index].Totalp;
    cd+=d;
    setTp(cd)
 
  })
 */

function Tota2(){
    var cd=0;
    for(let i=0;i<ord.length;i++){
        let d=ord[i].Totalp
        cd+=d
        setTp(cd)
    
        
    }
  Charges()
 
  }
console.log("to:",Tp);
function Charges(){
    var t=(Tp/100)*1.29;
    setYo(Math.trunc(t))
setstp(Math.trunc(t)+Tp)
}

return(<>
<div id='odr'>
  
{!sessionStorage.getItem("uname")|| <>
   <br></br>
<h3 >Your Order</h3></> }



    
    <hr></hr>
    {!sessionStorage.getItem("uname")=="" ||<h3>NEED TO LOGIN!</h3>}
    {!sessionStorage.getItem("uname") || 
    <>
    <div id='ordercart'>
   {!ord.length==0 || <h3>No order present</h3> }
   
    {ord.map((item,index)=>{

         

        return(<>
     
        <div id='ocd'>
        <b >{index+1}.</b><img src={item.Order[0]}/>
            <b onClick={()=>{Tota2()}}>{item.Order[1]}</b>
            <b>{item.Order[2]}&#x20B9;</b>

           <p> Order date:<br></br><b>{item.Date}</b></p>
           <p> Estimated delivery date:<b>{item.Date}</b></p>

            
        </div>
       
    
        </>)
     })}
   
        
        </div> 
        {ord.length==0 || 

        <div id='shppiment'>
<div id='sdetail'>
    <b>Shipping To:</b>
          
    <h3> {ord[0].UserName}</h3>
    <p>{ord[0].Address},</p>
    <p>{ord[0].CustPhone}</p>

    
</div>
<div id='sp' onClick={()=>{Tota2()}} title='Double click '>
{!ch ||
    <b>
    <br></br>{ch} &#x20B9; <sub style={{fontSize:"7px"}}>delivery Charges+taxes</sub>+{Tp} &#x20B9;</b>}
    <br></br>
    <br></br>
<b>Total price:</b><b><u>{stp} &#x20B9;</u></b>

<br></br>

</div>
</div>}
        </>
        
        
        
        }
        
        
                



</div>

</>)
}
export default Order;

/*  */ 