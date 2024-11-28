import styles from './Create.module.css'


function CreateHeader(){
    return(
        <header className={styles.CreateHeader}>
        
        <div className={styles.TitleText}>

        <h1>Name</h1>
        <input className={styles.TitleInput}></input>

        </div>

        <div className={styles.SaveButton}>

            <h1>Save</h1>

        </div>
       

    </header>
    )
}

export default CreateHeader