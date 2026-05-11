import { useEffect, useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(100)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(
    function () {
      {
        console.log('use effect typing.....')
      }
    },
    [num]
  )

  return (
    <div>
      <h1>Learning useEffect</h1>
      <h1>NuM:{num}</h1>
      <h2>NuM2:{num2}</h2>
      <button
        onMouseEnter={() => {
          setNum(num + 1)
        }}
        onMouseLeave={() => {
          setNum2(num2 + 10)
        }}
      >
        Hover
      </button>
    </div>
  )
}
export default App
