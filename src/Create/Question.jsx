import styles from './Create.module.css';

function Question({ question, showQuestion, index}){

    const number = index += 1

    return(
        <>

            <h1 className={styles.QuestionItem} onClick={() => showQuestion(question)}>{number}</h1>
        </>
        
    )
}

export default Question