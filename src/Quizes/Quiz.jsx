import styles from './Quizes.module.css'
import { FaPlay } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { Link } from 'react-router-dom';
import { BsThreeDotsVertical } from "react-icons/bs";

function Quiz({quiz}){
    return(

        <div className={styles.Quiz}>

    <div>

        <h1 className={styles.QuizTitle}>{quiz.quizName}</h1>

    </div>
        
    <div className={styles.Container}>
        
        <Link to={`/quiz-project/play/${quiz.id}`} style={{textDecoration: 'none'}}>
            <div className={styles.PlayButton}>
                <h1>Play</h1>
                <FaPlay />
            </div>
        </Link>
    

        <div className={styles.EditLogo}>
           
            <Link to={`/quiz-project/edit/${quiz.id}`} style={{textDecoration: 'none', color: 'black', marginTop: '5px'}}>
            <MdEdit />
            </Link>
            
        </div>

    </div>

       
        </div>
)}

export default Quiz