import styles from './Home.module.css'
import { useContext } from "react";
import { useEffect } from "react";
import {loggedInContext} from '../App'
import { useNavigate } from 'react-router-dom';

function Home({width, limit, handleMobileOptions, showOptions, loggedIn}){

    const loggedin = useContext(loggedInContext)
    const navigate = useNavigate()

    useEffect(() => {
        if(!loggedin.Status){
            navigate('/quiz-project/login')
        }
    }, [])

    return(
        <>
        
        <div className={styles.HomeContent}>

            <div className={styles.HomeMessage}>
                    {loggedIn.Username ? <h1 className={styles.WelcomeMessage}>Hello {loggedIn.Username}!</h1> : 
                    <h1 className={styles.WelcomeMessage}>Lets make a quiz!</h1>}
            </div>


        </div>
        
        
        
        </>
    )
}

export default Home