import { Link } from "./Link";

export function Header() {
    return (
        <>
            <header>
                <h1>Jabalís</h1>
                <nav aria-label="nav bar">
                    <Link href="./42k">42k</Link>
                    <Link href="./21k">21k</Link>
                    <Link href="./10k">10k</Link>
                </nav>
            </header>
            
        </>
    )
}