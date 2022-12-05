import React from "react";
import MenuItem from "../MenuItem";
import css from "./style.module.css"

const Menu = () => (
    <div>
        <ul className={css.Menu}>
            <MenuItem active link="/">Бургер</MenuItem>
            <MenuItem active link="checkout">Төлбөр</MenuItem>
        </ul>
    </div>
    
);




export default Menu;