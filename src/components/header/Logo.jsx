import React from 'react'
import { FaAward } from "react-icons/fa6";

const Logo = () => {
    return (
        <h1 className='header__logo'>
            <a href="/">
                <em><FaAward /></em>
                <span>history<br /><i>youtube</i></span>
            </a>
        </h1>
    )
}

export default Logo
