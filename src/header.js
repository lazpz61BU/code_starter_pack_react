import React, { useState, useEffect } from 'react'
import './header.css'
import { Container, DropdownButton, Dropdown } from 'react-bootstrap';

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

  const [selected, setSelected] = useState('Filter by Category');

  useEffect(() => {
    props.handleDropdownUpdate(selected);
  }, [selected]);

  const handleSelect = (value) => {
    props.handleDropdownUpdate(value);
    setSelected(value);
  }

  const imageClick = () => {
    setSelected("Filter by Category");
  }

  return (


    <Container className="header" >

      <h1 onClick={() => imageClick()} style={{ cursor: 'pointer' }}>
        <img src="LogoNoWords.png" style={{ paddingRight: '15px' }} />
              Code Starter Pack
            <ColoredLine color="black" />
      </h1>

      <DropdownButton id="dropdown-basic-button" title={selected} onSelect={handleSelect}>
        <Dropdown.Item key="Filter by Category" eventKey="Filter by Category">Clear Filter</Dropdown.Item>
        {Object.entries(props.resources).map(([key]) => (<Dropdown.Item key={key} eventKey={key}>{key}</Dropdown.Item>))}
      </DropdownButton>

    </Container>
  );
}


