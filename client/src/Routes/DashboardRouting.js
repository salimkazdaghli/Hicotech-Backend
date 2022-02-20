import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AccountPage from "../Pages/coachSpace/AccountPage/AccountPage";
import AccueilPage from "../Pages/coachSpace/Accueil/AccueilPage";

const DashboardRouting = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/accueil" render={() => <AccueilPage />} />
        <Route exact path="/monCompte" render={() => <AccountPage />} />
      </Switch>
    </Router>
  );
};

export default DashboardRouting;
