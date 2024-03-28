import { useState, useEffect, useCallback, useRef } from "react"

function App() {
  const [rangeValue, setRangeValue] = useState(8)
  const [password, setPassword] = useState("")
  const [number, setNumber] = useState(false)
  const [symbol, setSymbol] = useState(false)
  const [uppercase, setUppercase] = useState(false)
  const passwordRef = useRef()
  const passwordGenerator = () => {
    let string = 'abcdefghijklmnopqrstuvwxyz'
    let savePassword = ""
    if(uppercase) string+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (number) string += "123456789"
    if (symbol) string += "!@#/$%>(*?_"
    for (let i = 1; i <= rangeValue; i++) {
      const random = Math.floor(Math.random() * string.length)
      savePassword += string.charAt(random)
    }
    setPassword(savePassword)
  }
  useEffect(() => {
    passwordGenerator()
  }, [number, symbol, rangeValue,uppercase])

  return (
    <>
      <h1 className="text-center text-white my-8 text-lg bg-green-800 p-2">PASSWORD GENERATOR</h1>
      <div className="bg-gray-700 w-1/2 mx-auto p-8  rounded-lg mt-40">
        <div className=" flex">
          <input type="text" value={password}  className="w-full h-11 rounded-lg focus:outline-none p-2 text-green-700 text-lg font-semibold" />
        </div>
        <div className="flex gap-2 mt-4">
          <input type="range" className="hover:cursor-pointer" min={0} max={20} value={rangeValue} onChange={(e) => setRangeValue(e.target.value)} /><span className="text-orange-400 text-lg">Length ({rangeValue})</span>
          <input type="checkbox" id="number" onClick={() => setNumber(pre => !pre)} /><label for="number" className="text-orange-400 text-lg hover:cursor-pointer">Number</label>
          <input type="checkbox" id="special" onClick={() => setSymbol(pre => !pre)} /><label for="special" className="text-orange-400 text-lg hover:cursor-pointer">Special symbols</label>
          <input type="checkbox" id="special" onClick={() => setUppercase(pre => !pre)} /><label for="special" className="text-orange-400 text-lg hover:cursor-pointer">Uppercase</label>
        </div>
      </div>
    </>
  )
}
export default App