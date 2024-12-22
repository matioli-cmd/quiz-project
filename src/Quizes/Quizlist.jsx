import Quiz from "./Quiz"
import styles from './Quizes.module.css'
import { Link } from "react-router-dom"
function QuizList({quizes, DeleteQuiz, width, handleEditQuiz, handleEnterEditQuiz, searchResults}){
    return(
        <>
        
        {quizes.length > 0 && quizes.map((quiz) => 
            <Quiz handleEnterEditQuiz={handleEnterEditQuiz} handleEditQuiz={handleEditQuiz} key={quiz.id} quiz={quiz} DeleteQuiz={DeleteQuiz} width={width}></Quiz>
        )}

        {quizes.length == 0 && searchResults.trim() != '' && <h1 className={styles.emptyPage}>No search results</h1>}
        
        {quizes.length == 0 && searchResults.trim() == '' && <h1 className={styles.emptyPage}><Link className={styles.CreateLink} to={'/quiz-project/create'}>Create</Link> a quiz now!</h1>}
        </>
    )
}

export default QuizList