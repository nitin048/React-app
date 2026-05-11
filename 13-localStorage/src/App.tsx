import React from 'react'

const App = () => {
  //** made localstorage */
  // const user = {
  //   username: 'Nitin',
  //   age: 30,
  //   city: 'ranchi',
  // }
  // localStorage.setItem('user', JSON.stringify(user))

const user = JSON.parse(localStorage.getItem('user'))

  console.log(user)
  return <div>App</div>
}

export default App
