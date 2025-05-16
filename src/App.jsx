import axios from 'axios'
import './App.css'
import { useState } from 'react'

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


  return (
    <>
      <div className='flex flex-col w-[100vw] h-[100vh] bg-gradient-to-b from-gray-700 to-blue-400 items-center'>
        <h1 className='text-[3rem] mt-10 text-white font-extrabold'>Random Jokes</h1>
        <div className='w-[65%] h-[45%] rounded-[12px] flex flex-col items-center gap-[1rem] justify-center bg-gradient-to-b from-gray-800 to-gray-600 mt-[5rem]'>
          <p className='text-[42px] text-white'>{setup}</p>
          <p className='text-[42px] text-white'>{punchline}</p>
        </div>
        <button onClick={fetchingJokes} className='p-[18px] rounded-[26px] font-medium  text-[20px] bg-amber-300 mt-10'>Fetch me a joke</button>
      </div>
    </>
  )
}

export default App
