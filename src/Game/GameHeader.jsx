import styles from './MainGame.module.css'

function GameHeader(){
    return(
        <header className="Header">
               
        <div className={styles.Score}>

            <h1>Score: 0</h1>

        </div>

    </header>
    )
}

export default GameHeader