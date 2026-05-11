import React from "react";

const App = () => {
  return (
    <div>
      <div
        className="box"
        onMouseMove={(elem) => {
          console.log("this is x-axis", elem.clientX);
          console.log("this is y-axis", elem.clientY);
        }}
      ></div>
      <div
        onWheel={(elem) => {
          if(elem.deltaY>0){
              console.log("page is scrolling seedha",elem.deltaY);
          }
          else{
            console.log("page is scrolling ulta",elem.deltaY);
          }
          
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
  );
};

export default App;
