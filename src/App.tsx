import HomePage from "./pages/HomePage";
import CityDetailsPage from "./pages/CityDetailsPage";

import { GlobalStyle } from "./globalStyles/globalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/cityDetail/:city" component={CityDetailsPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
