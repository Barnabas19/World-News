import React, {Component} from 'react';
import './Button.css';

class Button extends Component{
    render(){
        const {click, effect} = this.props;
        return (
            <button onClick={()=>{effect(); click()}} id="button">Search</button>
        )
    }

}

export default Button;