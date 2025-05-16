import axios from 'axios'
import './App.css'
import { useEffect, useState } from 'react'

function App() {

  const [setup,setSetup] = useState("")
  const [punchline,setPunchline] = useState("")

  const fetchingJokes = async () => {
    const response = await axios.get("https://official-joke-api.appspot.com/random_joke")
    const setup = response.data.setup
    const punchline = response.data.punchline
    setSetup(setup)
    setPunchline(punchline)

  }

  useEffect(()=>{
    fetchingJokes()
  },[])

  return (
    <>
      <div className='main flex flex-col w-[100vw] h-[100vh] bg-gradient-to-b from-gray-700 to-blue-400 items-center gap-[5rem] sm:gap-0'>
        <h1 className='text-[3rem] mt-10 text-white font-extrabold'>Random Jokes</h1>
        <div className='w-[99%] h-[35%] rounded-[12px] flex flex-col items-center gap-[1rem] justify-center bg-gradient-to-b from-gray-800 to-gray-600 mt-[5rem] sm:w-[85%] sm:h-[45%]'>
          <p className='text-[18px] text-white sm:text-[38px]'>{setup}</p>
          <p className='text-[18px] text-white sm:text-[38px]'>{punchline}</p>
        </div>
        <button onClick={fetchingJokes} className='p-[15px] rounded-[26px] font-medium  text-[16px] bg-amber-300 mt-10 sm:text-[20px] sm:p-[20px]'>Fetch me a joke</button>
      </div>
    </>
  )
}

export default App
