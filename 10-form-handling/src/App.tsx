import React from 'react'

const App = () => {


  return (
    <div>
      <form onSubmit={(x)=>{
        console.log("form submited")
        x.preventDefault();
      }}>
        <input className='inp' type="text" placeholder='enter your value'/>
        <button className='btn'>Click</button>
      </form>
    </div>
  )
}

export default App