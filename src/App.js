import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import { YMaps } from "@pbe/react-yandex-maps";

import Users from "./users/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";

const App = () => {
  return (
    <Router> 
      <MainNavigation />
      <main>
        <YMaps query={{ apikey: '36ac4800-fc10-4589-8ef3-27df656cf1c0' }}>
          <Switch>
            <Route path="/" exact>
              <Users />
            </Route>
            <Route path="/:userId/places" exact>
              <UserPlaces />
            </Route>
            <Route path="/places/new" exact>
              <NewPlace />
            </Route>
            <Redirect to="/" />
          </Switch>
        </YMaps>
      </main>
    </Router>
  );
};

export default App;
