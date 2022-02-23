import './App.css';
import Form from "./Components/Form"
import { useState, useEffect } from 'react'
function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/';
  const [reqType, setReqType] = useState('get')
  const [Items, setItems] = useState()

  useEffect(
    () => {
     async function fetchItems (){
      try {
        console.log(`${API_URL}${reqType}`);
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        setItems(data);
        console.log(data)
      } catch (err) {
        console.log(err);
      }
    }

    fetchItems();

  }, [reqType])


  return (
    <div className="App">
      
      <Form reqType={reqType} setReqType={setReqType} />
    </div>
  );
}

export default App;
