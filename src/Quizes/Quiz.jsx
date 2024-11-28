import styles from './Quizes.module.css'
import { FaPlay } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

function Quiz({quiz}){
    return(

        <div className={styles.Quiz}>

    <div>

        <h1 className={styles.QuizTitle}>{quiz}</h1>

    </div>
        
    <div className={styles.Container}>
        
        <div className={styles.PlayButton}>
            <h1>Play</h1>
            <FaPlay />
        </div>

        <div className={styles.EditLogo}>
            <MdEdit />
            <BsThreeDotsVertical />
        </div>

    </div>

       
        </div>
)}

export default Quiz