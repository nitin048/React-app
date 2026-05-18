const App = () => {
  return (
    <div>
      <form
        onSubmit={(x) => {
          x.preventDefault()
        }}
      >
        <input className="inp" type="text" placeholder="enter your value" />
        <button className="btn">Click</button>
      </form>
    </div>
  )
}

export default App
