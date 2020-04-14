
import React, {Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import SignIn from "./components/pages/signin";
import Table from "./components/pages/data"
import Progress from "./components/pages/progress"
import SignUp from "./components/signup"

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <NavTabs />

                    <Route exact path='/signin' component={SignIn} />
                    <Route path="/data" component={Table} />
                    <Route path="/progress" component={Progress}/>
                    <Route path ="/signup" component={SignUp}/>
                                        
                </div>
            </Router>
        );
    }
}

export default App;