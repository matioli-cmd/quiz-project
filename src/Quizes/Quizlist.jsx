import Quiz from "./Quiz"

function QuizList({quizes}){
    return(
        <>
        
        {quizes.map((quiz) => 
            <Quiz quiz={quiz}></Quiz>
        )}
        
        
        </>
    )
}

export default QuizList