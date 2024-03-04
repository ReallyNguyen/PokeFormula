import styles from './Button.module.css'
import { useRouter } from 'next/router';

interface IButton {
    name: string;
    link: string;
    func?: React.MouseEventHandler<HTMLButtonElement>;
    type: string;
}

export default function Button({ link, name, type, func }: IButton) {
    const router = useRouter()

    const handleNavigation = () => {
        router.push(link);
    };

    return (
        <>
            {type === "nav" ? (
                <button onClick={handleNavigation} className={styles.bigcontainer}>
                    <div className={styles.testing}>
                        <div className={styles.top}></div>
                        <div className={styles.container}>
                            <div className={styles.innerContainer}>
                                <h1 className={styles.title}>{name}</h1>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right}></div>
                </button>
            ) : type === "outcome" ? (
                <button onClick={func} className={styles.bigcontainer}>
                    <div className={styles.testing}>
                        <div className={styles.top}></div>
                        <div className={styles.container}>
                            <div className={styles.innerContainer}>
                                <h1 className={styles.title}>{name}</h1>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right}></div>
                </button>
            ) : null}
        </>
    )
}
