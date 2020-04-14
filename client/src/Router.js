
import React, {Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import SignIn from "./components/pages/signin";
import Data from "./components/pages/data"
import Progress from "./components/pages/progress"

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <NavTabs />

                    <Route exact path='/signin' component={SignIn} />
                    <Route path="/data" component={Data} />
                    <Route path="/progress" component={Progress}/>
                    
                </div>
            </Router>
        );
    }
}

export default App;