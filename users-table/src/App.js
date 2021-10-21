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

const fetchName = async (user) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users?name=${user}`);
    const data = await response.json();
    const users = data.filter(user => {
      if(user.name.toLowerCase().includes(query)){
        return user;
      }
  });
    setData(users);
}

const fetchData = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await response.json();
    const users = data.filter(user => {
      if(user.name.toLowerCase().includes(query)){
        return user;
      }
  });
    setData(users);

    //  const response = await fetch(`https://jsonplaceholder.typicode.com/users?$filter=startsWith(name,Leanne Graham)`);
    //  const x = await response.json();
    //  console.log(query, x);
    //  setData(x);
}

// Get current column
const indexOfLastCol = currentPage * colsPerPage;
const indexOfFirstCol = indexOfLastCol - colsPerPage;
const currentCols = data.slice(indexOfFirstCol, indexOfLastCol);

// Change page
const paginate = (pageNumber) => setCurrentPage(pageNumber)

const onInputChange = (e) => {
  e.preventDefault();
  setQuery(e.target.value);
}

const clickedUser = (e) => {
  e.preventDefault();
  
  fetchName(e.target.innerText);
}

  return (
      <div className="App">
          <>
          <div className="search-bar-dropdown">
            <input type="text" className="form-control" placeholder="Search..." onChange={onInputChange} />
            <ul className="list-group search-dropdown">
              {query === '' ? '' : 
                Object.keys(data).map(option => (
                <button 
                    key={data[option].id}
                    type="button" 
                    onClick={clickedUser}
                    className="list-group-item list-group-item-action">
                      {data[option].name}
                </button>
                  ))}
                </ul>
          </div>
          </>
          <>
            <Datatable data={currentCols} />
            <Pagination  colsPerPage={colsPerPage} totalCols={data.length} paginate={paginate} />
          </>
      </div>
  )
}  

export default App;
