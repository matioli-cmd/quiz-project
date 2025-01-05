import Header from "../Header"
import MobileHeader from "../MobileHeader"
import styles from './User.module.css'
import { Link } from "react-router-dom"
import { useState } from "react"

function Login({width, limit, handleMobileOptions, showOptions, handleLogin}){

    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    return(
        <>
        
        <div className={styles.Container}>
            
            <div className={styles.Background}>
                <h1 className={styles.Title}>Login to Qwizly</h1>
                <h1 className={styles.Title2}>Welcome back!</h1>
                
                <div className={styles.InputContainer}>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} className={styles.Input} type="text" placeholder="Username"></input>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className={styles.Input} type="password" placeholder="Password"></input>
                </div>

                <h2 className={styles.Link}>New here? <Link to={'/quiz-project/register'} className={styles.LinkDecoration}>Register</Link></h2>

                <button className={styles.Button} onClick={() => handleLogin(username, password)}>Login</button>
              
            
            </div>

        </div>
       
        </>
    )

}

export default Login