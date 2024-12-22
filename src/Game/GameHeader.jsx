import styles from './MainGame.module.css'

function GameHeader({currentQuestion, Quiz, GameOver}){

    const questionNumber = currentQuestion += 1

    return(



        <header className="Header">

               
        {!GameOver && <div className={styles.Score}>

            <h1>Question {questionNumber}/{Quiz.objects.length}</h1>

        </div>}

    </header>
    )
}

export default GameHeader