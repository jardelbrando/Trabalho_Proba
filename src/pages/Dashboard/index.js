import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

import { FaUser } from 'react-icons/fa';
import { AiOutlineLogout } from 'react-icons/ai';
import { MdDashboard } from 'react-icons/md'

import DoctorsAppointments from '../../components/Charts/DoctorsAppointments';
import Hospitalization from '../../components/Charts/Hospitalization';
import Emergency from '../../components/Charts/Emergency';
import MedicalDischarges from '../../components/Charts/MedicalDischarges';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import general from '../../databases/general_count.json';

import { 
  Container,
} from './styles';

function Dashboard() {
  const history = useHistory();

  const [country, setCountry] = React.useState('');

  const handleChange = (event) => {
    history.push(`/details/${event.target.value}`);
  };

  function getCountries() {
    var countries = general.map(element => element.name);

    countries.sort();

    return countries;
  }

  return (
    <Container>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">País</InputLabel>
        <Select
          value={country}
          label="Country"
          onChange={handleChange}
        >
          {
            getCountries().map((country, index) =>
              <MenuItem key={index} value={country}>{country}</MenuItem>
            )
          }
        </Select>
      </FormControl>
    </Container>
  )
}

export default Dashboard;