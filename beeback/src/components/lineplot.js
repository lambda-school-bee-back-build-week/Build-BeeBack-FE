import React, {Component} from 'react';
import {chartingData} from "../actions/index"
import {connect} from 'react-redux'
import createPlotlyComponent from 'react-plotlyjs';
import Plotly from 'plotly.js-geo-dist';
const PlotlyComponent = createPlotlyComponent(Plotly);




class lineplot extends Component {
    state={
        data: []
    }
    
    componentDidMount(){
        
        // axios.get(`https://beeback.herokuapp.com/api/state-charting`)
        
        
        // .then(res => 
            
        //     this.setState({ 
                
        //         data: [...res.data] 
        //     })
            
           
            
        //     )
        

        // .catch(err => console.error(err));
        
    }
    
  render() {
    return (
      <div>
        ntitled 
<PlotlyComponent
    data={[
     {
      x: [1, 2, 3],
      y: [2, 6, 3],
      type: 'scatter',
      mode: 'lines+bar',
      marker: {color: 'red'},
     },
     {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
    ]}
    layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
   />
      </div>
    )
  }
}
const mapStateToProps = state =>{
    
    // return{
    //     dataAll: state.dataAll
    // }
}
export default connect (
    mapStateToProps,
    {chartingData}
)(lineplot)
