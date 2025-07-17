import React from 'react';
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
const Footer = () => {
    return (

        <footer className={classes.contentFooter}>
            <div className={classes.contentPay}>
                <Link className={classes.visa} to="/"></Link>
                <Link className={classes.mastercard} to="/"></Link>
                <Link className={classes.skrill} to="/"></Link>
            </div>
            <div className={classes.contentContacts}>
                <Link className={classes.contactsInfo} to="/">Contacts</Link>
                <Link className={classes.contactsInfo} to="/">Rules</Link>
                <Link className={classes.contactsInfo} to="/">FAQ</Link>
            </div>
            <p className={classes.copy}>&copy; 2025 [cosmobet.com] All rights reserved.</p>
        </footer>

    );
}

export default Footer;
