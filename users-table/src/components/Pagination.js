import React from 'react'

const Pagination = ({ colsPerPage, totalCols, paginate }) => { 
    
    const pageNumbers = [];
    for(let i=1; i <= Math.ceil(totalCols / colsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination d-flex justify-content-center">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;
