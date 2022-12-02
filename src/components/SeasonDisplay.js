import React from 'react';



class SeasonDisplay extends React.Component {
  getSeason(latitude) {
    let month = new Date().getMonth();
    if (month > 2 && month < 9) {
      return latitude > 0 ? 'summer' : 'winter';
    } else {
      return latitude > 0 ? 'winter' : 'summer';
    }
  }

  render() {
    const { latitude } = this.props;
    return this.getSeason(latitude) === 'winter' ? (
      <h1>Burr, its Chilly here</h1>
    ) : (
      <h1>its too hot here</h1>
    );
  }
}
export default SeasonDisplay;