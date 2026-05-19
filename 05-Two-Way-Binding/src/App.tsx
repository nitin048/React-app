import { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')

  return (
    <div>
      <form
        onSubmit={(x) => {
          x.preventDefault()
        }}
      >
        <input
          className="inp"
          value={title}
          type="text"
          placeholder="enter your value"
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <button className="btn">Click</button>
      </form>
    </div>
  )
}

export default App
