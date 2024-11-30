import styles from './MainGame.module.css'
import GameHeader from './GameHeader'
import { useParams } from 'react-router-dom'

function MainGame(){
    return(
        <>
             <GameHeader></GameHeader>
        
        <div className={styles.QuestionTitle}>

        <h1>Question Title</h1>

        </div>
       

        <div className={styles.AnswerContainer}>

            <div className={styles.Answers}>
                <div className={styles.Answer1}>
                <h1>Answer 1</h1>
                </div>
                <div className={styles.Answer2}>
                <h1>Answer 2</h1>
                </div>
                <div className={styles.Answer3}>
                <h1>Answer 3</h1>
                </div>
                <div className={styles.Answer4}>
                <h1>Answer 4</h1>
                </div>
            </div>


        </div>
            
        
        </>
       
    )
}

export default MainGame