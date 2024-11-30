import styles from './Create.module.css';
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { IoMdCheckbox } from "react-icons/io";

function CreateQuestion({checked, handleCheckedAnswer, questionTitle, handleQuestionTitle, Answer1, Answer2, Answer3, Answer4, handleAnswerChange}){

    return(
        <div className={styles.QuestionContainer}>
            <input className={styles.QuestionTitle} placeholder='Question title' value={questionTitle} onChange={(e) => handleQuestionTitle(e)}></input>
            <div className={styles.Answers}>
    <div className={styles.Answer1}>
         <input className={styles.AnswerInput} value={Answer1} onChange={(e) => handleAnswerChange(e,'Answer1')} placeholder='Input answer'></input>
        {checked.includes('Answer1') ? <IoMdCheckbox className={styles.Checkbox} onClick={() => handleCheckedAnswer("Answer1")}/> :
          <MdOutlineCheckBoxOutlineBlank className={styles.Checkbox} onClick={() => handleCheckedAnswer("Answer1")}/>}
    </div>
    <div className={styles.Answer2}>
        <input className={styles.AnswerInput} value={Answer2} onChange={(e) => handleAnswerChange(e,'Answer2')} placeholder='Input answer'></input>
        {checked.includes('Answer2') ? <IoMdCheckbox className={styles.Checkbox} onClick={() => handleCheckedAnswer("Answer2")}/> :
          <MdOutlineCheckBoxOutlineBlank className={styles.Checkbox} onClick={() => handleCheckedAnswer("Answer2")}/>}
    </div>
    <div className={styles.Answer3}>
        <input className={styles.AnswerInput} value={Answer3} onChange={(e) => handleAnswerChange(e,'Answer3')} placeholder='Input answer'></input>
        {checked.includes('Answer3') ? <IoMdCheckbox className={styles.Checkbox} onClick={() => handleCheckedAnswer("Answer3")}/> :
          <MdOutlineCheckBoxOutlineBlank className={styles.Checkbox} onClick={() => handleCheckedAnswer("Answer3")}/>}
    </div>
    <div className={styles.Answer4}>
    <input className={styles.AnswerInput} value={Answer4} onChange={(e) => handleAnswerChange(e,'Answer4')} placeholder='Input answer'></input>
        {checked.includes('Answer4')? <IoMdCheckbox className={styles.Checkbox} onClick={() => handleCheckedAnswer("Answer4")}/> :
          <MdOutlineCheckBoxOutlineBlank className={styles.Checkbox} onClick={() => handleCheckedAnswer("Answer4")}/>}
    </div>
</div>
        </div>
    )
}

export default CreateQuestion