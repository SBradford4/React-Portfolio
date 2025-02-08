import Navbar from "./Navbar"

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header">
                    <a href="/" className="logo">Shelia</a>
                    <Navbar />
                </div>
            </div>
        </header>
    )
}

export default Header