import Header from '/src/Header.jsx'
import MobileHeader from '/src/MobileHeader.jsx'
import styles from './Quizes.module.css'
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

            <h1 className={styles.QuizesTitle}>My Quizes</h1>

        </div>

        <div>

            
            <QuizList quizes={quizes}></QuizList>


        </div>

         
        
        </>
      
    )
}

export default Quizes