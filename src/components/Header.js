import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <header>
            <Link to="/">
                <h1>iStocks</h1>
            </Link>
            <Link to="/stocks">
                <h2>Stocks</h2>
            </Link>
            <Link to="/about">
                <h2>About</h2>
            </Link>
        </header>
    )
}

export default Header