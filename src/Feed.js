import React, {Component} from 'react';
import './Feed.css';

class Feed extends Component{
    render(){
        const {response} = this.props;
        var list;
        if(response.articles){
            list = response.articles;
        }else{
            list = [];
        }
        return (
            <div className="feeds">
                {
                    list.map((item, index)=>{
                        return (
                            <div key={item.source.id + `${index}`} className="container">
                                <img src={item.urlToImage} alt=""></img>
                                <h1>{item.title}</h1>
                                <section>{item.description}</section>
                                <br/>
                                <article>{item.content}</article>
                                <p>Read <a href={item.url}>More</a></p>
                                <span>Author: {item.author}</span>
                                <br/><br/>
                                <p>Source: {item.source.name}</p>
                                <p>Published At: {item.publishedAt}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Feed;