import { useEffect, useState } from "react"
import Background  from "./Components/Background/background"
import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"



export const App = () => {
  let heroData=[
    {text1:'Dive intro', text2:'what you love '},
    {text1:'Indulge', text2:'Your passions '},
    {
    text1:'Give in to', text2:' passions'}
  ]
  const [heroCount,setheroCount]=useState(2)
  const[playstaus,setplayStatus]=useState(false)
  useEffect(()=>{
    setInterval(()=>{
      setheroCount((count)=>{return count===2?0:count+1})
    },3000)
  },[])
  return (
    <div>
      <Background playStatus={playstaus} heroCount={heroCount}></Background>
      <Navbar/>
      <Hero
        setplayStatus={setplayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        playStatus={playstaus}
        setheroCount={setheroCount}
      />
    
    </div>
  )
}
export default App
