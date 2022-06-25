import React from 'react';
import Plot from 'react-plotly.js';

export default class ExpensePlot extends React.Component {
  render() {
    return (
      <Plot
        data={[
          {
            x: this.props.x,
            y: this.props.y,
            type: 'bar',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
        ]}
        layout={{width: 500, height: 340, title: 'A Expense Plot'}}
      />
    );
  }
}
