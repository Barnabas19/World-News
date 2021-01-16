import React, {Component} from 'react';
import Search from './Search';
import Feed from './Feed';
import Button from './Button';
import './App.css'
import {list} from './Translate';

require('dotenv').config()

const {Translate, ButtonClick, Error} = list;

class App extends Component{
    constructor(props){
        super(props);
        this.updateSearchKey = this.updateSearchKey.bind(this);
        this.getNewsFeed = this.getNewsFeed.bind(this);
        this.state = {
            response: null,
            searchKey: 'nigeria'
        }
    }
    updateSearchKey(event){
        const updatedSearchKey = event.target.value;
        this.setState({searchKey: updatedSearchKey});
    }
    getNewsFeed(){
        const query = Translate(this.state.searchKey);
        if(query){
            const URL = `https://newsapi.org/v2/top-headlines?country=${query}&apiKey=${process.env.REACT_APP_API_KEY}`;
            const req = new Request(URL);
            fetch(req)
            .then(response => response.json())
            .then((responseJSON) => {
                const updatedResponse = responseJSON
                this.setState({response: updatedResponse})
            })
            .catch(()=>{
                Error();
                setTimeout(()=>{window.location.reload(true)}, 2000);
            })
        }else{
            setTimeout(()=>{window.location.reload(true)}, 2000);
        }
    }
    componentDidMount(){
        this.getNewsFeed()
    }
    render(){
        return (
            <div className="wrapper">
                <p className="instruction">Search by country name to get latest news all around the world.</p>
                <Search value={this.state.searchKey} update={this.updateSearchKey}/>
                <Button click={this.getNewsFeed} effect={ButtonClick}/>
                <div className="main">
                   {
                       this.state.response &&
                       <Feed response={this.state.response}/>
                   }
                </div>
            </div>
        )
    }
}

export default App