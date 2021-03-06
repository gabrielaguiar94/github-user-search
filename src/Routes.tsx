import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './core/components/NavBar';
import Home from './core/pages/Home';
import Search from './core/pages/Search';

const Routes = () => (
    <BrowserRouter>
        <NavBar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/search">
                <Search />
            </Route>            
        </Switch>
    </BrowserRouter>
);

export default Routes;