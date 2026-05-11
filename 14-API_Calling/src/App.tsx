const App = () => {
  const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json()

    console.log(data)
  }

  return (
    <div>
      <button onClick={getData}>fetch data</button>
    </div>
  )
}

export default App
