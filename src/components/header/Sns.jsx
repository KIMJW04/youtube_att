import React from 'react'
import { snsLinks } from "../../data/menu.js";
import { Link } from 'react-router-dom';

const Sns = () => {
    return (
        <div className='header__sns'>
            <ul>
                {snsLinks.map((sns, key) => (
                    <li key={key}>
                        <Link to={sns.icon} target="_blank" rel="noopener noreferrer" aria-label={sns.title}>
                            <span>{sns.icon}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sns
