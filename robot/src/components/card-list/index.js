import react from "react";

import "./style.css";

export const Cardlist = props => (
    <div>
        {props.robots.map(element => (
          <div>{element.name}</div>
        ))}

    </div>
);
    
