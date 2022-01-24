
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router';

import dailyCases from '../../databases/daily_cases_deaths.json';
import generalFile from '../../databases/general_count.json';
import vaccineFile from '../../databases/vaccination_data.json';
import popFile from '../../databases/world_population.json';

import { Container, Nav, Content, RigthContent, LeftContent, LeftCard, BottomContent, BottomCard
, BottomInternalCard, BottomCardInfo, CardContainer, BottomCardNumber, BottomCardDetails, VaccinationCard,
FinalContent, FinalContentCard, FinalCard, Comments} from './styles';

import Emergency from '../../components/Charts/Emergency';
import { compareAsc } from "date-fns";

function Country() {

    const history = useHistory();

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


    const [vacine, setVacine] = useState(() => {
        const result = vaccineFile.filter(element => {
            return element.country.toUpperCase() == country.toUpperCase();
        })
    
        return result;
    });

    const [pop, setPop] = useState(() => {
        const result = popFile.filter(element => {
            return element.country.toUpperCase() == country.toUpperCase();
        })
    
        return result;
    });

    function formatNumber(value) {
        const stringValue = value.toString();

        return stringValue.replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.')   
    }

    function formatNumber2(value) {

        value = value.replace(",","");   
        value = value.replace(",",""); 
        return value;
    }

    function Tax(parcialTax, generalTax){
        return ((parcialTax/generalTax) * 100).toFixed(2);
    }

    function Tax2(parcialTax, generalTax){
        return (parcialTax/generalTax).toFixed(2);
    }

    function Compare1(letalityTax){
        const globalDeathTax = generalFile[0].deaths_cumulative_total/generalFile[0].cases_cumulative_total;
        
        if(letalityTax < globalDeathTax){
            return "A taxa de letalidade desse país é menor do que a taxa de letalidade global";
        }else {
            return "A taxa de letalidade desse país é maior do que a taxa de letalidade global.";
        }
    }
    function Compare2(vacineTax){
        
        if(vacineTax > 0.5 && vacineTax < 1){
            return "A taxa de vacinação completa ultrapassa a metade da população, um ótimo indicador que sugere queda nas mortes diárias.";
        }else if(vacineTax < 0.5 && vacine > 0.3 ){
            return "A taxa de vacinação completa cresce, porém ainda não é o ideal. Tende a estabilizar o número de mortes diárias";
        }else if(vacineTax < 0.3 && vacine >0.25){
            return "A taxa de vacinação está defazada para o momento atual da pandemia. Ainda morrem mais pessoas do que se vacinam em 24 horas.";
        }else if(vacineTax < 0.25 && vacineTax > 0){
            return "A taxa de vacinação desse país está precária. Índice de mortes ainda cresce.";
        }else{
            return "Valor inválido";
        }
    }

    function Compare3(deaths){
       
    }

    return cases && general ? (
        <>
        <Nav>
            <p onClick={() => history.push("/")}><b>CO</b>ntando</p>
            <p>Países | Comparação</p>
            <a>{vacine[0].country}</a>
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
                                Óbitos (p/milhão)
                            </h2>

                            <BottomCardNumber>
                                
                                <h1>{(general[0].deaths_cumulative_total*1000000/formatNumber2(pop[0]["2021_last_updated"])).toFixed(0)}</h1>
                            </BottomCardNumber>

                            <BottomCardDetails>
                                <span>Informa a porcentagem de óbitos sobre a população total do pais.</span>
                            </BottomCardDetails>    
                        </BottomCard>
                        <BottomCard>
                            <h2>
                                Taxa de letalidade
                            </h2>

                            <BottomCardNumber>
                                <h1>{Tax(general[0].deaths_cumulative_total, general[0].cases_cumulative_total)}%</h1>
                            </BottomCardNumber>

                            <BottomCardDetails>
                                <span>Informa a porcentagem de óbitos sobre a população total infectada.</span>
                            </BottomCardDetails>    
                        </BottomCard>
                        
                        
                        

                        <VaccinationCard>
                            <div>
                                <h1>Vacinação</h1>
                                <div>
                                    <h1>{formatNumber(vacine[0].persons_vaccinated_1plus_dose)}</h1>
                                    <span>(1º dose)</span>
                                </div>

                                <div>
                                    <h1>{formatNumber(vacine[0].persons_fully_vaccinated)}</h1>
                                    <span>Totalmente imunizada</span>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <span> População: {formatNumber(formatNumber2(pop[0]["2021_last_updated"]))}</span>
                                </div>
                            </div>
                        </VaccinationCard>
                    </BottomContent>
                </RigthContent>
                
            </Content>
            <FinalContent>
                <h1>Comparações</h1>
                <FinalContentCard>
                    <FinalCard>
                        <h1>População mundial: 7.900.000.000</h1>
                        <p><b>Casos globais confirmados:</b>  {formatNumber(generalFile[0].cases_cumulative_total)}</p>
                        <p><b>Casos globais nas últimas 24 horas:</b>  {formatNumber(generalFile[0].cases_newly_inlast24h)}</p>
                        <p><b>Casos globais nos últimos 7 dias:</b>  {formatNumber(generalFile[0].cases_newly_inlast7days)}</p>
                        <p><b> Mortes globais:</b>  {formatNumber(generalFile[0].deaths_cumulative_total)}</p>
                        <p><b> Mortes globais nas últimas 24 horas:</b>  {formatNumber(generalFile[0].deaths_newly_in24h)}</p>
                        <p><b> Mortes globais nas últimas 24 horas:</b>  {formatNumber(generalFile[0].deaths_newly_inlast7days)}</p>
                        <p><b> Mortes globais por milhão:</b>  {(generalFile[0].deaths_cumulative_total*1/7900).toFixed(0)}</p>
                        <p><b> Taxa de letalidade:</b>  {Tax(generalFile[0].deaths_cumulative_total, generalFile[0].cases_cumulative_total)}%</p> 
                    </FinalCard>
                    <FinalCard>
                        <h1>População neste país: {formatNumber(formatNumber2(pop[0]["2021_last_updated"]))}</h1>
                        <p><b>Casos confirmados neste país:</b>  {formatNumber(general[0].cases_cumulative_total)}</p>
                        <p><b>Casos nas últimas 24 horas neste país:</b>  {formatNumber(general[0].cases_newly_inlast24h)}</p>
                        <p><b>Casos nos últimos 7 dias neste país:</b>  {formatNumber(general[0].cases_newly_inlast7days)}</p>
                        <p><b> Mortes neste país:</b>  {formatNumber(general[0].deaths_cumulative_total)}</p>
                        <p><b> Mortes nas últimas 24 horas neste país:</b>  {formatNumber(general[0].deaths_newly_in24h)}</p>
                        <p><b> Mortes nas últimas 24 horas neste país:</b>  {formatNumber(general[0].deaths_newly_inlast7days)}</p>
                        <p><b> Mortes por milhão neste país:</b>  {(general[0].deaths_cumulative_total*1000000/formatNumber2(pop[0]["2021_last_updated"])).toFixed(0)}</p>
                        <p><b> Taxa de letalidade:</b>  {Tax(general[0].deaths_cumulative_total, general[0].cases_cumulative_total)}%</p>
                        <p><b> Vacinação com primeira dose neste país:</b>  {Tax(vacine[0].persons_vaccinated_1plus_dose, parseInt(formatNumber2(pop[0]["2021_last_updated"])), 10)}%</p>
                        <p><b> Vacinação completa neste país:</b>  {Tax(vacine[0].persons_fully_vaccinated, parseInt(formatNumber2(pop[0]["2021_last_updated"])), 10)}%</p>
                    </FinalCard>
                </FinalContentCard>
                
            </FinalContent>
            <h1>Comentários e conclusões</h1>
            <Comments>
                    <p>{Compare1(general[0].deaths_cumulative_total/general[0].cases_cumulative_total)}</p>
                    <p>{Compare2(vacine[0].persons_fully_vaccinated/formatNumber2(pop[0]["2021_last_updated"]))}</p>
                    <p>As mortes desse país representam {(((general[0].deaths_cumulative_total*100)/generalFile[0].deaths_cumulative_total)).toFixed(2)}% das mortes mundiais</p>
                    <p>Aproximadamente {((general[0].deaths_cumulative_total*100)/parseInt(formatNumber2(pop[0]["2021_last_updated"]), 10)).toFixed(2)}% da população desse país morreu de covid</p>
            </Comments>
        </Container>
        </>
    ) : null;

}

export default Country;