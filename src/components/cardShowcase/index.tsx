import styles from './CardShowcase.module.css'

export default function CardShowcase() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>Pokémon/Card ShowCase</h1>
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                </div>
            </div>
        </>
    )
}