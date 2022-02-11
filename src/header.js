import React, {useState, useEffect} from 'react'
import './header.css'
import {DropdownButton} from 'react-bootstrap';
import {UncontrolledDropdown, Container,DropdownItem} from 'reactstrap'
const ColoredLine = ({ color }) => (
   <hr
     style={{
       color, 
       backgroundColor: color,
       height: 5
     }}
   />
 );

export default function Header(props){

  const [selected, setSelected] = useState('');


  useEffect(() => {
    props.handleDropdownUpdate(selected);
  }, [selected]);

  const handleSelect=(event)=>{
    console.log(event);
    setSelected(event.target.value);
  }

  const imageClick=()=>{
    setSelected('');
    console.log("image clicked");
  }
  console.log(selected);
 
   return (


     <Container className="header" >
         <h1 onClick={()=> imageClick()} style={{cursor: 'pointer'}}> 
            <img src="LogoNoWords.png" style={{paddingRight: '15px'}} />   
              Code Starter Pack
            <ColoredLine color= "black" />
         </h1>
         
         <UncontrolledDropdown>
           <DropdownButton id="dropdown-basic-button" title="Filter by Category" data-bs-toggle="dropdown">
              {Object.entries(props.resources).map(([key]) =>(<DropdownItem value={key} key={key} onClick={handleSelect}>{key}</DropdownItem>))} 
           </DropdownButton>
         </UncontrolledDropdown>

      



  

     </Container>
     
     
   );
}


