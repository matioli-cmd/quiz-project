import PublicQuiz from "./PublicQuiz"
import styles from './Quizes.module.css'

function PublicQuizList({publicFilteredQuizes, publicSearchResults}){
    return(
        <>
        
        {publicFilteredQuizes.length > 0 && publicFilteredQuizes.map((quiz) => 
            <PublicQuiz key={quiz._id} quiz={quiz}></PublicQuiz>
        )}

        {publicFilteredQuizes.length == 0 && publicSearchResults.trim() != '' && <h1 className={styles.emptyPage}>No search results</h1>}
        
        {publicFilteredQuizes.length == 0 && publicSearchResults.trim() == '' && <h1 className={styles.emptyPage}>There are no public quizes available</h1>}
        </>
    )
}

export default PublicQuizList