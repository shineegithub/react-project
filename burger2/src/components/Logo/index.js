import React from "react";
import css from "./style.module.css"
import logoImages from "../../assets/images/pngtree-burger.png"


const Logo = () => (
    <div className={css.Logo}>
        <img src ={logoImages} />
    </div>
);



export default Logo;