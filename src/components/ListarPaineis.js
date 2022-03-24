import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';

function Search({ details, props }) {



  const [searchField, setSearchField] = useState(props);
  const [searchShow, setSearchShow] = useState(true);

  const filteredPersons = details.filter(
    
    person => {
      return (
        person
        .categoria
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
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
    else  {
      setSearchShow(true);
      
    }
  };

  function searchList() {
  	if (searchShow) {
	  	return (
	  
	  			<SearchList filteredPersons={filteredPersons} />
	 
	  	);
	  }
  }

  return (
    <section className="garamond">
			
			<div className="pa2">

			</div>
			{searchList()}
		</section>
  );
}

export default Search;