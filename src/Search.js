import React, {Component} from 'react';
import './Search.css';

class Search extends Component{
    render(){
        const {value, update} = this.props;
        return (
            <div>
                <form>
                    <label htmlFor="input"></label>
                    <input 
                    id="input"
                    value={value}
                    onChange={(event)=>{update(event)}}></input>
                </form>
            </div>
        )
    }
}

export default Search;