import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

import { FaUser } from 'react-icons/fa';
import { AiOutlineLogout } from 'react-icons/ai';
import { MdDashboard } from 'react-icons/md'

import DoctorsAppointments from '../../components/Charts/DoctorsAppointments';
import Hospitalization from '../../components/Charts/Hospitalization';
import Emergency from '../../components/Charts/Emergency';
import MedicalDischarges from '../../components/Charts/MedicalDischarges';

import myData from '../../databases/daily_cases_deaths.json';

import { 
  Container,
} from './styles';

function Dashboard() {
  const history = useHistory();

  useEffect(() => {
    console.log(myData);
  } ,[]);

  return (
    <Container>
  
    </Container>
  )
}

export default Dashboard;