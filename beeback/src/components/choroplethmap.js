import React from "react";
import "../index.css"
const url = "https://beescolony.herokuapp.com/"

class ChoroplethMap extends React.Component {

  render() { 
    return (
    <iframe src={url} id='dash' title='dash'>
    </iframe>
  )}
}

// const mapStateToProps = state =>{
//     console.log(state.dataAll)
//     return{
//         dataAll: state.dataAll
//     }
// }

export default ChoroplethMap;
