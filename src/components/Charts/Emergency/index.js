import { useEffect } from 'react';
import Chart from 'chart.js/auto';
import colors from  '../../../styles/colors';
import { addTransparency } from  '../../../styles/utils';

import { ChartContainer } from '../styles';

function Emergency({ cases }) {

  
  function formatDate (input) {
    var datePart = input.match(/\d+/g),
    year = datePart[0].substring(2), // get only two digits
    month = datePart[1], day = datePart[2];
    
    return day+'/'+month+'/'+year;
  }
  
  const labels = cases.map(item => formatDate(item.date_reported.replace('-', '/'))); 

      const data = {
        labels: labels,
        datasets: [{
          label: 'Número de casos',
          backgroundColor: "#65c9c1",
          data: cases.map(item => item.new_cases)
        }]
      };

      useEffect(() => {

        const chartElement = document.getElementById('chart-emergencias');
    
        new Chart(chartElement, {
          type: 'bar',
          data: data,
          options: {
            plugins: {
              title: {
                display: false
              },
            },
            responsive: true,
            scales: {
              y: {
                min: 0
              }
            }
          }
        });
      });

    return (
        <ChartContainer>
            <canvas id="chart-emergencias"></canvas>
        </ChartContainer>
    )
}

export default Emergency;