import styles from './MainGame.module.css'

function GameHeader({Score}){
    return(
        <header className="Header">
               
        <div className={styles.Score}>

            <h1>Score: {Score}</h1>

        </div>

    </header>
    )
}

export default GameHeader