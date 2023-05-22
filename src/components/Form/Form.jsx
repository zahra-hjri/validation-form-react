
import React ,{ useState } from 'react'

// import {FiLock} from 'react-icons/fi';
import "./Form.css"
import { Validate } from '../../middleware/Validate'

export const Form = () => {

  const [ values , setValuse ] = useState({
    userName:"",
    phoneNumber:"",
    mobileNumber:"",
    password:"",
    confirmPassword:"",
    emailAddress:"",
    checkRull: false,
  })

  const [error , setError] = useState({})
  const [generatePassword,setGeneratePassword] = useState("")
  const [success , setSuccess] = useState(false)

  
  const onChangeHandle = (e)=>{

    if(e.target.name === "checkRull"){
      setValuse({ ...values , [e.target.name]: e.target.checked})
      return;
    }

    setValuse({ ...values , [e.target.name]: e.target.value})
    console.log(e.target)
  }

  const onSubmitHandle = (e) =>{
    e.preventDefault();
    const err = Validate(values);
    setError(err)

    console.log(Object.keys(err).length)
    setSuccess(Object.keys(err).length === 0 && true)
  }
  function handleGeneratePassword() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    let password = '';
  
    while (!/(?=.*[A-Za-z])(?=.*\d).{6,}/.test(password)) {
      password = '';
      for (let i = 0; i < 6; i++) {
        const charSet = i % 2 === 0 ? alphabet : numbers;
        const randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
      }
    }
  
    return setGeneratePassword(password);
  }
  return (
    <div>

        <form onSubmit={onSubmitHandle} className='p-2 rounded-3xl h-full bg-gray-200 bg-opacity-5 border border-gray-100 w-11/12 sm:w-4/5 lg:w-7/12 xl:w-6/12 mx-auto py-5 sm:py-10 shadow-xl'>
            {/* <p className=' text-red-500 font-medium block ml-6'>{error.empty}</p>
              <p className=' text-red-500 font-medium ml-6'>{error.username}</p>
              <p className=' text-red-500 font-medium ml-6'>{error.confirmpassword}</p>
              <p className=' text-red-500 font-medium ml-6'>{error.checkrull}</p>
              <p className=' text-red-500 font-medium ml-6'>{error.hardpassword}</p>
              <p className=' text-red-500 font-medium ml-6'>{error.email}</p>
              <p className=' text-red-500 font-medium ml-6'>{error.mobile}</p>
              <p className=' text-red-500 font-medium ml-6'>{error.phone}</p> */}

              {Object.values(error).map((error) =>(
                <p key={error} className='text-rose-700 font-medium ml-6'>{error}</p>
              ))}
              {
                 success && <p className='font-bold rounded-xl w-64 pb-4 text-green-500 mx-auto text-center'>Registration was successful</p>
              }
            <div className='flex flex-col items-center md:grid md:grid-cols-2 md:gap-6 md:mx-auto'>
            
            <input name='userName' value={values.userName} onChange={onChangeHandle} 
            className='p-2 md:p-3 w-60 sm:w-96 md:w-60 lg:w-64 sm:ml-3 mt-4 shadow-xl bg-slate-300 rounded-2xl outline-none placeholder:text-sm' placeholder="Username"/>
           
            <input name='phoneNumber' value={values.phoneNumber} onChange={onChangeHandle} 
            className='p-2 md:p-3 w-60 sm:w-96 md:w-60 lg:w-64 sm:ml-3 mt-4  shadow-xl bg-slate-300 rounded-2xl outline-none placeholder:text-sm' placeholder='Phone number'/>
            
            <input name='password' value={values.password} onChange={onChangeHandle} 
            className='p-2 md:p-3 w-60 sm:w-96 md:w-60 lg:w-64 sm:ml-3 mt-4 shadow-xl bg-slate-300 rounded-2xl outline-none placeholder:text-sm' placeholder='Password'/>
            
            <input name='confirmPassword' value={values.confirmPassword} onChange={onChangeHandle} 
            className='p-2 md:p-3 w-60 sm:w-96 md:w-60 lg:w-64 sm:ml-3 mt-4 shadow-xl bg-slate-300 rounded-2xl outline-none placeholder:text-sm' placeholder='Confirm Password'/>
            
            
            <input name='emailAddress' value={values.emailAddress} onChange={onChangeHandle} 
            className='p-2 md:p-3 w-60 sm:w-96 md:w-60 lg:w-64 sm:ml-3 mt-4 shadow-xl bg-slate-300 rounded-2xl outline-none placeholder:text-sm' placeholder='Email Address'/>
            
            <input name='mobileNumber' value={values.mobileNumber} onChange={onChangeHandle} 
            className='p-2 md:p-3 w-60 sm:w-96 md:w-60 lg:w-64 sm:ml-3 mt-4 shadow-xl bg-slate-300 rounded-2xl outline-none placeholder:text-sm' placeholder='+98 **********'/>
            <button onClick={handleGeneratePassword} type='button' className='p-2 md:p-3 w-60 sm:w-96 md:w-60 lg:w-64 rounded-full  sm:ml-3 mt-4 bg-rose-500 text-white font-medium hover:bg-green-700'>Generate hard password</button>
            <p className='text-green-800 font-extrabold p-2 md:p-3 w-60 sm:w-96 md:w-60 lg:w-64 sm:ml-3 mt-4 '>{generatePassword}</p>
           
            </div>
            <div className="flex items-center ml-5 mt-8">
              <input name='checkRull' checked={values.checkRull} onChange={onChangeHandle} type="checkbox" 
              className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <label 
              className="ml-2 text-sm font-medium text-gray-800">I accept the rules</label>
            </div>
            <button type='submit' className='font-bold rounded-full w-64 bg-gradient-to-r from-green-700 to-rose-500 text-white text-center p-3 md:w-6/12 mx-auto block my-12 shadow-xl' >Login</button>
        
        
        </form>
    </div>
  )
}
