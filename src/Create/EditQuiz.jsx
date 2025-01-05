import { useParams } from 'react-router-dom';
import styles from './Create.module.css';
import EditHeader from './EditHeader';
import CreateQuestion from './CreateQuestion';
import QuestionList from './QuestionList';
import Error from '../Error';
import { useContext } from "react";
import { useEffect } from "react";
import {loggedInContext} from '../App'
import { useNavigate } from 'react-router-dom';

function EditQuiz({checked, handleEditQuiz, quizes, handleDeleteQuestion, showQuestion, questions, EditingMode, handleNewQuestion, handleCheckedAnswer, handleQuizName, quizName, questionTitle, handleEditQuestion, handleQuestionTitle, Answer1, Answer2, Answer3, Answer4, handleAnswerChange}){

    const loggedin = useContext(loggedInContext)
    const navigate = useNavigate()

    useEffect(() => {
        if(!loggedin.Status){
            navigate('/quiz-project/login')
        }
    }, [])

    const { id } = useParams()

    const Quiz = quizes.find((quiz) => quiz.id == id)

    return(
        <>
        
        
        {Quiz &&  <div className={styles.CreateContainer}>
            <EditHeader 
                handleQuizName={handleQuizName}
                quizName={quizName} 
                handleEditQuiz={handleEditQuiz}
                Quiz={Quiz}
                questions={questions}
           
                />
            <CreateQuestion checked={checked} 
            handleCheckedAnswer={handleCheckedAnswer}
            quizName={quizName}
            questionTitle={questionTitle}
            handleQuestionTitle={handleQuestionTitle}
            Answer1={Answer1}
            Answer2={Answer2}
            Answer3={Answer3}
            Answer4={Answer4}
            handleAnswerChange={handleAnswerChange}

            >
        
            </CreateQuestion>
            <QuestionList
             questions={questions}
             handleNewQuestion={handleNewQuestion}
             handleEditQuestion={handleEditQuestion}
             EditingMode={EditingMode}
             showQuestion={showQuestion}
             handleDeleteQuestion={handleDeleteQuestion}

            ></QuestionList>
        </div>}

        {!Quiz &&  <>

              <Error 
  
              />
           
              
              </>}
        
        
        
        </>
       )
}

export default EditQuiz