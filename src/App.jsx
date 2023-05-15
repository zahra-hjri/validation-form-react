

import { useState } from 'react';

import { Form } from './components/Form/Form';
import './App.css'

function App() {

  return (
    <div className=' h-full w-full bg-gradient-to-r from-green-600 to-blue-400 px-5 pb-20'>
      <h1 className='text-white font-extrabold text-center text-xl sm:text-3xl py-10'>Registration Form
      </h1>
    
     <Form/>

    </div>
  )
}

export default App
