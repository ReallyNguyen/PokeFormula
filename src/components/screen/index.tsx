import styles from './Screen.module.css'

interface IScreen {
    [key: string]: any
}

export default function Screen({title}: IScreen){
    return(
        <>
            <div className={styles.container}>
                <div className={styles.circleContainer}>
                    <div className={styles.circle}></div>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.innerContainer}>
                    <h1>{title}</h1>
                </div>
                <div className={styles.bigCircle}></div>
            </div>
            
        </>

    )
}