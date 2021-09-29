import React from "react";



export const MyCoolButton = (props) => {
    const clickHandler = () => alert('Өнөөдөр : ${ new Date() }');
    return (
      <div>
        <span>{props.Tovchner ? props.Tovchner:'Good'} </span> <br/>
        <span>{'today : ${new Date()}'}</span>
        <br/>
        < input
          className="MyCoolButton" 
          type="button" 
          onClick={clickHandler}
          value={props.text ? props.text: 'chi' } 
        />
      </div>
    )
  };