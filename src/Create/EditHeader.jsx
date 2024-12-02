import { Link } from 'react-router-dom'
import styles from './Create.module.css'


function EditHeader({Quiz, quizName, handleQuizName, handleEditQuiz}){
    return(
        <header className={styles.CreateHeader}>
        
        <div className={styles.TitleText}>

        <h1>Name</h1>
        
        <input className={styles.TitleInput} value={quizName} maxLength={25} onChange={(e) => handleQuizName(e)}></input>

        </div>

        <Link to='/quiz-project/quizes' style={{textDecoration: 'none'}} onClick={() => handleEditQuiz(Quiz)}>
            <div className={styles.SaveButton}>

            <h1>Save</h1>

            </div>
        </Link>
       

    </header>
    )
}

export default EditHeader