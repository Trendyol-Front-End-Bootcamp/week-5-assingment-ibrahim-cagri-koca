import { Route, Router, Switch } from "react-router"
import CharacterFilter from "./CharacterFilter";
import CharacterPage from "./CharacterPage";
import React from "react";

const Dashboard = () => {
    return(        
            <Switch>
                <Route  exact path="/" component={CharacterFilter}></Route>
                <Route  exact path="/characters/:id" component={CharacterPage}></Route>
            </Switch>
    )

}

export default Dashboard;