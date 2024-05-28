import React from 'react'

import { headerMenus, searchKeyword } from "../../data/menu.js";
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <nav className='header__menu'>
            <ul className='menu'>
                {headerMenus.map((menu, key) => (
                    <li key={key}>
                        <Link to={menu.src}>{menu.icon} <i>{menu.title}</i></Link>
                    </li>
                ))}
            </ul>
            <ul className='keyword'>
                {searchKeyword.map((keyword, key) => (
                    <li key={key}>
                        <Link to={keyword.src}>
                            {keyword.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Menu
