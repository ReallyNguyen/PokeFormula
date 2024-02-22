import Link from 'next/link';

import styles from './Footer.module.css';

export default function Footer() {
   
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
<<<<<<< HEAD
            <div className={styles.logoRow}>
                    <div className={styles.logoLine}>
                    <img src='../../images/logo.png' alt="Logo" className={styles.logo} />

                    <h1 className={styles.logoTitle}>PokéFormula</h1>
                    <div className={styles.menudirection}>
                        <p>Home</p>
                        <p>Battle</p>
                        <p>PokéDex</p>
                        </div>
                    </div>

                    <div className={styles.marks}>
                    <p>ALl rights Reserved 2024</p>
                    </div>

            </div>
            <div className={styles.menuItems}>

                    </div>

            </div>
        </div>
=======
                <div className={styles.footerTop}>
                    <div className={styles.left}>
                        <div className={styles.logoContainer}>
                            <img src='../../images/logo.png' alt="Logo" className={styles.logo} />
                            <h4>PokeFormula</h4>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <Link href={""}>
                            <p>Battle</p>
                        </Link>
                        <Link href={""}>
                            <p>PokeDex</p>
                        </Link>
                        <Link href={""}>
                            <p>Account</p>
                        </Link>
                    </div>
                </div>
                <p className={styles.copyright}>All rights reserved. Original Materials Copyright 2024. All other copyrights held by Nintendo 2024. ©</p>
            </div>
        </footer>
>>>>>>> 48ca806f865327b028ab80bd05720d85e80ee47f
    );


}