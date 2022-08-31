import React from 'react';
import{BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../Pages/Login';
import Coworking from '../components/Pages/Coworking';

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}/>
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;