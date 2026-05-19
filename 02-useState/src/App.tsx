import { useState } from 'react'

const App = () => {
  const [a, setA] = useState(10)

  const [charA, setCharA] = useState('Nitin')

  const [arr, setArr] = useState([1, 2, 4, 4, 5, 6, 7, 8])

  const [num, setNum] = useState(0)
  return (
    <div>
      <h1>valuse of {a}</h1>
      <button
        onClick={() => {
          setA(90)
        }}
      >
        click
      </button>

      <div>
        <h1>My Name is {charA}</h1>
        <button
          onClick={() => {
            setCharA('Akshata')
          }}
        >
          Click
        </button>
      </div>

      <div>
        <h1>this is new array{arr}</h1>
        <button
          onClick={() => {
            setArr([33, 33, 445, 66, 77, 2])
          }}
        >
          click
        </button>
      </div>

      <div>
        <h1>{num}</h1>
        <button
          onClick={() => {
            setNum(num + 1)
          }}
        >
          increase
        </button>
        <br />
        <button
          onClick={() => {
            if (num != 0) {
              setNum(num - 1)
            }
          }}
        >
          descease
        </button>
        <br />

        <button
          onClick={() => {
            setNum(num + 5)
          }}
        >
          Inc by 5
        </button>
      </div>
    </div>
  )
}

export default App
