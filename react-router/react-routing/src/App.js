import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import "./components/style.css"
import About from './components/About';
import Contact from './components/Contact';
import "./components/my-sass.scss"

// To install routing
// npm i -D react-router-dom

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact'element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App;
