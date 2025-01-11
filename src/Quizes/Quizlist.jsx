import Quiz from "./Quiz"
import styles from './Quizes.module.css'

function QuizList({filteredQuizes, DeleteQuiz, hasQuizes, width, handleEditQuiz, handleEnterEditQuiz, searchResults}){
    return(
        <>

        <div className={styles.Quizes}>
            
        {filteredQuizes.length > 0 && filteredQuizes.map((quiz) => 
            <Quiz handleEnterEditQuiz={handleEnterEditQuiz} handleEditQuiz={handleEditQuiz} key={quiz._id} quiz={quiz} DeleteQuiz={DeleteQuiz} width={width}></Quiz>
        )}

        {filteredQuizes.length == 0 && searchResults.trim() != '' && <h1 className={styles.emptyPage}>No search results</h1>}
        
        {filteredQuizes.length == 0 && searchResults.trim() == '' && <h1 className={styles.emptyPage}>{hasQuizes ? 'Loading your quizes...' : 'You have no quizes'}</h1>}


        </div>
    
        </>
    )
}

export default QuizList