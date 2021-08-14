import React from 'react';
import "./Pagination.css"

const Pagination = ({ charsPerPage, totalChars, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalChars / charsPerPage); i++) {
    pageNumbers.push(i);
  }
  
  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li style={{width:"50px",marginLeft:"5px"}}key={number} id={number} className='page-item'>
            <a onClick={()=>paginate(number)} href="#3" className='page-link'> 
              {number}</a>
            
            
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;