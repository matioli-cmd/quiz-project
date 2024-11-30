import styles from './Create.module.css';
import Question from './Question';

function QuestionList({questions, handleNewQuestion,handleDeleteQuestion, handleEditQuestion, EditingMode, showQuestion}) {
    return (
        <div className={styles.QuestionList}>
        <div className={styles.addQuestionContainer}>
        {!EditingMode ? 

            
            <div className={styles.addQuestion} onClick={handleNewQuestion}>
            <h1>Add question</h1>
          </div> 
    
          : 
          <>
          <div className={styles.addQuestion} onClick={handleEditQuestion}>
            <h1>Save question</h1>
          </div>
          <div className={styles.DeleteButton} onClick={handleDeleteQuestion}>
            <h1>Delete</h1>
          </div>
          </>}
        </div>
        {!EditingMode &&  
        
        <div className={styles.Questions}>
          {questions.length > 0 
            ? questions.map((question, index) => <Question key={question.id} question={question} showQuestion={showQuestion} index={index} />) 
            : null}
        </div>
        }
       
      </div>
      
    );
}

export default QuestionList;