const App = () => {
  return (
    <div>
      <div
        className="box"
        onMouseMove={(elem) => {
          // Track mouse position
        }}
      ></div>
      <div
        onWheel={(elem) => {
          // Track scroll direction
        }}
      >
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>
        <div className="page4"></div>
        <div className="page5"></div>
      </div>

      <div>
        <button>Click</button>
      </div>
    </div>
  )
}

export default App
