import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h4>{count}</h4>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button style={{marginLeft:"10px"}} onClick={()=>count>0 ?setCount(count-1):0 }> Decrement</button>
        </div>
    )
}

export default Counter