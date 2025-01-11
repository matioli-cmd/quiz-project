import styles from './Quizes.module.css'
import { Link } from 'react-router-dom';

function PublicQuiz({quiz}){
    return(

        <div className="ApiItems-container">

        <div className="API">
            <div className="attributes">
                
            <h1>
                
                {quiz.quizName}
                
            </h1>
            <p> Created by: {quiz.creator} </p>
            </div>

            <div className='PlayButton'>

            <Link to={`/quiz-project/play/${quiz._id}`} className={styles.PlayButton}>
            Play
          </Link>

            </div>  
            </div> 
            </div> 
)}

export default PublicQuiz