import React, {Fragment, useEffect, useState} from 'react'

const UseEffec=()=>{
    const[number,setNumber]=useState(0)
    const[dark,setDark]=useState(false)
    const[test,setTest]=useState(0)


    const themeStyles={
        backgroundColor:dark?'black':'white',
        color:dark?'white':'black'
    }
    //mimicing usememo by using useEffect
    useEffect(()=>{
         setTest(heavyproc(number))
    },[number])


    return(
        <Fragment>
        <input type="number" value={number} onChange={e=>setNumber(parseInt
            (e.target.value))}/>
            <button
                onClick={()=>setDark(prevDark=>!prevDark)}>
                Change theme
            </button>
            <div style={themeStyles}>{test}</div>

        </Fragment>
    )
}
const heavyproc=(num)=>{
    for(let i =0;i<=1000000000;i++){}
    return num*2
}
export default UseEffec
