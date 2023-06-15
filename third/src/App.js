import './App.css';
import UseReducer from './components/UseReducer';
import React from 'react'
function App() {
  const [name,setName]=React.useState("gaurav")
  return (
    // <UseReducer name={name}/>
    <UseReducer />
  );
}

export default App;
