
import React, {Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import SignUp from "./components/signup"
import Table from "./components/pages/data"
import DropDown from "./components/pages/progress";
import Home from "./components/pages/home";
import Dashboard from "./components/pages/dashboard"

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <NavTabs />
                    <Route exact path='/' component={Dashboard}/>

                    <Route path='/user' component={Home} />
                    <Route path="/patients" component={Table} />
                    <Route path="/progress" component={DropDown}/>
                    <Route path ="/signup" component={SignUp}/>
                                        
                </div>
            </Router>
        );
    }
}

export default App;