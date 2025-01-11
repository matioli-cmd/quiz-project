import { Link } from "react-router-dom"
import Header from "../Header"
import MobileHeader from "../MobileHeader"
import styles from './User.module.css'
import { useState } from "react"

function Register({width, limit, handleMobileOptions, showOptions, handleRegister, errorMessage}){

    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    return(
        <>

         <div className={styles.Container}>


                    
                    <div className={styles.Background}>
                        <h1 className={styles.Error}>{errorMessage}</h1>
                        <h1 className={styles.Title}>Register with Qwizly</h1>
                        <h1 className={styles.Title2}>Create and play!</h1>
                        
                        <div className={styles.InputContainer}>
                            <input value={username}  onChange={(e) => setUsername(e.target.value)} className={styles.Input} type="text" placeholder="Username"></input>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} className={styles.Input} type="password" placeholder="Password"></input>
                        </div>

                        <h2 className={styles.Link}>Have an account? <Link to={'/quiz-project/login'} className={styles.LinkDecoration}>Login</Link></h2>
        
                        <button className={styles.Button} onClick={() => handleRegister(username, password)}>Register</button>
                    
                    </div>
        
                </div>
        
        
        </>
    )

}

export default Register