import React from 'react';
import ReactDOM from 'react-dom';
import {Bar} from 'react-chartjs-2';
import { Button } from 'reactstrap';

const data = {
  labels: ['EOG', 'CRK', 'DVN', 'ALL', 'PGR', 'CB', 'QCOM'],
  datasets: [
    {
      label: 'Token',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [82.81, 8.18, 40.77, 101.25, 68.78, 137.09, 120.36]
    }
  ]
};
class RealTime extends React.Component {
  render() {
    return <div style={{ padding: 20}}>
	        <h5>Real Time Marking(09/07/2018)</h5>
	        <Bar
	          data={data}
	          width={100}
	          height={100}
	          options={{
	            maintainAspectRatio: false
	          }}
	        />
      </div>
  }
}

ReactDOM.render(<RealTime/>, document.getElementById('realtime'));