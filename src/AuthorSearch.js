import React from 'react';
import axios from 'axios';
import "./style.css";


const inputStyle = {
    fontSize : 20,
}

const buttonStyle = {
    color : 'black',
    background : 'orange',
    fontSize : 20,
}

export default class AuthorSearch extends React.Component{
    constructor(){
        super();
        this.state = 
        {
        title : '',
        apiResponse : '',           
    }
    }

    handleChange = event =>{
        this.setState({
            title: event.target.value,
        })
    }
    handleClick = event =>{
        this.getAuthor();
    }
    getAuthor(){
        axios.get(this.state.title)
        .then(res => this.setState({ apiResponse: res.data }))
        .catch(err => console.log(err));
    }

    render(){
        // hit a button that accesses search ad calls getAuthor with whatver they typed in, use response
        // of getauthor and display it on the webpage
        return(
            <div className = "Backg">
            <div className = "Title">
            <h2>Author Search</h2>
            </div>
            <div className = "Buttons">
            <input type="text" style = {inputStyle} id="filter" placeholder="Enter book title..."  onChange={this.handleChange}/>
            <input type = "submit" style = {buttonStyle} onClick={this.handleClick}/>
            <h3> Author: {this.state.apiResponse}</h3>
            </div>
            </div>
        )
        
    }
}