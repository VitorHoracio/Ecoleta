import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

// paginas
import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';
import CreateSuccess from './pages/CreateSuccess';

const Routes =  () => {
    return(
        <BrowserRouter>
            <Route component={Home} path="/" exact/>
            <Route component={CreatePoint} path="/create-point"/>
            <Route component={CreateSuccess} path="/create-success"/>
        </BrowserRouter>
    );
}

export default Routes;