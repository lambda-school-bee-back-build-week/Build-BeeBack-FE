import React, {Component} from 'react';
import {chartingData} from "../actions/index"
import {connect} from 'react-redux'
import createPlotlyComponent from 'react-plotlyjs';
// import Plotly from 'plotly.js-geo-dist';
import Plotly from 'plotly.js/dist/plotly-cartesian';
const PlotlyComponent = createPlotlyComponent(Plotly);


class lineplot extends Component {
    
    
    
    
  render() {
      console.log(this.props)
      return (
      <div>
           
            

                
                <PlotlyComponent
                    data={[
                    {
                    x: this.props.X,
                    y: this.props.y,
                    type: 'scatter',
                    mode: 'lines+points',
                    marker: {color: 'red'},
                    },
                    {type: 'bar', x:this.props.X, y:this.props.yb},
                    ]}
                    layout={ {width: 320, height: 240, title: "k"} }
                />
                
            
            
    
            )}
            </div>
            
      

      )
  }
}



const mapStateToProps = state =>{
    
    return{
        data: state.data
    }
}
export default connect (
    mapStateToProps,
    {chartingData}
)(lineplot)
