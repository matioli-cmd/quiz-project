import Header from '/src/Header.jsx'
import MobileHeader from '/src/MobileHeader.jsx'
import QuizList from './Quizlist'

function Quizes({handleMobileOptions, width, showOptions, limit, quizes}){
    return(
        <>
        
        {width < limit ? 
            <MobileHeader 
            handleMobileOptions={handleMobileOptions}
            showOptions={showOptions}
            /> : <Header/>}


        <div>

            
            <QuizList quizes={quizes}></QuizList>


        </div>

         
        
        </>
      
    )
}

export default Quizes