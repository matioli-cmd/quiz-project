import Quiz from "./Quiz"
import styles from './Quizes.module.css'
import { Link } from "react-router-dom"
function QuizList({quizes, DeleteQuiz, width, handleEditQuiz, handleEnterEditQuiz}){
    return(
        <>
        
        {quizes.length > 0 ? quizes.map((quiz) => 
            <Quiz handleEnterEditQuiz={handleEnterEditQuiz} handleEditQuiz={handleEditQuiz} key={quiz.id} quiz={quiz} DeleteQuiz={DeleteQuiz} width={width}></Quiz>
        ) : <h1 className={styles.emptyPage}><Link to={'/quiz-project/create'} className={styles.CreateLink}>Create</Link> a quiz now!</h1>}
        
        
        </>
    )
}

export default QuizList