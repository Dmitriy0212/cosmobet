import React from 'react';
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import classNames from 'classnames';
const Header = () => {
    return (
        <div className={classes.myconteiner}>
            <header className={classes.header}>
                <div className={classes.nuv1}>

                    <Link className={classes.myLinkA} to="/"><img src="/logo.png" alt="" /></Link>
                    <div className={classes.nuv2}>
                        <Link className={classNames(classes.button, classes.registration)}  to="/">Registration</Link>
                        <Link className={classNames(classes.button, classes.login)} to="/">Log In</Link>
                    </div>

                </div>
                <div>
                <Link className={classes.nuvlinc} to="/">Home</Link>
                <Link className={classes.nuvlinc} to="/">Review</Link>
                <Link className={classes.nuvlinc} to="/">Bonus</Link>
                <Link className={classes.nuvlinc} to="/">Spins</Link>
                </div>
            </header>
        </div>
    );
}

export default Header;
