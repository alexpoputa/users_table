import './App.css';
import React,{ useState, useEffect } from 'react';
import Datatable from './components/Datatable';

const App = () => {

  const  [data, setData] = useState([]);

  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
         .then(res => res.json())
         .then(response => setData(response))
  }, [])

  return (
      <div className="App">
          <Datatable data={data} />
      </div>
  )
}  

export default App;
