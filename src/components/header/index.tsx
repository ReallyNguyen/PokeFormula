import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './Header.module.css';

export default function Header() {
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();

    const handleNavigation = (path: string) => {
        router.push(path);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1000);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerInnerContainer}>
                <div>
                    <a href='/' className={styles.logoRow}>
                        <img src='../../images/logo.png' alt="Logo" className={styles.logo} />
                        <h1 className={styles.h1}>PokéFormula</h1>          
                    </a>
                </div>
                {isMobile ? (
                    <div className={styles.mobileMenuIcon} onClick={toggleMenu}>
                        <img src={'../../images/menu.svg'} width={30} height={30} alt='menu' />
                    </div>
                ) : (
                    <div className={styles.menuItems}>
                        <a href='/'>Home</a>
                        <a href='/battle'>Battle</a>
                        <a href='/dex'>PokéDex</a>
                        <a href='/browse'>TCG</a>
                    </div>
                )}
            </div>
            {/* Render menu items conditionally based on menuOpen state */}
            {isMobile && menuOpen && (
                <div className={styles.mobileMenu}>
                    <div className={styles.closeIcon} onClick={toggleMenu}>
                        X
                    </div>
                    <div className={styles.mobileMenuItems}>
                        <a href='/' onClick={toggleMenu}>Home</a>
                        <a href='/battle' onClick={toggleMenu}>Battle</a>
                        <a href='/dex' onClick={toggleMenu}>PokéDex</a>
                        <a href='/profile' onClick={toggleMenu}>Account</a>
                    </div>
                </div>
            )}
        </header>
    );
}
