import React from "react";
import './index.css'
import Button from "../Button";


const ListItem = ({todoname, remove}) => {
    return (
        <div className="item">
            <div className="item__text">
                {todoname}
            </div>
            <Button name="remove" 
            onClick={()=> remove(todoname)}
            customClass="item__btn"/>
        </div>
    )
}

export default ListItem;