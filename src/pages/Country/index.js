
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import dailyCases from '../../databases/daily_cases_deaths.json';
import generalFile from '../../databases/general_count.json';

import { Container, Nav, Content, RigthContent, LeftContent, LeftCard, BottomContent, BottomCard
, BottomInternalCard, BottomCardInfo, CardContainer, BottomCardNumber, BottomCardDetails, VaccinationCard} from './styles';

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

    function formatNumber(value) {
        const stringValue = value.toString();

        return stringValue.replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.')   
    }

    return cases && general ? (
        <>
        <Nav>
            <p><b>CO</b>ntando</p>
            <p>Países | Comparação</p>
        </Nav>
        
        <Container>    
            <Content>
                <LeftContent>
                    
                    <CardContainer>
                        <h2>Casos das últimas 24h</h2>

                        <LeftCard>
                            <h2>{formatNumber(cases[cases.length-1].new_cases)}</h2>
                        </LeftCard>
                    </CardContainer>

                    <CardContainer>
                        <h2>Casos confirmados</h2>

                        <LeftCard>
                            <h2>{formatNumber(general[0].cases_cumulative_total)}</h2>
                        </LeftCard>
                    </CardContainer>

                    <CardContainer>
                        <h2>Óbitos das últimas 24h</h2>

                        <LeftCard>
                            <h2>{formatNumber(cases[cases.length-1].new_deaths)}</h2>
                        </LeftCard>
                    </CardContainer>

                    <CardContainer>
                        <h2>Óbitos confirmados</h2>

                        <LeftCard>
                            <h2>{formatNumber(general[0].deaths_cumulative_total)}</h2>
                        </LeftCard>
                    </CardContainer>
                    
                    
                    
                </LeftContent>

                <RigthContent>
                    {cases != undefined && <Emergency cases={cases}></Emergency>}
                    <BottomContent>
                        <BottomCard>
                            <h2>
                                Taxa de mortalidade
                            </h2>

                            <BottomCardNumber>
                                <h1>230</h1>
                            </BottomCardNumber>

                            <BottomCardDetails>
                                <span>Informa quantas pessoas estão morrendo por esta doença em uma determinada população.</span>
                            </BottomCardDetails>    
                        </BottomCard>
                        
                        
                        <BottomCard>
                            <h2>
                                Taxa de letalidade
                            </h2>

                            <BottomCardNumber>
                                <h1>230</h1>
                            </BottomCardNumber>

                            <BottomCardDetails>
                                <span>Avalia o número de mortes em relação às pessoas que apresentam a doença ativa</span>
                            </BottomCardDetails>    
                        </BottomCard>

                        <VaccinationCard>
                            <div>
                                <h1>Vacinação</h1>

                                <div>
                                    <h1>74,3%</h1>
                                    <span>(1º dose)</span>
                                </div>

                                <div>
                                    <h1>54,43%</h1>
                                    <span>Totalmente imunizada</span>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <span>Porcentagem sobre a população total do país</span>
                                </div>
                            </div>
                        </VaccinationCard>
                    </BottomContent>
                </RigthContent>
            </Content>
        </Container>
        </>
    ) : null;

}

export default Country;