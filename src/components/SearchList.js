import React from 'react';
import Card from './pages/pagesBI/GraphItem';

function SearchList({ filteredPersons }) {
  const filtered = filteredPersons.map( person =>  <Card key={person.titulobi} person={person} />); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchList;