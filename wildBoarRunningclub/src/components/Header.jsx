import { useAuth } from "../context/AuthContext";
import styles from "./Header.module.css"

export function Header() {
    const { isLoggedIn, handleLogin, handleLogout } = useAuth();

    return (
        <>
            <header>
                <article className="header-logo">
                    <img src="./src/assets/wildboar.png" alt="wildboar nsl" className="header-img"></img>
                    <h1 >Jabalís</h1>
                </article>
                <button className={styles.btnUser} onClick={isLoggedIn ? handleLogout : handleLogin}>
                    <svg className={styles.iconUser} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                 </button>
            </header>
            
        </>
    )
}