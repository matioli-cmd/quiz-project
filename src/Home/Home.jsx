import { useEffect, useRef } from 'react'
import styles from './Home.module.css'

function Home(){


    return(
        <div className={styles.HomeContent}>

            <div className={styles.HomeMessage}>
                    <h1 className={styles.WelcomeMessage}>Lets make a quiz.</h1>
            </div>


        </div>
    )
}

export default Home