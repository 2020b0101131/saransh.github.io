import './App.css';
import './index.css';
import "./global.css";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import EmployeeDetails from './pages/employeedetails';

const App = () => {
        return (
            /*
            <>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="expenses" element={<Expenses/>}/>
              <Route path="invoices" element={<Invoice/>}/>
            </Routes>
            </>
            */
            <
            >
            <
            Routes >
            <
            Route path = "/detail"
            element = { < EmployeeDetails / > }
            /> <
            Route path = "/"
            element = { < Home / > }
            /> <
            /Routes> <
            />
        )
    }
    /*
    function Home(){
      return(
        <main style={{padding:"1rem 0"}}>
          <h2>Home</h2>
        </main>
      );
    }
    function Expenses(){
      return(
        <main style={{padding:"1rem=0"}}>
          <h2>Expenses</h2>
        </main>
      );
    }
    function Invoices(){
      return(
        <main style={{padding:"1rem=0"}}>
          <h2>Invoices</h2>
        </main>
      );
    }
    */

export default App;