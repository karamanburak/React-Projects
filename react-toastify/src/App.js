import './App.css';
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => {
  toast("Sie haben das falsche Passwort eingegeben!")
}


const App = () => {

  return (
    <div className='container'>
    <button onClick={notify}>Click Me</button>
      <ToastContainer />
    </div>
  )
}

export default App
