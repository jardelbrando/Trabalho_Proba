
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import dailyCases from '../../databases/daily_cases_deaths.json';
import generalFile from '../../databases/general_count.json';

import { Container } from './styles';

import Emergency from '../../components/Charts/Emergency';

function Country() {
    const { country } = useParams();

    const [cases, setCases] = useState(() => {
        const result = dailyCases.filter(element => {
            return element.country.toUpperCase() == country.toUpperCase();
        })
    
        return result;
    });

    const [general, setGeneral] = useState(() => {
        const result = generalFile.filter(element => {
            return element.name.toUpperCase() == country.toUpperCase();
        })
    
        return result;
    });

    return cases && general ? (
        <Container>
            <h1>
                {general.length}
            </h1>

            <h1>
                {cases.length}
            </h1>

            {cases != undefined && <Emergency cases={cases}></Emergency>}
        </Container>
    ) : null;

}

export default Country;