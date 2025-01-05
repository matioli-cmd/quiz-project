import styles from './Home.module.css'
import Header from '/src/Header.jsx'
import MobileHeader from '/src/MobileHeader.jsx'
import Swal from 'sweetalert2'

function Home({width, limit, handleMobileOptions, showOptions, loggedIn}){

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