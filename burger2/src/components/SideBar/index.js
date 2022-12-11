import React from "react";
import Shadow from "../General/Shadow";
import Logo from "../Logo";
import Menu from "../Menu";
import css from "./style.module.css";


const SideBar = () => {
    return (
        <div>
            <Shadow show />
            <div className={css.SideBar}>
                <div className={css.Logo}>
                    <Logo />
                </div>
                <Menu />
            </div>
        </div>
        
    );
};



export default SideBar;