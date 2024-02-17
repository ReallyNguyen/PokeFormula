import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerInnerContainer}>
                <div className={styles.logoRow}>
                    <img src='../../images/logo.png' alt="Logo" className={styles.logo} />
                    <h1>PokéFormula</h1>
                </div>
                {isMobile ? (
                    <div className={styles.mobileMenuIcon}>
                        
                    </div>
                ) : (
                    <div className={styles.menuItems}>
                        <Link href='/'>Home</Link>
                        <Link href='/battle'>Battle</Link>
                        <Link href='/dex'>Dex</Link>
                    </div>
                )}
            </div>
        </header>
    );
}
