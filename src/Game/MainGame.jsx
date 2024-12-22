import styles from './MainGame.module.css'
import GameHeader from './GameHeader'
import {useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Error from '../Error'
import {FaXmark } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom'
import LoadingIcons, { ThreeDots } from 'react-loading-icons'

function MainGame({quizes, width, limit, handleMobileOptions, showOptions}){

    const { id } = useParams()

    const wizardPuns = [
        "Casting spell...",
        "Summoning data...",
        "Enchanting load...",
        "Brewing results...",
        "Waving wand...",
        "Charging scroll...",
        "Aligning crystals...",
        "Quiz magic rising...",
        "Channeling spells...",
        "Arcane loading...",
      ];


    const Quiz = quizes.find((quiz) => quiz.id == id)

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [Score, setScore] = useState(0)
    const [ShowAnswers, setShowAnswers] = useState(false)
    const [ChosenAnswer, setChosenAnswer] = useState('')
    const [GameOver, setGameOver] = useState(false) 
    const [correct, setCorrect] = useState(0)
    const [Loading, setLoading] = useState(true)
    const [LoadingText, setLoadingText] = useState(wizardPuns[Math.floor(Math.random() * wizardPuns.length)])
    const [incorrect, setIncorrect] = useState(0)

    useEffect(() => {


        const timeout = setInterval(() => {
            const RandomPun = wizardPuns[Math.floor(Math.random() * wizardPuns.length)]
            setLoadingText(RandomPun)
        }, 4000);

        return () => {clearInterval(timeout)}

    }, [Loading])

    useEffect(() => {

        const timeout = setTimeout(() => {
            setLoading(false)
        }, 4000);

        return () => {clearTimeout(timeout)}

    },[])

    const [time, setTime] = useState(0)

    useEffect(() => {
        let Change;

        if(!GameOver && !Loading){
            Change = setInterval(() => {
                setTime(t => t += 1)
            }, 1000);
        }

      
        return () => {clearTimeout(Change)}
    }, [GameOver, Loading])

    function incorrectAnswer(answer){
        if(ChosenAnswer == answer){
            return 'rgb(227, 56, 56)'
        }
        else{
            return 'rgb(135, 39, 39)'
        }
    }

    function handleChangeQuestion(answer){
        setChosenAnswer(answer)
        if(Quiz.objects[currentQuestion].correct.includes(answer)){
            if(Quiz.objects.length > currentQuestion && !GameOver){
                setShowAnswers(true)
                setCorrect(p => p += 1)
                setTimeout(() => {
                    setShowAnswers(false)
                    if(Quiz.objects.length == currentQuestion + 1){
                        setGameOver(true)
                    }
                    else{
                        setCurrentQuestion(q => q + 1)
                    }
                }, 4000);

                
            }

            setScore(p => p += 100)
        }
        else{
            if(Quiz.objects.length > currentQuestion && !GameOver){
                setShowAnswers(true)
                setIncorrect(p => p += 1)
                setTimeout(() => {
                    setShowAnswers(false)
                    if(Quiz.objects.length == currentQuestion + 1){
                        setGameOver(true)
                    }
                    else{
                        setCurrentQuestion(q => q + 1)
                    }
                }, 4000);
                
            }
        }
    }
  
    return(
        <>  
            

            {Quiz && !ShowAnswers && !GameOver && Loading && (
                <>
 
                <div className={styles.Loading}>
                <h1>{LoadingText}</h1>
                <ThreeDots width="70" height="70" />
                </div>
                </>

             
               
            )}

            {Quiz && !ShowAnswers && !GameOver && !Loading &&(
            <>
                       <GameHeader Quiz={Quiz} currentQuestion={currentQuestion} GameOver={GameOver}/>
                <div className={styles.PageContainer}>
                <div className={styles.QuestionTitle}>
                    <h1>{Quiz.objects[currentQuestion].title}</h1>
                </div>
                <div className={styles.AnswerContainer}>
                    <div className={styles.Answers}>
                    <div className={styles.Answer1} onClick={() => handleChangeQuestion("Answer1")}>
                        <h1>{Quiz.objects[currentQuestion].answers[0]}</h1>
                    </div>
                    <div className={styles.Answer2} onClick={() => handleChangeQuestion("Answer2")}>
                        <h1>{Quiz.objects[currentQuestion].answers[1]}</h1>
                    </div>
                    <div className={styles.Answer3} onClick={() => handleChangeQuestion("Answer3")}>
                        <h1>{Quiz.objects[currentQuestion].answers[2]}</h1>
                    </div>
                    <div className={styles.Answer4} onClick={() => handleChangeQuestion("Answer4")}>
                        <h1>{Quiz.objects[currentQuestion].answers[3]}</h1>
                    </div>
                    </div>
                </div>
                </div>
            </>
            )}

            {Quiz && ShowAnswers && !GameOver && !Loading &&(

            <>
                   <GameHeader Quiz={Quiz} currentQuestion={currentQuestion} GameOver={GameOver}/>
                <div className={styles.PageContainer}>
                <div className={styles.QuestionTitle}>
                    <h1>{Quiz.objects[currentQuestion].title}</h1>
                </div>
                <div className={styles.AnswerContainer}>
                    <div className={styles.Answers}>
                    <div className={styles.ShowingAnswer1} style={{backgroundColor: Quiz.objects[currentQuestion].correct.includes("Answer1") ? 'rgb(50, 173, 75)' : incorrectAnswer('Answer1')}}>
                        <h1>{Quiz.objects[currentQuestion].answers[0]}</h1>
                        {!Quiz.objects[currentQuestion].correct.includes("Answer1") ? <FaXmark className={styles.XMark}></FaXmark>
                        : <FaCheck className={styles.Checkmark}></FaCheck>
                    }
                    </div>
                    <div className={styles.ShowingAnswer2} style={{backgroundColor: Quiz.objects[currentQuestion].correct.includes("Answer2") ? 'rgb(50, 173, 75)' : incorrectAnswer('Answer2')}} >
                        <h1>{Quiz.objects[currentQuestion].answers[1]}</h1>
                        {!Quiz.objects[currentQuestion].correct.includes("Answer2") ? <FaXmark className={styles.XMark}></FaXmark>
                        : <FaCheck className={styles.Checkmark}></FaCheck>
                    }
                    </div>
                    <div className={styles.ShowingAnswer3} style={{backgroundColor: Quiz.objects[currentQuestion].correct.includes("Answer3") ? 'rgb(50, 173, 75)' : incorrectAnswer('Answer3')}}>
                        <h1>{Quiz.objects[currentQuestion].answers[2]}</h1>
                        {!Quiz.objects[currentQuestion].correct.includes("Answer3") ? <FaXmark className={styles.XMark}></FaXmark>
                        : <FaCheck className={styles.Checkmark}></FaCheck>
                    }
                    </div>
                    <div className={styles.ShowingAnswer4} style={{backgroundColor: Quiz.objects[currentQuestion].correct.includes("Answer4") ? 'rgb(50, 173, 75)' : incorrectAnswer('Answer4')}}>
                        <h1>{Quiz.objects[currentQuestion].answers[3]}</h1>
                        {!Quiz.objects[currentQuestion].correct.includes("Answer4") ? <FaXmark className={styles.XMark}></FaXmark>
                        : <FaCheck className={styles.Checkmark}></FaCheck>
                    }
                    </div>
                    </div>
                </div>
                </div>
            </>
            )}

            {Quiz && GameOver && !Loading &&
            <>  
                   <GameHeader Quiz={Quiz} currentQuestion={currentQuestion} GameOver={GameOver}/>

                <div className={styles.ResultsContainer}>
                <div className={styles.Results}>
                    <h1>Accuracy: {`${Math.floor((correct/Quiz.objects.length) * 100)}%`}</h1>
                    <h1>Correct: {correct}</h1>
                    <h1>Incorrect: {incorrect}</h1>
                    <h1>Time taken: { `${String(Math.floor(time / 60)).padStart(2, '0')}:${String(Math.floor(time % 60)).padStart(2, '0')}`}</h1>
                    <div className={styles.ButtonHolder}>
                    <Link to={`/quiz-project/quizes`} style={{textDecoration: 'None'}}>
                    <h1 className={styles.Button}>Play more</h1>
                    </Link>
                   

                </div>
                </div>
                
                </div>
              

    

            </>
           
            }
      
            
        
            {!Quiz && <Error  
            width={width} 
            handleMobileOptions={handleMobileOptions}
            showOptions={showOptions}
            limit={limit}/>}
           

                            
        
        </>
       
    )
}

export default MainGame