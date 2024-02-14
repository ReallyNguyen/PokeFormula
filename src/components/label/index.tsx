import styles from './Label.module.css'

interface labelType {
    [key: string]: any;
}

export default function Label({title}: labelType){
    return (
        <>
            <div className={styles.outerContainer}>
                <div className={styles.rectangle}></div>
                <div className={styles.innerContainer}>
                    <div className={styles.triangle}></div>
                    <h1 className={styles.title}>{title}</h1>
                </div>
            </div>
        </>
    )
}
