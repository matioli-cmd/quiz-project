import { useEffect, useState } from 'react'
import Home from './Home/Home'
import Quizes from './Quizes/Quizes'
import Create from './Create/Create'
import MainGame from './Game/MainGame'
import Missing from './Missing'
import EditQuiz from './Create/EditQuiz'
import Error from './Error'
import { Route, Routes, useLocation } from 'react-router-dom'

function App() {

  const limit = 700

  const [width, setwidth] = useState(window.innerWidth)
  const [showOptions, setOptions] = useState(false)
  const [quizes, setQuizes] = useState([{'id': 0,
    'quizName': '💜', objects: [{'id': 0,
      'title': 'How much does Gabe love Jimena?', 
      'answers':['100%', '2%', '1 Googol', '1 Trillion'], 
      'correct':['Answer3']}, 
        {'id': 1,
        'title': 'Does Gabe love Jimena?', 
        'answers':['Yes', 'Absolutely', 'No Doubt', 'Very Much'], 
        'correct':['Answer1', 'Answer2', 'Answer3', 'Answer4']}, {'id': 2,
          'title': 'What is Gabes favorite color?', 
          'answers':['Navy Blue', 'Green', 'Purple', 'Blue'], 
          'correct':['Answer1', 'Answer3']}]}])

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
    console.log(e.target.value)
  }

  function handleNewQuiz(){
    if(questions.length > 0 && quizName){
      setQuizes(s => [...s, {'id':  quizes.length > 0 ? quizes[quizes.length - 1].id + 1 : 0,
 'quizName': quizName, objects: questions}])
    }
  }

  useEffect(() => {
    console.log(quizes)
  }, [quizes])

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
    if(questionTitle && Answer1 && Answer2 && Answer3 && Answer4 && checked.length > 0){
      setQuestions(s => [...s, {'id': questions.length > 0 ? questions[questions.length - 1].id + 1 : 0,
        'title': questionTitle, 
        'answers':[Answer1, Answer2, Answer3, Answer4], 
        'correct':checked}])
        ResetQuestionFormat()


    }
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

  function handleEditQuiz(quiz){

    const id = quiz.id
    
    if(questions.length > 0 && quizName){
    setQuizes(quizes.map(q => q.id == id ? {...{'id': id,
      'quizName': quizName, objects: questions}} : q))
    setEditingMode(false)
    
    ResetQuestionFormat()}

  }

  function handleEditQuestion(id){

    id = EditedQuestionId

    const question = questions.find((question) => question.id == id)
    
    const edited_info = {'id': id,
      'title': questionTitle, 
      'answers':[Answer1, Answer2, Answer3, Answer4], 
      'correct':checked}

    if(questionTitle && Answer1 && Answer2 && Answer3 && Answer4 && checked.length > 0){

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
  }, [location])

  function handleEditQuizItems(quiz){
    setQuizName(quiz.quizName)
    setQuestions(quiz.objects)
  }

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

      <Route path='/quiz-project/play/:id' element={<MainGame 
      quizes={quizes}
      width={width} 
      handleMobileOptions={handleMobileOptions}
      showOptions={showOptions}
      limit={limit}/>}>


      </Route>

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
      
      />}>


      </Route>

      <Route path='/quiz-project/error' element={<Error
      width={width} 
      handleMobileOptions={handleMobileOptions}
      showOptions={showOptions}
      limit={limit}
      />}>
      </Route>

      <Route path='*' element={<Missing
      width={width} 
      handleMobileOptions={handleMobileOptions}
      showOptions={showOptions}
      limit={limit}
      />}>

      </Route>

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
        setQuestionTitle={setQuestionTitle}
        setAnswer1={setAnswer1}
        setAnswer2={setAnswer2}
        setAnswer3={setAnswer3}
        setAnswer4={setAnswer4}
        setChecked={setChecked}
        setQuizName={setQuizName}
        setQuestions={setQuestions}
        setEditingMode={setEditingMode}
        setEditedQuestionId={setEditedQuestionId}
        handleEditQuiz={handleEditQuiz}
        handleEditQuizItems={handleEditQuizItems}
      
      />}>


      </Route>


    </Routes>
    </>
  )
}

export default App
