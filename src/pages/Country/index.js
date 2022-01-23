
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import dailyCases from '../../databases/daily_cases_deaths.json';
import generalFile from '../../databases/general_count.json';

import { Container, Nav, Content, RigthContent, LeftContent, LeftCard, BottomContent, BottomCard
, BottomInternalCard, BottomCardInfo} from './styles';

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
            <Nav>
                <p><b>CO</b>ntando</p>
                <p>Países | Comparação</p>
            </Nav>
            <Content>
                <LeftContent>
                        <h2>Casos atuais</h2>
                        <LeftCard>
                                <p>teste</p>
                        </LeftCard>
                        <h2>Casos confirmados</h2>
                        <LeftCard>
                                <p>teste</p>
                        </LeftCard>
                        <h2>Casos recuperados</h2>
                        <LeftCard>
                                <p>teste</p>
                        </LeftCard>
                        <h2>Óbitos confirmados</h2>
                        <LeftCard>
                                <p>teste</p>
                        </LeftCard>
                </LeftContent>
                <RigthContent>
                    {cases != undefined && <Emergency cases={cases}></Emergency>}
                    <BottomContent>
                        <BottomCard>
                            <p>Taxa de mortalidade</p>
                            <BottomInternalCard>
                                <p>teste</p>
                                <BottomCardInfo>
                                    
                                </BottomCardInfo>
                            </BottomInternalCard>
                            
                        </BottomCard>
                        <BottomCard>
                            <p>Taxa de mortalidade</p>
                            <BottomInternalCard>
                                <p>teste</p>
                                <BottomCardInfo>

                                </BottomCardInfo>
                            </BottomInternalCard>
                        </BottomCard>
                    </BottomContent>
                </RigthContent>
            </Content>
            
        </Container>
    ) : null;

}

export default Country;