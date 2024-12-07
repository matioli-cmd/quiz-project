import Header from '/src/Header.jsx'
import MobileHeader from '/src/MobileHeader.jsx'
import QuizList from './Quizlist'

function Quizes({handleMobileOptions, width, showOptions, limit, quizes, DeleteQuiz, handleEditQuiz, handleEnterEditQuiz}){
    return(
        <>
        
        {width < limit ? 
            <MobileHeader 
            handleMobileOptions={handleMobileOptions}
            showOptions={showOptions}
            /> : <Header/>}


        <div>
            <h1 className='QuizListTitle'>My quizes</h1>
            
            <QuizList handleEnterEditQuiz={handleEnterEditQuiz} handleEditQuiz={handleEditQuiz} quizes={quizes} width={width} DeleteQuiz={DeleteQuiz}></QuizList>


        </div>

         
        
        </>
      
    )
}

export default Quizes