import Navbar from './Components/Navbar';

import './App.css';
import TextForm from './Components/TextForm';
import { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  
} from "react-router-dom";
function App() {

  const [mode , setMode] = useState('light') ;
  const [alert , setAlert ] = useState(null) ;
  
  const showAlert = (message , type ) =>{
    setAlert({
      msg : message ,
      type : type 
    })
    setTimeout(()=>{
     setAlert(null) ;
    } , 3000 )
  }
  const toggleMode =()=>{
  if(mode==='light'){ setMode('dark')
  document.body.style.backgroundColor = 'black' ; 
  showAlert( `Dark Mode has been Enabled ! ` , 'success') ;
  document.title = "TextUtils - Dark Mode !" ;
}
  else{ setMode('light')
  document.body.style.backgroundColor = 'white' ;
  showAlert( `White Mode has been Enabled ! ` , 'success') ;
  document.title = "TextUtils - White Mode !" ;
}

 } ;
  return (
   <>
   <Router>
   <Navbar title = "BagTextUtils" mode = {mode} toggleMode = {toggleMode} />
   <Alert alert = {alert}/>
   <div className='container my-3'>

    <Routes>
     
     
      <Route exact path="/" element={<TextForm heading="Enter the text to analyse !"  mode = {mode} showAlert={showAlert} />}>
      
      </Route>
    </Routes>
   
   </div>
   </Router>
   </> 
  );
};

export default App;
