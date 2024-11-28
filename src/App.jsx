import { useEffect, useState } from 'react'
import Header from './Header'
import Home from './Home/Home'
import MobileHeader from './MobileHeader'
import Quizes from './Quizes/Quizes'
import Create from './Create/Create'
import { Route, Routes, useFetcher, useLocation } from 'react-router-dom'
function App() {

  const limit = 700

  const [quizes, setQuizes] = useState(['Quiz', 'Quiz 2'])
  const [width, setwidth] = useState(window.innerWidth)
  const [showOptions, setOptions] = useState(false)
  const [checked, setChecked] = useState([])

  function handleMobileOptions(){
    setOptions(prevstate => !prevstate)
  }

  function handleCheckedAnswer(name){
    setChecked(prev => {
      if(prev.includes(name)){
          return prev.filter((item) => item != name)
      }
      else{
        return [...prev, name]
      }
    })
  }



  useEffect(() => {
    function resize(){
      setwidth(window.innerWidth)
    }

    window.addEventListener('resize', resize)

    return () => {window.removeEventListener('resize', resize)}
  }, [])

  const location = useLocation()

  useEffect(() => {
    setOptions(false)
  }, [location])

  return (
    
    <>

    <Routes>

      <Route path='/quiz-project' element={
        <Home width={width} 
        handleMobileOptions={handleMobileOptions}
        showOptions={showOptions}
        limit={limit}
        ></Home>
      }></Route>

      <Route path='/quiz-project/quizes' element={
        <Quizes 
        width={width} 
        handleMobileOptions={handleMobileOptions}
        showOptions={showOptions}
        limit={limit}
        quizes={quizes}
        >
        </Quizes>
      }>

      </Route>

      <Route path='/quiz-project/create' element={<Create 
      
      handleCheckedAnswer={handleCheckedAnswer} 
      
      checked={checked}
      
      />}>


      </Route>


    </Routes>
    </>
  )
}

export default App
