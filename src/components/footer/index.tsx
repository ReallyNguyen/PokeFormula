import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
   
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.logoContainer}>
                    <img src='../../images/logo.png' alt="Logo" className={styles.logo} />
                    <h1>PokeFormula</h1>
                </div>
                <h2>All rights reserved? 2024</h2>
            </div>
            <div className={styles.right}>
                <Link href={""}>
                    <h2>Battle</h2>
                </Link>
                <Link href={""}>
                    <h2>PokeDex</h2>
                </Link>
                <Link href={""}>
                    <h2>Account</h2>
                </Link>
            </div>
            
        </div>

    );


}