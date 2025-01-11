import { useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react"
import { loggedInContext } from "../App"
import PublicQuizList from "./PublicQuizlist"

function PublicQuizes({publicSearchResults, setPublicSearchResults, publicQuizes, publicFilteredQuizes, hasPublicQuizes}){

    const loggedin = useContext(loggedInContext)
    const navigate = useNavigate()

    useEffect(() => {
        if(!loggedin.Status){
            navigate('/quiz-project/login')
        }
    }, [])
    
    return(
        <div className="publicContainer">

            <div className="publicTitle">
                    <h1>Public Quizes</h1>
            </div>

            <div className='SearchBar'>

            {publicQuizes.length > 0 && <input value={publicSearchResults} onChange={(e) => setPublicSearchResults(e.target.value)} placeholder='Search public quizes'></input>}
            
            </div>

            <PublicQuizList hasPublicQuizes={hasPublicQuizes} publicQuizes={publicQuizes} publicFilteredQuizes={publicFilteredQuizes} publicSearchResults={publicSearchResults}></PublicQuizList>




        </div>

        
    )
}

export default PublicQuizes