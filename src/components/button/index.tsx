import styles from './Button.module.css'
import { useRouter } from 'next/router';

interface IButton {
    name: string;
    link: string;
}

export default function Button({ name, link }: IButton) {
    const router = useRouter()

    const handleNavigation = () => {
        router.push(link);
    };

    return (
        <>
            <button onClick={handleNavigation} className={styles.bigcontainer}>
                <div className={styles.testing}>
                    <div className={styles.top}></div>
                    <div className={styles.container}>
                        <div className={styles.circleContainer}>
                            <div className={styles.circle}></div>
                            <div className={styles.circle}></div>
                        </div>
                        <div className={styles.innerContainer}>
                            <h1 className={styles.title}>{name}</h1>
                        </div>
                        <div className={styles.bigCircle}></div>
                    </div>
                </div>
                <div className={styles.right}></div>
            </button>
        </>
    )
}
