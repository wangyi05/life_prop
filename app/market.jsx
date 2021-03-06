import React from 'react';
import ReactDOM from 'react-dom';
import {Line} from 'react-chartjs-2';

import oConfig from "../config.json";


const data = {
  labels: ['08/10/11', '09/10/11', '09/01/12', '10/22/12', '07/10/12'],
  datasets: [
    {
      label: 'Price($)',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [70, 65.01, 85, 77.22, 98]
    }
  ]
};
 
class Marketing extends React.Component {

	  constructor(props) {
	    super(props);
	    this.state = { 
	     } ;
	  }
  


  render() {		
    return <div style={{ padding: 20}}>
    		<h5>Market Price trend(EOG)</h5>	
		    	
		         <Line data={data} 
	        	 width={200}
	          height={50}
	        	/>
      </div>
  }
}
 
ReactDOM.render(<Marketing/>, document.getElementById('market'));