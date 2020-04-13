
import React, {Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import SignIn from "./components/pages/signin";
import MaterialTableDemo from "./components/pages/data"

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <NavTabs />

                    <Route exact path='/signin' component={SignIn} />
                    <Route path="/data" component={MaterialTableDemo} />
                    
                </div>
            </Router>
        );
    }
}

export default App;