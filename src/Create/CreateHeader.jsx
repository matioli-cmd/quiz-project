import { Link } from 'react-router-dom'
import styles from './Create.module.css'
import { useEffect, useState } from 'react'


function CreateHeader({quizName, handleQuizName, handleNewQuiz, questions}){
    
    const [saveButtonClass, setSaveButtonClass] = useState('') 

    useEffect(() => {
        quizName.trim() != '' && questions.length > 0 ? setSaveButtonClass(styles.SaveButton) : setSaveButtonClass(styles.SaveButtonInactive)
    }, [quizName, questions])
    
    
    return(
        <header className={styles.CreateHeader}>
        
        <div className={styles.TitleText}>

        <h1>Name</h1>
        <input className={styles.TitleInput} value={quizName}  maxLength={25} onChange={(e) => handleQuizName(e)}></input>

        </div>
        
        <div className={styles.buttonHolder}>

        <Link to='/quiz-project/quizes' style={{textDecoration: 'none'}}>
            <div className={styles.BackButton}>

            <h1>Back</h1>

            </div>
        </Link>

            <div className={saveButtonClass} onClick={handleNewQuiz}>

            <h1>Save</h1>

            </div>
        
        </div>
      

    </header>
    )
}

export default CreateHeader