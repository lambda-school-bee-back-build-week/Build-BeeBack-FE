import React, { Component } from 'react';
// import {chartingData} from "../actions/index"
import { connect } from 'react-redux'
import createPlotlyComponent from 'react-plotlyjs';
// import Plotly from 'plotly.js-geo-dist';
import Plotly from 'plotly.js/dist/plotly-cartesian';
import './lineplot.css'
import * as state_data from './us_states.json';
const PlotlyComponent = createPlotlyComponent(Plotly);



class lineplot extends Component {


    render() {
        // console.log(this.props)
        // console.log('state_data', state_data.default[this.props.us_state])
        return (
            <div>
                <PlotlyComponent className='centered'
                    data={[
                        {
                            x: this.props.X,
                            y: this.props.y,
                            type: 'scatter',
                            mode: 'lines+points',
                            marker: { color: 'red' },
                        },
                        { type: 'bar', x: this.props.X, y: this.props.yb },
                    ]}
                    layout={{ width: 640, height: 480, title: state_data.default[this.props.us_state].name}}
                />
            </div>
        )
    }
}



const mapStateToProps = state => {

    return {
        data: state.data
    }
}
export default connect(
    mapStateToProps,
    // {chartingData}
)(lineplot)
