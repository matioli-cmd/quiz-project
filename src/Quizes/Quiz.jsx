import styles from './Quizes.module.css'
import { MdEdit, MdMode } from "react-icons/md";
import { Link } from 'react-router-dom';
import { TbTrashXFilled } from "react-icons/tb";
import { MdModeEdit } from "react-icons/md";

function Quiz({quiz, DeleteQuiz, width, handleEditQuiz, handleEnterEditQuiz}){
    return(

        <div className={styles.Quiz}>
        
   
        <div className={styles.TextSection}>
            {width > 600 && <h1 className={styles.QuizTitle}>{quiz.quizName}</h1>}
            {width < 600 && quiz.quizName.length < 15 && <h1 className={styles.QuizTitle}>{quiz.quizName}</h1>}
            {width < 600 && quiz.quizName.length > 15 && <h1 className={styles.QuizTitle}>{quiz.quizName.slice(0,15) + '...'}</h1>}
            {width == 600 && quiz.quizName.length > 15 && <h1 className={styles.QuizTitle}>{quiz.quizName.slice(0,15) + '...'}</h1>}
        </div>

        <div className={styles.ButtonSection}>
          <Link to={`/quiz-project/play/${quiz._id}`} className={styles.PlayButton}>
            Play
          </Link>
          <div onClick={() => handleEnterEditQuiz(quiz._id)} className={styles.EditButton}>
            <MdModeEdit></MdModeEdit>
          </div>
          <div className={styles.TrashButton} onClick={() => DeleteQuiz(quiz)}>
            <TbTrashXFilled />
          </div>
        </div>
      </div>
      


      
)}

export default Quiz