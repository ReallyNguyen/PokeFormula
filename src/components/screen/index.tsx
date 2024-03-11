import styles from './Screen.module.css'

export default function Screen({ children }: IScreen) {
    return (
        <>
            <div className={styles.bigcontainer}>
                <div className={styles.testing}>
                    <div className={styles.top}></div>
                    <div className={styles.container}>
                        <div className={styles.circleContainer}>
                            <div className={styles.circle}></div>
                            <div className={styles.circle}></div>
                        </div>
                        <div className={styles.innerContainer}>
                            {children}
                        </div>
                        <div className={styles.bigCircle}></div>
                    </div>
                </div>
                <div className={styles.right}></div>
            </div>
        </>
    )
}
