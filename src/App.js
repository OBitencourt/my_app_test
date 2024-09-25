
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import CustomersList from "./pages/customers/List"
import CustomersRegister from "./pages/customers/Register"
import CustomersEdit from "./pages/customers/Edit"
import Home from "./pages/Home"

import TemplateDefault from './templates/Default'
import TemplatePage from './templates/Page'

const App = () => {
  return (
    
    <Router>
        <TemplateDefault>
        <Switch>
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
        </Switch>
        </TemplateDefault>
      </Router>

  )
}

export default App;
