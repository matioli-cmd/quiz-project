import Quiz from "./Quiz"
import styles from './Quizes.module.css'

function QuizList({quizes}){
    return(
        <>
        
        {quizes.length > 0 ? quizes.map((quiz) => 
            <Quiz key={quiz.id} quiz={quiz}></Quiz>
        ) : <h1 className={styles.emptyPage}>No quizes available</h1>}
        
        
        </>
    )
}

export default QuizList