import React from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import FilmCard from './views/FilmCard';
import Home from './views/Home';
import PeopleCard from './views/PeopleCard';
import NavBar from './views/NavBar';

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/films">
                    <FilmCard/>
                </Route>
                <Route exact path="/persons">
                    <PeopleCard/>
                </Route>
                <Redirect from="*" to="/"/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
