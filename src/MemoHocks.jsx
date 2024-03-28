import { useEffect, useMemo, useState } from "react"

function MemoHocks()
{
    const [add,setAdd]=useState(0)
    const [sub,setSub]=useState(50)
    const mul=useMemo(()=>{
    
        console.log('hello react')
        return add*10
    },[add])
    
    return(
    <>
    <br/><br/>
    <h2>{add}</h2>
    <button onClick={()=>setAdd(add+1)}>add</button>
    <h2>{sub}</h2>
    <button onClick={()=>setSub(sub-1)}>sub</button>
    </>
    )
}
export default MemoHocks