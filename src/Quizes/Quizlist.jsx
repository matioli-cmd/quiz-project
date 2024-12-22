import Quiz from "./Quiz"
import styles from './Quizes.module.css'
import { Link } from "react-router-dom"
function QuizList({filteredQuizes, DeleteQuiz, width, handleEditQuiz, handleEnterEditQuiz, searchResults}){
    return(
        <>
        
        {filteredQuizes.length > 0 && filteredQuizes.map((quiz) => 
            <Quiz handleEnterEditQuiz={handleEnterEditQuiz} handleEditQuiz={handleEditQuiz} key={quiz.id} quiz={quiz} DeleteQuiz={DeleteQuiz} width={width}></Quiz>
        )}

        {filteredQuizes.length == 0 && searchResults.trim() != '' && <h1 className={styles.emptyPage}>No search results</h1>}
        
        {filteredQuizes.length == 0 && searchResults.trim() == '' && <h1 className={styles.emptyPage}><Link className={styles.CreateLink} to={'/quiz-project/create'}>Create</Link> a quiz now!</h1>}
        </>
    )
}

export default QuizList