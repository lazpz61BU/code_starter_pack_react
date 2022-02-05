import './App.css';
import React from "react";
import Header from './header.js';
import { Row, Col, CardImg, 
  Container, Card, CardHeader
} from 'reactstrap';
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
    //renders the data in a table
    renderTableData() {
      return this.state.items.map((website, index) => {
         const { id, category, resource, url, logo } = website //destructuring
         return (
            <tr key={id}>
               <td>{id}</td>
               <td>{category}</td>
               <td>{resource}</td>
               <td>{url}</td>
               <td>{logo}</td>

            </tr>
         )
      })
   }

    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Please wait some time.... </h1> </div> ;
        //getting all the categories
        const categories = new Set()
        for(var website in items) {
          for (var detail in items[website]) {
            if (detail === "category"){
              categories.add(items[website][detail])
            }
          }
        }
        const category_json =  {}
        for(var i in items) {
          var a = items[i];
          if(!(a.category in category_json)) {
              category_json[a.category] = [];
          }
          category_json[a.category].push({ category: a.category, id: a.id, logo: a.logo, resource: a.resource, url: a.url });
        }
        console.log(category_json)
        return (
          <div className = "App" >
            <header className="App-header">

             {/* <Header resources={category_json}/> */}

              <Header/>
              <Container >
                {Object.keys(category_json).map(category => {
                  return (
                    <Row key ={category} style = {{paddingTop: '70px', paddingBottom: '70px'}}>
                      <h1 className="header-style" style={{ fontWeight: 'bold' }}>{category}</h1>
                      {category_json[category].map(website => {
                      return (
                        <Col key={website.id} >
                          <a style= {{color: 'Black', fontWeigt: 'bold', textDecorationLine: 'none'}} href={website.url} >
                            <Card style={{  justifyContent: 'center', 
                              backgroundColor: 'rgba(165,157,160,0.2)'}} >
                              <CardHeader style={{ fontWeight: 'bold' }}> {website.resource}</CardHeader>
                                <CardImg src={website.logo} className="image" alt="Card image"/>
                            </Card>
                          </a>
                        </Col>
                      )
                      })}
                    </Row>
                  );
                })}
              </Container>
            </header  >
          </div>
      );
}
}
   
export default App;