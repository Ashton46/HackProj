import React from "react";
import './Landing.css';


function Landing() {
   // <div className="BackGround">
     //   <h1 className = "Title">
       //     ZotPlanner</h1>
        //<div className = "Calendar">
          //  hello
        //</div>
    //</div>
  
  return(

    <div className="BackGround">
        <h1 className = "Title">
           ZotPlanner</h1>

    <button className = "Box1" type="button" onClick="window.location.href='/calendar;">
    Box2
  </button>
  <button className = "Box2" type="button" onClick={() =>window.location.href = 'http://localhost:3002/todo'}>
    Box1
  </button>
  <button className = "Box3" type="button" onClick="window.location.href='/calendar;">
    Box 3
  </button>
  </div>
  );
}
  
export default Landing;



