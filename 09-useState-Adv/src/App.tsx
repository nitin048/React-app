import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState([1, 12, 33, 4, 4, 5, 6])

  const [emp, setEmp] = useState({ user: 'nitin', age: '30' })

  const [batchnum, setBNum] = useState(0)
  return (
    <div>
      <h1>{num}</h1>
      <button
        onClick={() => {
          const newNum = [...num]
          newNum.push(99)
          setNum(newNum)
        }}
      >
        Click
      </button>

      <div>
        <h1>Employee of the year {emp.user}</h1>
        <h2>Employee age is {emp.age}</h2>

        <button
          onClick={() => {
            const newEmp = { ...emp }
            newEmp.user = 'akshata'
            newEmp.age = '29'
            setEmp(newEmp)
          }}
        >
          {' '}
          click
        </button>
      </div>

      <div>
        <h1> thia is batch update in react {batchnum}</h1>
        <button
          onClick={() => {
            setBNum((x) => x + 1)
            setBNum((x) => x + 1)
            setBNum((x) => x + 1)
          }}
        >
          batch by 3
        </button>
      </div>
    </div>
  )
}

export default App
