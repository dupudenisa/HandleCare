
import React, {Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import SignIn from "./components/pages/signin";
import Data from "./components/data"
import Progress from "./components/pages/progress"
import SignUp from "./components/signup"
import Table from "./components/pages/data"

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <NavTabs />

                    <Route exact path='/signin' component={SignIn} />
                    <Route path="/patients" component={Table} />
                    <Route path="/progress" component={Progress}/>
                    <Route path ="/signup" component={SignUp}/>
                                        
                </div>
            </Router>
        );
    }
}

export default App;