import './App.css';
import React from "react";
import Header from './header.js';
import ItemContainer from './itemContainer';

class App extends React.Component {

  // Constructor 
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
      selected: null,
      isSelected: false



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

  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div>
      <h1> Please wait some time.... </h1> </div>;
    //getting all the categories
    const categories = new Set()
    for (var website in items) {
      for (var detail in items[website]) {
        if (detail === "category") {
          categories.add(items[website][detail])
        }
      }
    }
    const category_json = {}
    for (var i in items) {
      var a = items[i];
      if (!(a.category in category_json)) {
        category_json[a.category] = [];
      }
      category_json[a.category].push({ category: a.category, id: a.id, logo: a.logo, resource: a.resource, url: a.url });
    }

    const handleDropdownUpdate = (selectedOption) => {
      this.setState({
        selected: selectedOption,
        isSelected: true
      })
    }

    return (
      <div className="App" >

        <header className="App-header">

          <Header resources={category_json} selected={this.state.props} handleDropdownUpdate={handleDropdownUpdate} />
          <ItemContainer selected={this.state.selected} category_json={category_json} />
        </header  >
      </div>





    );
  }
}


export default App;