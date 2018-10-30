import React from 'react';
import ReactDOM from 'react-dom';
import {Bar} from 'react-chartjs-2';

const data = {
  
  datasets: [{
      label: 'twitter',
      type:'line',
      data: [5, 3, 7, 1, 9, 2, 5],
      fill: false,
      borderColor: '#EC932F',
      backgroundColor: '#EC932F',
      pointBorderColor: '#EC932F',
      pointBackgroundColor: '#EC932F',
      pointHoverBackgroundColor: '#EC932F',
      pointHoverBorderColor: '#EC932F',
      yAxisID: 'y-axis-2'
    },{
      type: 'line',
      label: 'news',
      data: [6, 3, 7, 2, 9, 3, 1],
      fill: false,
      backgroundColor: '#71B37C',
      borderColor: '#71B37C',
      pointBorderColor: '#EC932F',
      pointBackgroundColor: '#EC932F',
      pointHoverBackgroundColor: '#EC932F',
      pointHoverBorderColor: '#EC932F',
      yAxisID: 'y-axis-1'
    }]
};

const options = {
  responsive: true,
  tooltips: {
    mode: 'label'
  },
  elements: {
    line: {
      fill: false
    }
  },
  scales: {
    xAxes: [
      {
        display: true,
        gridLines: {
          display: false
        },
        labels: ['Insurance', 'EOG', 'CRK', 'DVN', 'PGR', 'CB', 'ALL']
      }
    ],
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
        gridLines: {
          display: false
        },
        labels: {
          show: true
        }
      },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-2',
        gridLines: {
          display: false
        },
        labels: {
          show: true
        }
      }
    ]
  }
};

const plugins = [{
    afterDraw: (chartInstance, easing) => {
        const ctx = chartInstance.chart.ctx;
        ctx.fillText("This text drawn by a plugin", 100, 100);
    }
}];

class Translate extends React.Component {
  render() {
    return   <div style={{ padding: 20}}>
        <h5>Result</h5>
        <Bar
          data={data}
          options={options}
          plugins={plugins}
        />
      </div>
  }
}

ReactDOM.render(<Translate/>, document.getElementById('translate'));