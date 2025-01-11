import { useEffect, useState } from 'react'
import Home from './Home/Home'
import Quizes from './Quizes/Quizes'
import Create from './Create/Create'
import MainGame from './Game/MainGame'
import Missing from './Missing'
import EditQuiz from './Create/EditQuiz'
import Error from './Error'
import Swal from 'sweetalert2';
import Login from './User/Login'
import Register from './User/Register'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { createContext } from 'react'
import LayoutWithHeader from './LayoutWithHeader'
import PublicQuizes from './Quizes/PublicQuizes'
export const loggedInContext = createContext({Status: false, Username: ''});

function App() {

  const Navigate = useNavigate()

  const limit = 1000

  const [width, setwidth] = useState(window.innerWidth)
  const [showOptions, setOptions] = useState(false)
  const [quizes, setQuizes] = useState([])
  const [searchResults, setSearchResults] = useState('')
  const [publicSearchResults, setPublicSearchResults] = useState('')
  const [errorMessage, seterrorMessage] = useState('')
  const [grabbedData, setGrabbedData] = useState(false)
  const [hasQuizes, setHasQuizes] = useState(true)
  const [publicQuizes, setPublicQuizes] = useState([])
  const host = 'http://localhost:3500'
  
  // USER
  const previousLoggedIn = localStorage.getItem('loggedin')
  const [loggedIn, setLoggedIn] = useState(!previousLoggedIn ? {Status: false, Username: ''}: JSON.parse(previousLoggedIn))

  useEffect(() => {
    localStorage.setItem('Quizes', JSON.stringify(quizes))
  }, [quizes])

  useEffect(()=>{
    if(!grabbedData && loggedIn.Status){
      async function grabUsersQuiz(){
        const response = await fetch(`${host}/grabUserQuizes`, {
          method: 'GET',
          credentials: 'include'
        })
        const data = await response.json()
        if(data.length > 0){
          setQuizes(data)
        }
        else{
          setHasQuizes(false)
        }
      }
      async function grabPublicQuizes(){
        const response = await fetch(`${host}/grabPublicQuizes`, {
          method: 'GET',
          credentials: 'include'
        })
        const data = await response.json()
        if(data.length > 0){
          setPublicQuizes(data)
        }
      }
      grabUsersQuiz()
      grabPublicQuizes()

      setGrabbedData(true)
    }
  }, [])

  // QUESTION STATES

  const [questions, setQuestions] = useState([])
  const [quizName, setQuizName] = useState('')
  const [questionTitle, setQuestionTitle] = useState('')
  const [checked, setChecked] = useState([])
  const [Answer1, setAnswer1] = useState('')
  const [Answer2, setAnswer2] = useState('')
  const [Answer3, setAnswer3] = useState('')
  const [Answer4, setAnswer4] = useState('')
  const [EditingMode, setEditingMode] = useState(false)
  const [EditedQuestionId, setEditedQuestionId] = useState('')
  const [Public, setPublic] = useState(false)

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

  function ResetQuestionFormat(){
    setQuestionTitle('')
    setAnswer1('')
    setAnswer2('')
    setAnswer3('')
    setAnswer4('')
    setChecked([])
  }
  

  function handleQuizName(e){
    setQuizName(e.target.value)
  }

  function handleLogin(username, password){

    async function loginUser(){
      const response = await fetch(`${host}/auth`, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify({"user": username, "pass": password})
      })
      const data = await response.json()

      if(response.status == 201){
         localStorage.setItem('loggedin', JSON.stringify({'Status': true, 'Username': username}))
         setLoggedIn({Status: true, Username: username})
         
         async function grabUsersQuiz(){
          const response = await fetch(`${host}/grabUserQuizes`, {
            method: 'GET',
            credentials: 'include'
          })
          const data = await response.json()
          if(data.length > 0){
            setQuizes(data)
          }
          else{
            setHasQuizes(false)
          }
        }
        grabUsersQuiz()
        Navigate('/quiz-project/')
        
      }
      else{
        if(data.message){
          seterrorMessage(data.message)
        }
      }
      
    }
    loginUser()
    }

  function handleRegister(username, password){
    async function registerUser(){
      const response = await fetch(`${host}/register`, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({"user": username, "pass": password})
      })
      const data = await response.json()
      console.log(data)

      if(response.status == 201){
        Navigate('/quiz-project/login')
      }
      else{
        if(data.message){
          seterrorMessage(data.message)
        }
      }
      
    }
    registerUser()
  }

  function handleLogOut(){
    async function logoutUser(){
      const response = await fetch(`${host}/logout`, {
        method: "GET",
        credentials: 'include',
      })
      if(response.ok){
        localStorage.removeItem('loggedin')
        setLoggedIn({Status: false, Username: ''})
      }
    }
    logoutUser()
    setQuizes([])
  }

  function handleNewQuiz(){
    if(questions.length > 0 && quizName.trim() != ''){

    async function newQuizTest(){
      const response = await fetch(`${host}/newQuiz`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify({quizName: quizName, objects: questions})})
      const data = await response.json()
      setQuizes(data)
    }

    newQuizTest()

    if(Public){
      async function newPublicQuizTest(){
        const response = await fetch(`${host}/newPublic`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          credentials: 'include',
          body: JSON.stringify({quizName: quizName, objects: questions})})
        const data = await response.json()
        console.log(data)
        setPublicQuizes(data)
    }
    newPublicQuizTest()
  
  }

    Navigate('/quiz-project/quizes')



}
  }


  function handleQuestionTitle(e){
    setQuestionTitle(e.target.value)

  }

  function handleAnswerChange(e, answer){
    if(answer == 'Answer1'){
      setAnswer1(e.target.value)
    }
    else if(answer == 'Answer2'){
      setAnswer2(e.target.value)
    }
    else if(answer == 'Answer3'){
      setAnswer3(e.target.value)
    }
    else{
      setAnswer4(e.target.value)
    }
  }

  function handleNewQuestion(){
    if(questionTitle.trim() != '' && Answer1.trim() != '' && Answer2.trim() != '' && Answer3.trim() != '' && Answer4.trim() != '' && checked.length > 0){
      setQuestions(s => [...s,{
        'title': questionTitle, 
        'answers':[Answer1, Answer2, Answer3, Answer4], 
        'correct':checked}])
        ResetQuestionFormat()


    }
  }

  function DeleteQuiz(quiz){
    const Quiz = quizes.find(q => q._id == quiz._id)
     Swal.fire({
            title: `Are you sure you want to delete "${Quiz.quizName.trim()}"?`,
            showCancelButton: true,
            confirmButtonText: "Delete",
            customClass: {
              title: "styleTitle",
              confirmButton: "deleteTitle",
              popup: "styleBackground"
            },
          }).then((result) => {
            if (result.isConfirmed) {
              const FilteredQuizes = quizes.filter(q => q._id != quiz._id)
              setQuizes(FilteredQuizes)
              
            }
          });
  }

  function showQuestion(question){
    setEditingMode(true)
    setQuestionTitle(question.title)
    setAnswer1(question.answers[0])
    setAnswer2(question.answers[1])
    setAnswer3(question.answers[2])
    setAnswer4(question.answers[3])
    setChecked(question.correct)
    setEditedQuestionId(question._id)
  }

  function handleDeleteQuestion(id){
    
    id = EditedQuestionId

    const TemporaryArray = questions.filter((question) => question._id != id)

    setQuestions(TemporaryArray)

    setEditingMode(false)

    ResetQuestionFormat()

  }

  function handleEnterEditQuiz(id){

    const Quiz = quizes.find((q) => q._id == id)

    if(Quiz){
                Navigate(`/quiz-project/edit/${id}`)
                handleEditQuizItems(Quiz)
                
            }
            
  }

  function handleEditQuiz(quiz){

    const id = quiz._id
    
    if(questions.length > 0 && quizName.trim() != ''){

    setEditingMode(false)
    ResetQuestionFormat()
    Navigate('/quiz-project/quizes')
    
  }

  }

  function handleEditQuestion(id){

    id = EditedQuestionId

    const question = questions.find((question) => question._id == id)
    
    const edited_info = {'id': id,
      'title': questionTitle, 
      'answers':[Answer1, Answer2, Answer3, Answer4], 
      'correct':checked}

    if(questionTitle.trim() != '' && Answer1.trim() != '' && Answer2.trim() != '' && Answer3.trim() != '' && Answer4.trim() != '' && checked.length > 0){

    setQuestions(questions.map(q => q._id == question._id ? {...edited_info} : q))
    setEditingMode(false)
    
    ResetQuestionFormat()
  
  }
    
  }

  useEffect(() => {
    function resize(){
      setwidth(window.innerWidth)
      setOptions(false)
    }

    window.addEventListener('resize', resize)

    return () => {window.removeEventListener('resize', resize)}
  }, [])

  const location = useLocation()

  // RESET AFTER CHANGE

  useEffect(() => {
    if(!location.pathname.includes('edit')){
      setOptions(false)
      setQuestionTitle('')
      setAnswer1('')
      setAnswer2('')
      setAnswer3('')
      setAnswer4('')
      setChecked([])
      setQuizName('')
      setQuestions([])
      setEditingMode(false)
      setEditedQuestionId('')
      setSearchResults('')
      setPublic(false)
      seterrorMessage('')
      setPublicSearchResults('')
    }
  
  }, [location])

  function handleEditQuizItems(quiz){
    setQuizName(quiz.quizName)
    setQuestions(quiz.objects)
  }

  const filteredQuizes = searchResults.trim() != '' ? quizes.filter((quiz) => quiz.quizName.toLowerCase().includes(searchResults.trim().toLowerCase())) : quizes
  const publicFilteredQuizes = publicSearchResults.trim() != '' ? publicQuizes.filter((quiz) => quiz.quizName.toLowerCase().includes(publicSearchResults.trim().toLowerCase())) : publicQuizes
  
  return (
    <>
      <loggedInContext.Provider value={loggedIn}>
        <Routes>
  
   
          <Route path='/quiz-project/' element={<>
            <LayoutWithHeader 
              loggedIn={loggedIn} 
              handleMobileOptions={handleMobileOptions}
              showOptions={showOptions}
              width={width} 
              handleLogOut={handleLogOut}
              limit={limit}
              setOptions={setOptions}
            />
              <Home 
                width={width} 
                handleMobileOptions={handleMobileOptions}
                showOptions={showOptions}
                limit={limit}
                loggedIn={loggedIn}
              />
          
          
          </>

          } />

          <Route path='/quiz-project/public' element={<>
            <LayoutWithHeader 
              loggedIn={loggedIn} 
              handleMobileOptions={handleMobileOptions}
              showOptions={showOptions}
              width={width} 
              handleLogOut={handleLogOut}
              limit={limit}
              setOptions={setOptions}
            />
              
            <PublicQuizes publicFilteredQuizes={publicFilteredQuizes} publicQuizes={publicQuizes} publicSearchResults={publicSearchResults} setPublicSearchResults={setPublicSearchResults}/>
          
          
          </>

          } />  
  
       
          <Route path='/quiz-project/quizes' element={
            <>
            <LayoutWithHeader 
              loggedIn={loggedIn} 
              handleMobileOptions={handleMobileOptions}
              showOptions={showOptions}
              width={width} 
              handleLogOut={handleLogOut}
              limit={limit}
              setOptions={setOptions}
            />
              <Quizes 
                width={width} 
                handleMobileOptions={handleMobileOptions}
                showOptions={showOptions}
                limit={limit}
                quizes={quizes}
                filteredQuizes={filteredQuizes}
                DeleteQuiz={DeleteQuiz}
                handleEditQuiz={handleEditQuiz}
                handleEnterEditQuiz={handleEnterEditQuiz}
                searchResults={searchResults}
                setSearchResults={setSearchResults}
                hasQuizes={hasQuizes}
              />
              </>
          } />
  
          {/* No header */}
          <Route path='/quiz-project/play/:id' element={<MainGame 
            quizes={quizes}
            width={width} 
            handleMobileOptions={handleMobileOptions}
            showOptions={showOptions}
            limit={limit}
            setOptions={setOptions}
            publicQuizes={publicQuizes}
          />} />
  
          {/* No header */}
          <Route path='/quiz-project/create' element={<Create 
            handleCheckedAnswer={handleCheckedAnswer} 
            checked={checked}
            Public={Public}
            setPublic={setPublic}
            quizName={quizName}
            questionTitle={questionTitle}
            handleQuestionTitle={handleQuestionTitle}
            handleQuizName={handleQuizName}
            questions={questions}
            handleNewQuestion={handleNewQuestion}
            Answer1={Answer1}
            Answer2={Answer2}
            Answer3={Answer3}
            Answer4={Answer4}
            handleAnswerChange={handleAnswerChange}
            handleEditQuestion={handleEditQuestion}
            EditingMode={EditingMode}
            showQuestion={showQuestion}
            handleNewQuiz={handleNewQuiz}
            handleDeleteQuestion={handleDeleteQuestion}
          />} />
  
  
       
          <Route path='*' element={
              <>
            
              <Missing 
                width={width} 
                handleMobileOptions={handleMobileOptions}
                showOptions={showOptions}
                limit={limit}
              />

            
              </>
          } />
  
         
          <Route path='/quiz-project/login' element={
            <>
            
            
  
            <LayoutWithHeader 
              loggedIn={loggedIn} 
              handleMobileOptions={handleMobileOptions}
              showOptions={showOptions}
              width={width} 
              handleLogOut={handleLogOut}
              limit={limit}
              setOptions={setOptions}
            />
              <Login 
                width={width} 
                limit={limit} 
                handleLogin={handleLogin} 
                handleMobileOptions={handleMobileOptions} 
                showOptions={showOptions}
                errorMessage={errorMessage}
              />
            </>
          } />
  
         
          <Route path='/quiz-project/register' element={
            <>
            <LayoutWithHeader 
              loggedIn={loggedIn} 
              handleMobileOptions={handleMobileOptions}
              showOptions={showOptions}
              width={width} 
              handleLogOut={handleLogOut}
              limit={limit}
              setOptions={setOptions}
              
            />
              <Register 
                width={width} 
                limit={limit} 
                handleRegister={handleRegister} 
                handleMobileOptions={handleMobileOptions} 
                showOptions={showOptions}
                errorMessage={errorMessage}
              />
          
            </>
          } />
  
          {/* No header */}
          <Route path='/quiz-project/edit/:id' element={<EditQuiz
            handleCheckedAnswer={handleCheckedAnswer} 
            checked={checked}
            quizName={quizName}
            questionTitle={questionTitle}
            handleQuestionTitle={handleQuestionTitle}
            handleQuizName={handleQuizName}
            questions={questions}
            handleNewQuestion={handleNewQuestion}
            Answer1={Answer1}
            Answer2={Answer2}
            Answer3={Answer3}
            Answer4={Answer4}
            handleAnswerChange={handleAnswerChange}
            handleEditQuestion={handleEditQuestion}
            EditingMode={EditingMode}
            showQuestion={showQuestion}
            handleNewQuiz={handleNewQuiz}
            handleDeleteQuestion={handleDeleteQuestion}
            quizes={quizes}
            handleEditQuiz={handleEditQuiz}
            handleEditQuizItems={handleEditQuizItems}
            Public={Public}
            setPublic={setPublic}
          />} />
  
        </Routes>
      </loggedInContext.Provider>
    </>
  )
}

export default App
