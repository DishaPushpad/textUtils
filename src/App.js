// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Alert from "./components/Alert";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import {
//   BrowserRouter,
// Routes,
//   Route
  
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);



  const showAlert=(message,type)=>{
setAlert({
  msg:message,
  type:type
})
setTimeout(() => {
  setAlert(null)
}, 3000);
  }



  //whether dark mode is enable or not

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
      showAlert("dark mode enabled","success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode enabled","success")
    }
  };

//   const [nmode, setnmode] = useState("light");
// const blueMode=()=>{
// if(nmode==="light"){
// setnmode("blue")
// document.body.style.backgroundColor="#9cb3fb"
// // setInterval(()=>{
// //   document.title='textUtils'
// // },2000);
// // setInterval(()=>{
// //   document.title='install'
// // },1500)

// }else{setnmode("light")
// document.body.style.backgroundColor="white"}
// }

  return (
    <>


    {/* <BrowserRouter> */}
       <Navbar title="welcome" mode={mode} toggleMode={toggleMode} /> 

  <Alert alert={alert} />
      <div className="container my-3">
      {/* <Routes> */}
          {/* <Route exact path="/about" element={<About/>}/> */}
          
          {/* <Route exact path="/" */}
          {/* element={  */}
          <TextForm showAlert={showAlert} heading="enter text"  mode={mode}/>
          {/* <About/> */}
          {/* }>  */}
          {/* </Route> */}
        {/* </Routes> */}

        {/* <div className="container my-4" />  */}
      {/* <About mode={mode}  toggleMode={toggleMode} />  */}
      {/* </BrowserRouter> */}
      </div>
    </>
  );
}

export default App;
