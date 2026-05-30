import { useState } from 'react'
import './App.css'


function App() {
  const [showWarning,setShowWarning]=useState();
  const[showmode,setshowmode]=useState();
  function activateHandler(){
    setShowWarning(true);
  }
  function confirmHandler(){
    setShowWarning(false);
    setshowmode(true);
  }
  function cancelHandler(){
    setShowWarning(false);
    setshowmode(false);
  }
  return (
    <>
     {!showWarning && !showmode &&(
        <button onClick={activateHandler} id="activate" >Activate</button>
      )}
      {showWarning && (
         <div id="box-warning">
                    <h1>Warning!</h1>
                    <p>Are you sure want to activate this mode?</p>
                    <div id="buttons">
                        <button onClick={confirmHandler} id="green" >Confirm</button>
                        <button onClick={cancelHandler} id="red" >Cancel</button>
                    </div>
                  </div>
      )}
      
      {showmode && (<h1 id="mode">Mode Activated!</h1>)
      }
      
      

    </>
  )

}
export default App
