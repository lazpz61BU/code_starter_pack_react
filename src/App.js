import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
// import {Button, Row, Col, CardImg, CardTitle, CardSubtitle, CardText, CardBody,
//   FormFeedback, Container, Card, Modal, ModalHeader, ModalBody, Input, FormText
// } from 'reactstrap';
// https://learn.co/lessons/react-container-components
//https://blog.logrocket.com/react-native-sectionlist-tutorial-examples/
class App extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false            
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    //fetches the data as a json from the database
    componentDidMount() {
        fetch(
"https://code-starter-pack-python.herokuapp.com/website/get")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    //redners the data in a table
    renderTableData() {
      return this.state.items.map((website, index) => {
         const { id, category, resource, url } = website //destructuring
         return (
            <tr key={id}>
               <td>{id}</td>
               <td>{category}</td>
               <td>{resource}</td>
               <td>{url}</td>
            </tr>
         )
      })
   }

    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
        //getting all the categories
        const categories = new Set()
        for(var website in items) {
          for (var detail in items[website]) {
            if (detail === "category"){
              categories.add(items[website][detail])
            }
          }
        }
      
        return (
        <div className = "App">
          <header className="App-header">
            <div>
              <h1 id='title'>Code Starter Pack</h1>
              <table id='websites'>
                <tbody>
                    {this.renderTableData()}
                </tbody>
              </table>
            </div>
            {/* <div>
              <h1> Fetch data from an api in react </h1>  {
                  items.map((item) => ( 
                  <ol key = { item.id } >
                      category: { item.category }, 
                      resource: { item.resource }, 
                      url: { item.url } 
                      </ol>
                  ))
              }
            </div> */}
          </header>

        </div>
    );
}
}
   
export default App;