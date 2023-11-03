import React, { useState } from 'react';
import './A.css'
function A() {
    const[simg,setimg]=useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4xsioe8bUJFtasGACNpnyRu0C-V4tgfuz3w&usqp=CAU");


 

    function t(){
        var c=document.getElementById('fires').style;
        c.translate="0%"
        var v=document.getElementById('fire').style;
        v.translate="0%"
        var r=document.getElementById("firess").style;
        r.translate="0%"   
    }
    function tt(){
        var c=document.getElementById('fires').style;
        c.translate="-110%"
        var v=document.getElementById('fire').style;
        v.translate="-110%"
        var r=document.getElementById("firess").style;
        r.translate="-110%"

    }

    function ttt(){
        var c=document.getElementById("firess").style;
        c.translate="-220%"
        var v=document.getElementById("fires").style;
        v.translate="-220%"
        var r=document.getElementById("fire").style;
        r.translate="-220%"
    }

    const [ims,setims]=useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSahnoIkV0z9W1Kke4C4ZpTxob3ibga57NNXw&usqp=CAU")
    function clr(){
        setims('data:image/jpeg;base64,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')
    }
    function ccl(){
        setims('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsmKz33iwGnwhZ7YlZJcJsJR-RCjirrGVgFQ&usqp=CAU')
    }



  return (
    <div className='mulad'>

        <div className='firstAdv' id='fire'> 

            <div id='firef'>
                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAYFBMVEX////wsxzvrwDvrQDwshP//vv88d3ywFb99efwsQr++vP32J3vqwD88+H7683zxGX0ynP1zYH879f437Dzw1/xukD42qTxtzH10IfyvEnupwDxtzf20o/21Zf65b31zHqwta53AAADb0lEQVRoge1Wy4KrIAwtD7UoouJ7bPX///Imtiqg7dzlLHJ24iEnhCTkdiMQCAQCgUAgEAgEAoFAIBAIBAKB8DcRPcqyuAeLqe2qcnmacD0gZJ8Jd5NVZdWZ9Kt2wpWOfcOPVggOEKywl4aHaf3PRb/kV4R86V8GRF99dA+1JROedi25ZG8ovUSnLRk/CFwMZ5sPzdlO4Nln7VGLH1e70rBDgstiVeAsPFkifMIUxDVtfYJozu6/YY1xb6XEjWJ6zGbuGqHASCA+wpmkbp9AyBINxlXviaf9SkgyIDxHJPDxo7iHJ2xUbH6T8wI8Ua27dYAV3prN8QT4vHEtFLgybnliJvws/0c6B8vSDeITpR7Ht8Hv5iBEC9gW9UGoUctJkgi9E+b2OxYFMfYys4Swq0OrAMLoxbiBlfZY6SVTifs/aiWT3srxa2iKZFOLIM947f+X7lKOh/Dr7i7cc81I8MvKwJK+LEWIidzrexZwhiAxMu643QGh8f/fKgVB3j4GzlR4uxAZ/rzWdur7wRkP69VC0IVrpgsIkAJy3D4myXh4ubVgarldwNOG6xZzQLhLrX+2WCA5NJ1qSM+NgPUVBwQLhMsa/6JtyjWFrLXG0dZhm121t2TD7hDebQyBSX7VrtyQWiaKcAeSw8DkbpJgVYTOGXCuuJD2tSGvVLHvgKsL3S25V+0rauEkI1gLCmXtV6r6VdtiL39XSNpil2h9NhQC6wN/UG73p4OqCPZggYvQn7P2Dd+Gav+D/dVvJHds9n6iz9gTdgMxOuzfSof1fdnRfW3k7TGLmrU1e51iwCU302N8aZ3bhCpk3N1ipHOeb9rYEg/xtDiJ48ElOw5mJ+V3Ors+fcfCzNDi9fgSaBuFUS3sK0bRWRxDLHkZr4R7hS+0fwkZPke8uiMhipf1Sb687fPcUgt8kjUrXgYx7Kp3xZ96nWemsirHdT4RQc8akMB1u1TlpNejXDbUC224n3Xg4e87xJNL4baLGicKJpVSOJVIfbLcaekQ1KdTX81r6aIhknv+QNS4/wTmhX4PbFLp5GKajBOt3gSuT0Owox3Oa2h8GKXen6tKn5qSrUYJ45hqlw9DgSlb/iJcDrq7kzCvnaovyu3hz1XM0hzafP5l+k7z2MbfCAQCgUAgEAgEAoFAIBAIBAKBQCAQ/gj+AbMsJI/cR0eNAAAAAElFTkSuQmCC'/>
                <h3><sub>NEO 7 PRO</sub> <small> 5G</small></h3>
                <br></br>
                <div>
                    <p>131 Watt </p>
                <hr></hr>
                    <p>144hz screen</p><hr></hr>
                    <p>8+gen 1 SnapDragon </p><hr></hr>
                    <p>5G</p>
                </div>
            </div>


          


            <div id='firetw'>

                <img src={ims}/>
                <div>
                  
                    <button>8GB+128GB</button>
            <button>16GB+256GB</button>
                </div>
            </div>

            <div id='fireth'>

            <button className='not'>NOTIFY ME</button>
            
            <p>Effective Price</p>
            <h2>31,999&#x20B9;</h2>

                <span className='sptt' onClick={()=>{clr()}} title='Fearless flame'></span>
                <span className='sppt' onClick={()=>{ccl()}} title='DarkStrome'></span>
            </div>
        </div>



        <div className='firstAdv' id='fires'> 
        <div id='fireso'>
            <h2>RELEASING ON 15th</h2>
        </div>
        <div id='firest'>
            <p>ALL NEW </p>
            <h2>IPHONE 15</h2>
            <img src={simg}/>
        </div>
        <div id='firesth'>
        <button>NOTIFY ME</button>
        </div>
            
        </div>




        <div className='firstAdv' id='firess'> 

        <div id='firesso'>
            <div>
                <p>A little more than you'd expect</p>
                <h2>OnePlus 11<sup> 5G</sup></h2>
                
            </div>
            
            <div>
               
                <button>Buy Now</button>
                <button>Learn More</button>

            </div>
            </div>

            <div id='firesst'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJschE-AkTVI8g6T9XhAIuQOOY5cT26MuzCQ&usqp=CAU'/>
            
            </div>


            <div id='firessth'>
                <h3>64,999&#8377; </h3>
                <div>
            <button>16 GB +256 GB</button>
                <button>8 GB +128 GB</button></div>
            </div>

        </div>
     

        
        <span className='spnst' id='spo' onClick={()=>{t()}}></span>
        <span className='spnst' id='sptwo' onClick={()=>{tt()}}></span>
        <span className='spnst' id='spt' onClick={()=>{ttt()}}></span>


    </div>



  )
}

export default A