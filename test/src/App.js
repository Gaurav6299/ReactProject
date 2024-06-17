import logo from './logo.svg';
import './App.css';
import School from './components/School';
import Student from './components/Student';
import Teacher from './components/Teacher';
import Forms from './components/ReactForms/Forms';

function App() {
  const cars = ["FORD", "FORTUNER", "AUDI"]

  return (
    // <School isTest={true}/>
    <>
      {/* <Student cars={cars}/> */}
      {/* {cars.map((ele) =>
        <Teacher data={ele} />
      )} */}
      <Forms/>
    </>
  );
}

export default App;
