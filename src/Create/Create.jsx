import styles from './Create.module.css';
import CreateHeader from './CreateHeader';
import CreateQuestion from './CreateQuestion';
import QuestionList from './QuestionList';

function Create({checked, handleDeleteQuestion, handleNewQuiz, showQuestion, questions, EditingMode, handleNewQuestion, handleCheckedAnswer, handleQuizName, quizName, questionTitle, handleEditQuestion, handleQuestionTitle, Answer1, Answer2, Answer3, Answer4, handleAnswerChange}) {

    return (
        <div className={styles.CreateContainer}>
            <CreateHeader handleQuizName={handleQuizName}
                quizName={quizName} 
                questions={questions}
                handleNewQuiz={handleNewQuiz}
           
                />
            <CreateQuestion checked={checked} 
            handleCheckedAnswer={handleCheckedAnswer}
            quizName={quizName}
            questionTitle={questionTitle}
            handleQuestionTitle={handleQuestionTitle}
            Answer1={Answer1}
            Answer2={Answer2}
            Answer3={Answer3}
            Answer4={Answer4}
            handleAnswerChange={handleAnswerChange}

            >
            
            </CreateQuestion>
            <QuestionList
             questions={questions}
             handleNewQuestion={handleNewQuestion}
             handleEditQuestion={handleEditQuestion}
             EditingMode={EditingMode}
             showQuestion={showQuestion}
             handleDeleteQuestion={handleDeleteQuestion}

            ></QuestionList>

        </div>


    );
}

export default Create;
