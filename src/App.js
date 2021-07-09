import {BrowserRouter, Route} from "react-router-dom";
import Admin from "./admin/Admin";
import Main from "./main/Main";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Route path='/main' exact component={Main}/>
                <Route path='/admin' exact component={Admin}/>
            </BrowserRouter>
        </div>
    );
}

export default App