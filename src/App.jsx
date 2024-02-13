import { useState,useEffect,useCallback,useRef } from "react"

export default function App()
{
  const[rangeValue,setRangeValue]=useState(8)
  const[password,setPassword]=useState("")
  const[number,setNumber]=useState(false)
  const[char,setChar]=useState(false)
  const passwordRef=useRef()
  const passwordGenerator=()=>{
    let string='abcdefghijklmnopqrstuvwxyz'
    let savePassword=""
    if(number) string +="123456789"
    if(char) string +="!@#/$%>(*?_"
    for(let i=1;i<=rangeValue;i++)
    {
      const random=Math.floor(Math.random()*string.length)
      savePassword+=string.charAt(random)
    }
    setPassword(savePassword)
  }
  useEffect(()=>{
    passwordGenerator()
  },[number,char,rangeValue])
  
  const handleCopy=()=>
  {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }
  return(
  <>
  <h1 className="text-center text-white my-8 text-lg bg-green-800 p-2">PASSWORD GENERATOR</h1>
 <div className="bg-gray-700 w-1/2 mx-auto p-8  rounded-lg mt-40">
  <div className=" flex">
    <input type="text" value={password} ref={passwordRef} className="w-full h-11 rounded-lg focus:outline-none p-2 text-green-700 text-lg font-semibold"/>
    <button className="bg-green-700 rounded-sm p-1 text-white w-20 text-lg hover:bg-green-900" onClick={handleCopy}>copy</button>
  </div>
  <div className="flex gap-2 mt-4">
    <input type="range" className="hover:cursor-pointer" min={0} max={20} value={rangeValue} onChange={(e)=>setRangeValue(e.target.value)} /><span className="text-orange-400 text-lg">Length ({rangeValue})</span>
    <input type="checkbox" id="number" onClick={()=>setNumber(pre=>!pre)}/><label for="number" className="text-orange-400 text-lg hover:cursor-pointer">Number</label>
    <input type="checkbox" id="special" onClick={()=>setChar(pre=>!pre)} /><label for="special" className="text-orange-400 text-lg hover:cursor-pointer">Special symbols</label>
  </div>
 </div>
 </>
  )
}