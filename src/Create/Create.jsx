import styles from './Create.module.css';
import CreateHeader from './CreateHeader';
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import CreateQuestion from './CreateQuestion';
import QuestionList from './QuestionList';


function Create({checked, handleCheckedAnswer}) {
    return (
        <div className={styles.CreateContainer}>
            <CreateHeader />
            <CreateQuestion checked={checked} 
            handleCheckedAnswer={handleCheckedAnswer}>
            </CreateQuestion>
            <QuestionList></QuestionList>

        </div>


    );
}

export default Create;
