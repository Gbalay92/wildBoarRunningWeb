import { Link } from "./Link";

export function Header() {
    return (
        <>
            <header>
                <article className="header-logo">
                    <img src="./src/assets/wildboar.png" alt="wildboar nsl" className="header-img"></img>
                    <h1 >Jabalís</h1>
                </article>
                <nav aria-label="nav bar">
                    <Link href="./42k">42k</Link>
                    <Link href="./21k">21k</Link>
                    <Link href="./10k">10k</Link>
                </nav>
            </header>
            
        </>
    )
}