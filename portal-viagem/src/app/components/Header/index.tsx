import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {

    return(
        <header className={styles.header}>
            <div className={styles.header__container}>
                <h1 className={styles.header__logo}>
                    <Link href='/'>Portal de Viagens KR</Link>
                </h1>
            <nav className={styles.header__nav}>
                <Link href="/">Inicio</Link>
                <Link href="/destinos">Destinos</Link>
            </nav>
            </div>
        </header>
    );
}
export default Header;