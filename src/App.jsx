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
export const loggedInContext = createContext({Status: false, Username: ''});

function App() {

  const Navigate = useNavigate()

  const limit = 800

  const [width, setwidth] = useState(window.innerWidth)
  const [showOptions, setOptions] = useState(false)
  const storage = localStorage.getItem('Quizes')
  const [quizes, setQuizes] = useState(storage ? JSON.parse(storage) : [])
  const [searchResults, setSearchResults] = useState('')
  
  // USER
  const previousLoggedIn = localStorage.getItem('loggedin')
  const [loggedIn, setLoggedIn] = useState(!previousLoggedIn ? {Status: false, Username: ''}: JSON.parse(previousLoggedIn))

  useEffect(() => {
    localStorage.setItem('Quizes', JSON.stringify(quizes))
  }, [quizes])

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
      const response = await fetch('http://localhost:3500/auth', {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({"user": username, "pass": password})
      })
      const data = await response.json()
      console.log(data)

      if(response.status == 201){
         localStorage.setItem('loggedin', JSON.stringify({'Status': true, 'Username': username}))
         setLoggedIn({Status: true, Username: username})
         Navigate('/quiz-project/')
         console.log(loggedIn)
      }
      
    }
    loginUser()
    }

  function handleRegister(username, password){
    async function registerUser(){
      const response = await fetch('http://localhost:3500/register', {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({"user": username, "pass": password})
      })
      const data = await response.json()
      console.log(data)

      if(response.status == 201){
        Navigate('/quiz-project/login')
      }
      
    }
    registerUser()
  }

  function handleLogOut(){
    async function logoutUser(){
      const response = await fetch('http://localhost:3500/logout', {
        method: "GET",
        credentials: 'include'
      })
      if(response.ok){
        localStorage.removeItem('loggedin')
        setLoggedIn({Status: false, Username: ''})
      }
    }
    logoutUser()
  }

  function handleNewQuiz(){
    if(questions.length > 0 && quizName.trim() != ''){
      setQuizes(s => [...s, {'id':  quizes.length > 0 ? quizes[quizes.length - 1].id + 1 : 0,
 'quizName': quizName, objects: questions}])
    
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
      setQuestions(s => [...s, {'id': questions.length > 0 ? questions[questions.length - 1].id + 1 : 0,
        'title': questionTitle, 
        'answers':[Answer1, Answer2, Answer3, Answer4], 
        'correct':checked}])
        ResetQuestionFormat()


    }
  }

  function DeleteQuiz(id){
    const Quiz = quizes.find(quiz => quiz.id == id)
     Swal.fire({
            title: `Are you sure you want to delete ${Quiz.quizName}?`,
            showCancelButton: true,
            confirmButtonText: "Delete",
            customClass: {
              title: "styleTitle",
              confirmButton: "deleteTitle",
              popup: "styleBackground"
            },
          }).then((result) => {
            if (result.isConfirmed) {
              const FilteredQuizes = quizes.filter((quiz) => quiz.id != id)
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
    setEditedQuestionId(question.id)
  }

  function handleDeleteQuestion(id){
    
    id = EditedQuestionId

    const TemporaryArray = questions.filter((question) => question.id != id)

    setQuestions(TemporaryArray)

    setEditingMode(false)

    ResetQuestionFormat()

  }

  function handleEnterEditQuiz(quiz){

    const Quiz = quizes.find((q) => q.id == quiz.id)

    console.log(Quiz)

    if(Quiz){
                Navigate(`/quiz-project/edit/${quiz.id}`)
                handleEditQuizItems(Quiz)
                
            }
            
  }

  function handleEditQuiz(quiz){

    const id = quiz.id
    
    if(questions.length > 0 && quizName.trim() != ''){
    setQuizes(quizes.map(q => q.id == id ? {...{'id': id,
      'quizName': quizName, objects: questions}} : q))
    setEditingMode(false)
    
    ResetQuestionFormat()
    
    Navigate('/quiz-project/quizes')
    
  }

  }

  function handleEditQuestion(id){

    id = EditedQuestionId

    const question = questions.find((question) => question.id == id)
    
    const edited_info = {'id': id,
      'title': questionTitle, 
      'answers':[Answer1, Answer2, Answer3, Answer4], 
      'correct':checked}

    if(questionTitle.trim() != '' && Answer1.trim() != '' && Answer2.trim() != '' && Answer3.trim() != '' && Answer4.trim() != '' && checked.length > 0){

    setQuestions(questions.map(q => q.id == question.id ? {...edited_info} : q))
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
    }
  
  }, [location])

  function handleEditQuizItems(quiz){
    setQuizName(quiz.quizName)
    setQuestions(quiz.objects)
  }

  const filteredQuizes = searchResults.trim() != '' ? quizes.filter((quiz) => quiz.quizName.toLowerCase().includes(searchResults.trim().toLowerCase())) : quizes
  
  return (
    <>
      <loggedInContext.Provider value={loggedIn}>
        <Routes>
  
          {/* LayoutWithHeader wraps this route and provides the header */}
          <Route path='/quiz-project/' element={<>
            <LayoutWithHeader 
              loggedIn={loggedIn} 
              handleMobileOptions={handleMobileOptions}
              showOptions={showOptions}
              width={width} 
              handleLogOut={handleLogOut}
              limit={limit}
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
  
          {/* LayoutWithHeader wraps this route and provides the header */}
          <Route path='/quiz-project/quizes' element={
            <>
            <LayoutWithHeader 
              loggedIn={loggedIn} 
              handleMobileOptions={handleMobileOptions}
              showOptions={showOptions}
              width={width} 
              handleLogOut={handleLogOut}
              limit={limit}
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
          />} />
  
          {/* No header */}
          <Route path='/quiz-project/create' element={<Create 
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
          />} />
  
  
          {/* LayoutWithHeader wraps this route and provides the header */}
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
  
          {/* LayoutWithHeader wraps this route and provides the header */}
          <Route path='/quiz-project/login' element={
            <>
            
            
  
            <LayoutWithHeader 
              loggedIn={loggedIn} 
              handleMobileOptions={handleMobileOptions}
              showOptions={showOptions}
              width={width} 
              handleLogOut={handleLogOut}
              limit={limit}
            />
              <Login 
                width={width} 
                limit={limit} 
                handleLogin={handleLogin} 
                handleMobileOptions={handleMobileOptions} 
                showOptions={showOptions}
              />
            </>
          } />
  
          {/* LayoutWithHeader wraps this route and provides the header */}
          <Route path='/quiz-project/register' element={
            <>
            <LayoutWithHeader 
              loggedIn={loggedIn} 
              handleMobileOptions={handleMobileOptions}
              showOptions={showOptions}
              width={width} 
              handleLogOut={handleLogOut}
              limit={limit}
            />
              <Register 
                width={width} 
                limit={limit} 
                handleRegister={handleRegister} 
                handleMobileOptions={handleMobileOptions} 
                showOptions={showOptions}
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
          />} />
  
        </Routes>
      </loggedInContext.Provider>
    </>
  )
}

export default App
