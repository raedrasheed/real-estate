import React from 'react'
//import { Link } from "react-router-dom"
import './Header.css'

const Header = () => {
    return (
        <React.Fragment>
            <header className="bg-image">
                <div className="bg-container">
                    <h1 style={{fontWeight: "normal"}}>
                      Real Estate Platform
                    </h1>
                    <h1>Accessible to All</h1>
                    <p>NFTs & Web3 for transparency, authenticity and sustainability
                    </p>
                    <a href="#properties" className="action">
                      See Our Properties
                    </a>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header;