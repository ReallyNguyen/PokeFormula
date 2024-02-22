import Link from 'next/link';

import styles from './Footer.module.css';

export default function Footer() {
   
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerTop}>
                    <div className={styles.left}>
                        <div className={styles.logoContainer}>
                            <img src='../../images/logo.png' alt="Logo" className={styles.logo} />
                            <h4>PokeFormula</h4>
                        </div>
                        <p className={styles.copyright}>All rights reserved. Original Materials Copyright 2024. All other copyrights held by Nintendo 2024. ©</p>
                    </div>
                    <div className={styles.right}>
                        <Link href={"/battle"}>
                            <p>Battle</p>
                        </Link>
                        <Link href={"/dex"}>
                            <p>PokeDex</p>
                        </Link>
                        <Link href={"/profile"}>
                            <p>Account</p>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );


}