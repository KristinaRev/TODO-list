import React from "react";
import './index.css'

class Input extends React.Component {
    render () {
        const {onChange, value} = this.props;

        return (
            <input 
            className="input"
            type="text" 
            value={value} 
            onChange={onChange}
            ></input>
        );
    }
}

export default Input;