import React from 'react'
import axios from "axios";
import createPlotlyComponent from 'react-plotlyjs';
import Plotly from 'plotly.js-geo-dist';
const PlotlyComponent = createPlotlyComponent(Plotly);
const us_state_dict = {
  'AL': 0,
  'AZ': 1,
  'CA': 2,
  'CO': 3,
  'FL': 4,
  'KY': 5,
  'GA': 6,
  'ID': 7,
  'IL': 8,
  'IN': 9,
  'IA': 10,
  'KS': 11,
  'LA': 12,
  'ME': 13,
  'MD': 14,
  'MI': 15,
  'MN': 16,
  'MS': 17,
  'MO': 18,
  'MT': 19,
  'NE': 20,
  'NV': 21,
  'NJ': 22,
  'NM': 23,
  'NY': 24,
  'NC': 25,
  'ND': 26,
  'OH': 27,
  'OK': 28,
  'OR': 29,
  'SC': 30,
  'SD': 31,
  'TN': 32,
  'TX': 33,
  'UT': 34,
  'VT': 35,
  'VA': 36,
  'WA': 37,
  'WV': 38,
  'WI': 39,
  'WY': 40
}

const unpack = (rows, key) => {
  return rows.map((row) => row[key]);
}


class Main extends React.Component {
  state = {
    data: [],
    state_charting: undefined,
    us_state: 'AL',
    state_chart: undefined
  }

  componentDidMount() {
    axios.get('https://beeback.herokuapp.com/api/neonic2/2016')
      .then(res => this.setState({ data: [...res.data] })).catch(err => console.error(err));
    axios.get('https://beeback.herokuapp.com/api/state-charting')
      .then(res => this.setState({ state_charting: res.data })).catch(err => console.error(err));
  }
  render() {
    if (this.state.state_charting !== undefined) {
      console.log(this.state.state_charting[us_state_dict['AL']].id_);
    }
    else return <div></div>
    return (
      <section className="main">
        <div>
          <PlotlyComponent
            onClick={data => {
              let chart = this.state.state_charting[us_state_dict[data.points[0].text]]
              const us_state = chart.id_
              const X = JSON.parse(chart.X)
              const yb = JSON.parse(chart.yb)
              const yl = JSON.parse(chart.yl).flat()
              this.setState({
                state_chart: {X, yb, yl},
                us_state
              },
              () => {
                console.log(this.state.state_chart)
            });

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
