import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import styles from './Header.module.css';

export default function Header() {
    const [isMobile, setIsMobile] = useState(false);
    const router = useRouter();

    const handleNavigation = (path: string) => {
        router.push(path);
    };

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
                    <h1 className={styles.h1}>PokéFormula</h1>
                </div>
                {isMobile ? (
                    <div className={styles.mobileMenuIcon}>
                        
                    </div>
                ) : (
                    <div className={styles.menuItems}>
                        <a onClick={() => handleNavigation('/')}>Home</a>
                        <a onClick={() => handleNavigation('/battle')}>Battle</a>
                        <a onClick={() => handleNavigation('/dex')}>Dex</a>
                    </div>
                )}
            </div>
        </header>
    );
}
