import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { AiOutlineSearch } from "react-icons/ai";
import './Navbar.css';
function Search({ details }) {

  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);

  const filteredPersons = details.filter(
    person => {
      return (
        person
        .titulobi
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        person
        .palavraschave
        .toLowerCase()
        .includes(searchField.toLowerCase())||
        person
        .categoria
        .toLowerCase()
        .includes(searchField.toLowerCase())||
        person
        .legend
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
    if(e.target.value===""){
      setSearchShow(false);
    }
    else {
      setSearchShow(true);
    }
  };

  function searchList() {
  	if (searchShow) {
	  	return (
	  		<Scroll>
	  			<SearchList filteredPersons={filteredPersons} />
	  		</Scroll>
	  	);
	  }
  }

  return (
    <div className = "search">

<Form>
  <div className="align-items-center">
    <Col sm={8} className="my-1">
      <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
        Name
      </Form.Label>
    </Col>
    <Col sm={4} className="my-1">
      <Form.Label htmlFor="inlineFormInputGroupUsername" visuallyHidden>
        Pesquisar no Portal
      </Form.Label>
      <InputGroup>
        <InputGroup.Text><AiOutlineSearch/></InputGroup.Text>
        <FormControl id="inlineFormInputGroupUsername" placeholder="Pesquisar no Portal" 	onChange = {handleChange} />
        <Col sm={4} >

      </Col>
      </InputGroup>
    </Col>
  </div>
</Form>
{searchList()}

    </div>
  );
}

export default Search;