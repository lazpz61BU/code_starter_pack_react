import React from 'react'
import './header.css';
import {Container} from 'reactstrap'
const ColoredLine = ({ color }) => (
   <hr
     style={{
       color,
       backgroundColor: color,
       height: 5
     }}
   />
 );

export default function Header(props) {

   return (
     <Container className="header" >
         <h1 > 
            <img src="LogoNoWords.png" style={{paddingRight: '15px'}}/>   
            Code Starter Pack
            <ColoredLine color= "black" />
         </h1>
     </Container>
   )
}