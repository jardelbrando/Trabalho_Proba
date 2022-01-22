import { Switch } from 'react-router-dom';

import CustomRoute from './Route';

import Dashboard from '../pages/Dashboard';
import Country from '../pages/Country';
import PatientOverviewHospitalization from '../pages/PatientOverview/Hospitalizations';
import PatientOverviewEmergencies from '../pages/PatientOverview/Emergencies';
import Patients from '../pages/Patients';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

function Routes() {
  return (
    <Switch>
      <CustomRoute path="/" exact component={Dashboard} />
      <CustomRoute path="/details/:country" component={Country}/>
    </Switch>
  );
}

export default Routes;