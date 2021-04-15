import React, {useState, useEffect} from 'react'

const Counter=()=>{
    const [val, setVal]=useState(90)
    useEffect(() => {
        if(val>0){
            setTimeout(() => {
                setVal(val-1)
            },1000)
        }
    })

    return(
        <div>
            {val}
        </div>)
    
}
export default Counter