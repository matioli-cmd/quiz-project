import Header from '/src/Header.jsx'
import MobileHeader from '/src/MobileHeader.jsx'
import QuizList from './Quizlist'
import { useEffect } from "react";
import {loggedInContext} from '../App'
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";

function Quizes({handleMobileOptions, width, showOptions, limit, hasQuizes, quizes, filteredQuizes, DeleteQuiz, handleEditQuiz, handleEnterEditQuiz, searchResults, setSearchResults}){
    
    const loggedin = useContext(loggedInContext)
    const navigate = useNavigate()

    useEffect(() => {
        if(!loggedin.Status){
            navigate('/quiz-project/login')
        }
    }, [])
    
    return(
        <>

        <div>
            <h1 className='QuizListTitle'>My quizes</h1>

            {quizes.length > 0 && <div className='SearchBar'>

                <input value={searchResults} onChange={(e) => setSearchResults(e.target.value)} placeholder='Search quizes'></input>

            </div>}
            
            <QuizList searchResults={searchResults} hasQuizes={hasQuizes} handleEnterEditQuiz={handleEnterEditQuiz} handleEditQuiz={handleEditQuiz} filteredQuizes={filteredQuizes} width={width} DeleteQuiz={DeleteQuiz}></QuizList>

        </div>

         
        
        </>
      
    )
}

export default Quizes