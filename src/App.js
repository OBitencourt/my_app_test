
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import CustomersList from "./pages/customers/List"
import CustomersRegister from "./pages/customers/Register"
import CustomersEdit from "./pages/customers/Edit"
import Home from "./pages/Home"
import Login from "./pages/Login"

import TemplateDefault from './templates/Default'
import TemplatePage from './templates/Page'
import TemplateClean from './templates/Clean'

const App = () => {
  return (
    
    <Router>
        <Switch>
          <Route path="/login">
            <TemplateClean title="Acesso Restrito" Component={Login} />
          </Route>
          <TemplateDefault>
            <Route path="/customers/edit/:id">
              <TemplatePage title="Edit Customer" Component={CustomersEdit} />
            </Route>
            <Route path="/customers/add">
              <TemplatePage title="Sign" Component={CustomersRegister} />
            </Route>
            <Route path="/customers">
              <TemplatePage title="Customers" Component={CustomersList} />
            </Route>
            <Route path="/">
              <TemplatePage title="Home" Component={Home} />
            </Route>
          </TemplateDefault>
        </Switch>
    </Router>

  )
}

export default App;
