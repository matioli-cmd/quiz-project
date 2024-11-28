import styles from './Create.module.css';
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { IoMdCheckbox } from "react-icons/io";

function CreateQuestion({checked, handleCheckedAnswer}){
    return(
        <div className={styles.QuestionContainer}>
            <input className={styles.QuestionTitle} placeholder='Question title'></input>
            <div className={styles.Answers}>
    <div className={styles.Answer1}>
        <h2>Answer 1</h2>
        {checked.includes('Answer1') ? <IoMdCheckbox className={styles.Checkbox} onClick={() => handleCheckedAnswer("Answer1")}/> :
          <MdOutlineCheckBoxOutlineBlank className={styles.Checkbox} onClick={() => handleCheckedAnswer("Answer1")}/>}
    </div>
    <div className={styles.Answer2}>
        <h2>Answer 2</h2>
        {checked.includes('Answer2') ? <IoMdCheckbox className={styles.Checkbox} onClick={() => handleCheckedAnswer("Answer2")}/> :
          <MdOutlineCheckBoxOutlineBlank className={styles.Checkbox} onClick={() => handleCheckedAnswer("Answer2")}/>}
    </div>
    <div className={styles.Answer3}>
        <h2>Answer 3</h2>
        {checked.includes('Answer3') ? <IoMdCheckbox className={styles.Checkbox} onClick={() => handleCheckedAnswer("Answer3")}/> :
          <MdOutlineCheckBoxOutlineBlank className={styles.Checkbox} onClick={() => handleCheckedAnswer("Answer3")}/>}
    </div>
    <div className={styles.Answer4}>
        <h2>Answer 4</h2>
        {checked.includes('Answer4')? <IoMdCheckbox className={styles.Checkbox} onClick={() => handleCheckedAnswer("Answer4")}/> :
          <MdOutlineCheckBoxOutlineBlank className={styles.Checkbox} onClick={() => handleCheckedAnswer("Answer4")}/>}
    </div>
</div>
        </div>
    )
}

export default CreateQuestion