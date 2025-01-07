import { useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react"
import { loggedInContext } from "./App"
import styles from './Quizes/Quizes.module.css'
import { Link } from "react-router-dom"

function PublicQuizes({publicSearchResults, setPublicSearchResults}){
    
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

            <input value={publicSearchResults} onChange={(e) => setPublicSearchResults(e.target.value)} placeholder='Search public quizes'></input>
            
            </div>

            <div className="ApiItems-container">


            <div className="API">
                <div className="attributes">
                    
                <h1>
                    
                    Quiz test
                    
                </h1>
                <p> Created by: Gabe </p>
                </div>

                <div className='PlayButton'>

                        Play

                </div>
            </div>
  


                
            </div>




        </div>

        
    )
}

export default PublicQuizes