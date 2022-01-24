import { Switch } from 'react-router-dom';

import CustomRoute from './Route';

import Dashboard from '../pages/Dashboard';
import Country from '../pages/Country';
function Routes() {
  return (
    <Switch>
      <CustomRoute path="/" exact component={Dashboard} />
      <CustomRoute path="/details/:country" component={Country}/>
    </Switch>
  );
}

export default Routes;