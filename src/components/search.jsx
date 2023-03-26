import React from 'react'
import './search.css';

function Search(props) {
  return (
    <div>
    <input className='search' placeholder={`Pesquisar ${props.labelName}`}/>
    </div>
  )
}

export default Search