import styles from './Home.module.css'
import Header from '/src/Header.jsx'
import MobileHeader from '/src/MobileHeader.jsx'

function Home({width, limit, handleMobileOptions, showOptions}){

    return(
        <>
        
        {width < limit ? 
        <MobileHeader 
        handleMobileOptions={handleMobileOptions}
        showOptions={showOptions}
        /> : <Header/>}
        
        <div className={styles.HomeContent}>

            <div className={styles.HomeMessage}>
                    <h1 className={styles.WelcomeMessage}>Lets make a quiz.</h1>
            </div>


        </div>
        
        
        
        </>
    )
}

export default Home