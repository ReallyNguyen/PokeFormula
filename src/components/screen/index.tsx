import styles from './Screen.module.css'

interface IScreen {
    [key: string]: any
}

export default function Screen({title}: IScreen){
    return(
        <div className={styles.container}>
            {title}
        </div>
    )
}