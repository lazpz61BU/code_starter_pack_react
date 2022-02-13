import React, { useEffect, useState } from 'react'
import {
  Row, Col, CardImg,
  Container, Card, CardHeader
} from 'reactstrap';
import './App.css';



export default function ItemContainer({ selected, category_json }) {
  const [itemCategory, setItemCategory] = useState({})
  useEffect(() => {
    if (category_json) {

      if (!selected || selected === "Filter by Category") {
        setItemCategory(category_json)
      } else {
        const filterCategories = { [selected]: category_json[selected] }
        setItemCategory(filterCategories)
      }
    }
  }, [selected, category_json]);



  return (
           <Container id="Container">
                
                {Object.keys(itemCategory).map(category => {
                  return (
                    <Row key ={category} style = {{paddingTop: '70px', paddingBottom: '70px'}}>
                      <h1 className="header-style" style={{ fontWeight: 'bold' }}>{category}</h1>
                    
                      {itemCategory[category].map(website => {
                      return (
                        <Col key={website.id} s={1}>
                          <a style= {{color: 'Black', fontWeigt: 'bold', textDecorationLine: 'none'}} href={website.url} target="_blank" >
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
   )
}