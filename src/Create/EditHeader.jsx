import { Link } from 'react-router-dom'
import styles from './Create.module.css'
import { useState, useEffect } from 'react'
import { MdPublic } from "react-icons/md";
import { MdPublicOff } from "react-icons/md";



function EditHeader({Quiz, quizName, Public, setPublic, handleQuizName, handleEditQuiz, questions}){

    const [saveButtonClass, setSaveButtonClass] = useState('') 

    useEffect(() => {
        quizName.trim() != '' && questions.length > 0 ? setSaveButtonClass(styles.SaveButton) : setSaveButtonClass(styles.SaveButtonInactive)
    }, [quizName, questions])
    

    return(
        <header className={styles.CreateHeader}>
        
        <div className={styles.TitleText}>
        
        <input placeholder='Name' className={styles.TitleInput} value={quizName} maxLength={25} onChange={(e) => handleQuizName(e)}></input>

        </div>


    <div className={styles.buttonHolder}>

     <div className={Public ? styles.PublicButtonClass : styles.PublicOffButtonClass} onClick={() => setPublic(p => !p)}>
    
            {Public ? <MdPublic></MdPublic> : <MdPublicOff/>}
    
    </div>

    <Link to='/quiz-project/quizes' style={{textDecoration: 'none'}}>
        <div className={styles.BackButton}>

        <h1>Back</h1>

        </div>
    </Link>

    
            <div className={saveButtonClass} onClick={() => handleEditQuiz(Quiz)}>

            <h1>Save</h1>

            </div>

        </div>
       

    </header>
    )
}

export default EditHeader