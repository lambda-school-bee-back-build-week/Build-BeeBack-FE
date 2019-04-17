
import React, { Component } from 'react'
import Plot from "react-plotly.js"
import {getDataAll} from "../actions/index"
import {connect} from 'react-redux'





 class ChoroplethMap extends Component {

    componentDidMount(){
       this.props.getDataAll() 

    }
  render() {
    return (
      <div>
         <h1>hi</h1>
      </div>
    )
  }
}

const mapStateToProps = state =>{
    console.log(state.dataAll)
    return{
        dataAll: state.dataAll
    }
}

export default connect (
    mapStateToProps,
    {getDataAll}
)(ChoroplethMap)
