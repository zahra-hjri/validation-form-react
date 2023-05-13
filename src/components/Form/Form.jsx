
import React ,{ useState } from 'react'

// import {FiLock} from 'react-icons/fi';
import "./Form.css"
import { Validate } from '../../middleware/Validate'

export const Form = () => {

  const [ values , setValuse ] = useState({
    userName:"",
    phoneNumber:"",
    password:"",
    confirmPassword:"",
    emailAddress:"",
    checkRull: false,
  })

  const onChangeHandle = (e)=>{
    setValuse({ ...values , [e.target.name]: e.target.value})
  }

  const onSubmitHandle = (e) =>{
    e.preventDefault();
    Validate(values);
    // console.log(values)
    

  }

  return (
    <div>
        <form onSubmit={onSubmitHandle} className='p-2 rounded-3xl h-full bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 border border-gray-100 w-11/12 sm:w-4/5 lg:w-8/12 xl:w-7/12 mx-auto py-5 sm:py-10 shadow-2xl'>
            <div className='flex flex-col items-center md:grid md:grid-cols-2 md:gap-6 md:mx-auto'>
            
            <input name='userName' value={values.userName} onChange={onChangeHandle} 
            className='p-2 md:p-3 w-60 sm:w-96 md:w-60 lg:w-72 sm:ml-3 mt-4 shadow-xl bg-slate-300 rounded-2xl outline-none placeholder:text-sm' placeholder="Username"/>
           
            <input name='phoneNumber' value={values.phoneNumber} onChange={onChangeHandle} 
            className='p-2 md:p-3 w-60 sm:w-96 md:w-60 lg:w-72 sm:ml-3 mt-4  shadow-xl bg-slate-300 rounded-2xl outline-none placeholder:text-sm' placeholder='Phone number'/>
            
            <input name='password' value={values.password} onChange={onChangeHandle} 
            className='p-2 md:p-3 w-60 sm:w-96 md:w-60 lg:w-72 sm:ml-3 mt-4 shadow-xl bg-slate-300 rounded-2xl outline-none placeholder:text-sm' placeholder='Password'/>
            
            <input name='confirmPassword' value={values.confirmPassword} onChange={onChangeHandle} 
            className='p-2 md:p-3 w-60 sm:w-96 md:w-60 lg:w-72 sm:ml-3 mt-4 shadow-xl bg-slate-300 rounded-2xl outline-none placeholder:text-sm' placeholder='Confirm Password'/>
            
            <input name='emailAddress' value={values.emailAddress} onChange={onChangeHandle} 
            className='p-2 md:p-3 w-60 sm:w-96 md:w-60 lg:w-72 sm:ml-3 mt-4 shadow-xl bg-slate-300 rounded-2xl outline-none placeholder:text-sm' placeholder='Email Address'/>
            
            <input onChange={onChangeHandle} 
            className='p-2 md:p-3 w-60 sm:w-96 md:w-60 lg:w-72 sm:ml-3 mt-4 shadow-xl bg-slate-300 rounded-2xl outline-none placeholder:text-sm' placeholder='Femail'/>

           
            </div>
            <div className="flex items-center ml-5 mt-8">
              <input name='checkRull' checked={values.checkRull} onChange={onChangeHandle} type="checkbox" 
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <label 
              className="ml-2 text-sm font-medium text-gray-800">I accept the rules</label>
            </div>
            <button type='submit' className='font-bold rounded-full w-60 bg-gradient-to-r from-blue-500 to-green-500 text-white text-center p-3 md:w-6/12 mx-auto block my-12 shadow-xl' >Login</button>
        </form>
    </div>
  )
}
