import React from 'react'
import './App.css';
import Navbar from './Root/Layout/Component/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Root/Layout/Component/Home/Home';
import About from './Root/Layout/Component/About/About';
import EmployeeList from './Employees/Components/EmployeeList';
import StockList from './Stocks/Components/StoskList';
import EmployeeDetail from './Employees/Components/EmployeeDetail';
import StockDetails from './Stocks/Components/StockDetails';
import Footer from './Root/Layout/Component/Footer';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/Employee" component={EmployeeList}></Route>
          <Route exact path="/Employee/:emp_id" component={EmployeeDetail}></Route>
          <Route exact path="/stock" component={StockList}></Route>
          <Route exact path="/stock/:stock_id" component={StockDetails}></Route>
          <Route exact path="/About" component={About}></Route>
        </Switch>
      </Router>
      <Footer/>

    </React.Fragment>
  );
}

export default App;
