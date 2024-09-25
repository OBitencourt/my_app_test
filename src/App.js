
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import CustomersList from "./pages/customers/List"
import CustomerRegister from "./pages/customers/Register"
import Home from "./pages/Home"

import TemplateDefault from './templates/Default'
import TemplatePage from './templates/Page'

const App = () => {
  return (
    
    <Router>
        <TemplateDefault>
        <Switch>
          <Route path="/customers/add">
            <TemplatePage title="Sign" Component={CustomerRegister} />
          </Route>
          <Route path="/customers">
            <TemplatePage title="Customers" Component={CustomersList} />
          </Route>
          <Route path="/">
            <TemplatePage title="Home" Component={Home} />
          </Route>
        </Switch>
        </TemplateDefault>
      </Router>

  )
}

export default App;
