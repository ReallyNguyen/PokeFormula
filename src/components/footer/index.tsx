import React, { useState, useEffect } from 'react';
import styles from './Footer.module.css';

export default function Footer() {
   
    return (
        <div className={styles.footerOuterContainer}>
            <div className={styles.footerContainer}>
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
    );


}