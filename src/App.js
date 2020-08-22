import React from 'react'
import Home from './Home'
import About  from '../src/components/About'
import Service  from '../src/components/Service'
import Contact from '../src/components/Contact'
import { Switch,Route} from 'react-router-dom';
import Navbar from '../src/components/Navbar'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

const App = () =>{

  return (
    <>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/service" component={Service} ></Route>
        <Route exact path="/contact" component={Contact} ></Route>
      </Switch>
   </>
  );
};

export default App;