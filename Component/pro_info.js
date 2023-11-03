import React, { useState } from 'react';

import style from "./pro_info.css"

function Pro_info() {
    const [pvi,setPvi]=useState([])

    return (
    <div className='ProInfo'>
        
        <h1>{sessionStorage.getItem("vp name")}</h1>
        <div>
            <img src={sessionStorage.getItem("vp img")}/>
        <h3>{sessionStorage.getItem("vp dis")}</h3>
        <b>{sessionStorage.getItem("vp price")} &#x20B9;</b>
        </div>
        <button >BUY NOW</button>
    </div>
  )
}

export default Pro_info;