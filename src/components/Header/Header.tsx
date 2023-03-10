import React, { FC } from 'react';
import s from './Header.module.css';
import { Link } from 'react-router-dom';

const Header: FC = () => {
    return (
        <header className="header">
            <Link to='' className={s.logo_link}>
                <h1 className={s.logo}>Hacker News</h1>
            </Link>
        </header>
    );
};

export default Header;