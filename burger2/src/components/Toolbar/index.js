import React from "react";
import css from  "./style.module.css"
import Logo from "../Logo";
import Menu from "../Menu";
import HamburgerMenu from "../HamburgerMenu";

const Toolbar = (props) => (
    <header className={css.Toolbar}>
        <HamburgerMenu toggleSideBar={props.toggleSideBar}/>
        <Logo />
        <nav className={css.HideOnMoblie}>
            <Menu />
        </nav>
    </header>
);



export default Toolbar;