import './App.css';
import React,{ useState, useEffect } from 'react';
import Datatable from './components/Datatable';
import Pagination from './components/Pagination';

const App = () => {

  const  [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [colsPerPage,] = useState(3);

  useEffect(() => {
      fetchData();
}, [query])

const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
       .then(res => res.json())
       .then(data => {
           const response = data.filter(user => {
               if(user.name.toLowerCase().includes(query)){
                 return user;
               }
           });
           setData(response);
       })
}

// Get current column
const indexOfLastCol = currentPage * colsPerPage;
const indexOfFirstCol = indexOfLastCol - colsPerPage;
const currentCols = data.slice(indexOfFirstCol, indexOfLastCol);

// Change page
const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
      <div className="App">
          <>
            <input  type="text" placeholder="Search..." value={query} onChange={(e) => {
                e.preventDefault();
                setQuery(e.target.value);
            }}/>
          </>
          <>
            <Datatable data={currentCols} />
            <Pagination  colsPerPage={colsPerPage} totalCols={data.length} paginate={paginate} />
          </>
      </div>
  )
}  

export default App;
