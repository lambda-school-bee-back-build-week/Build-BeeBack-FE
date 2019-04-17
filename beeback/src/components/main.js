import React from 'react'
import axios from "axios";
import createPlotlyComponent from 'react-plotlyjs';
import Plotly from 'plotly.js-geo-dist';
const PlotlyComponent = createPlotlyComponent(Plotly);

const unpack = (rows, key) => {
  return rows.map((row) => row[key]);
}

class Main extends React.Component {
  state = {
    data: []
  }
  componentDidMount() {
    axios.get('https://beeback.herokuapp.com/api/neonic2/2016').then(res => this.setState({ data: [...res.data] })).catch(err => console.error(err));
  }
  render() {
    console.log(this.state);
    return (
      <section className="main">
        <div>
          <PlotlyComponent
            onClick={data => {

              console.log(data.points[0].text);
            }}
            data={[{
              type: 'choropleth',
              locationmode: 'USA-states',
              locations: unpack(this.state.data, 'state'),
              z: unpack(this.state.data, 'numcol'),
              text: unpack(this.state.data, 'state'),
              zmin: 0,
              zmax: 500000,
              colorscale: [
                [0, 'rgb(242,240,247)'], [0.2, 'rgb(218,218,235)'],
                [0.4, 'rgb(188,189,220)'], [0.6, 'rgb(158,154,200)'],
                [0.8, 'rgb(117,107,177)'], [1, 'rgb(84,39,143)']
              ],
              colorbar: {
                title: 'Millions USD',
                thickness: 0.2
              },
              marker: {
                line: {
                  color: 'rgb(255,255,255)',
                  width: 2
                }
              }
            }]}
            layout={{
              title: 'Bee Population Data 2016',
              geo: {
                scope: 'usa',
                showlakes: true,
                lakecolor: 'rgb(255,255,255)'
              }
            }}
          />
        </div>
        <div>
          <PlotlyComponent
            data={[{
              type: 'choropleth',
              locationmode: 'USA-states',
              locations: unpack(this.state.data, 'state'),
              z: unpack(this.state.data, 'nAllNeonic'),
              text: unpack(this.state.data, 'state'),
              zmin: 0,
              zmax: 50000,
              colorscale: [
                [0, 'rgb(242,240,247)'], [0.2, 'rgb(218,218,235)'],
                [0.4, 'rgb(188,189,220)'], [0.6, 'rgb(158,154,200)'],
                [0.8, 'rgb(117,107,177)'], [1, 'rgb(84,39,143)']
              ],
              colorbar: {
                title: 'Millions USD',
                thickness: 0.2
              },
              marker: {
                line: {
                  color: 'rgb(255,255,255)',
                  width: 2
                }
              }
            }]}
            layout={{
              title: 'Pesticide Use Data 2016',
              geo: {
                scope: 'usa',
                showlakes: true,
                lakecolor: 'rgb(255,255,255)'
              }
            }}
          />
        </div>

      </section>
    )
  }
}

export default Main;
