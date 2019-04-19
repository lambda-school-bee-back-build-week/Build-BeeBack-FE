import React, {Component} from 'react';
import createPlotlyComponent from 'react-plotlyjs';
import * as state_data from './us_states.json';
import Plotly from 'plotly.js/dist/plotly-cartesian';
const PlotlyComponent = createPlotlyComponent(Plotly);


class lineplot extends Component {
    
    
    
    
  render() {
      console.log(this.props.id)
      return (
      <div>
           
            

                
                <PlotlyComponent
                    data={[
                    {
                    x: this.props.X,
                    y: this.props.y,
                    type: 'scatter',
                    mode: 'lines+points',
                    marker: {color: 'black'},
                    },
                    {type: 'bar', x:this.props.X, y:this.props.yb},
                    ]}
                    layout={ {width: 500, height: 500, title:`Bee Population Vs Pesticide Use ${state_data.default[this.props.us_state].name}`} }
                />
                
            
            
                </div>
)}

}





export default lineplot;
