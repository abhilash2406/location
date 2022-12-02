import React from 'react';
import Loader from './Loader';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  state = {
    lat: null,
    errormessage: null,
  };

  componentDidMount() {
   
    this.fetchLocation();
  }

  fetchLocation() {
    setTimeout(() => {
      window.navigator.geolocation.getCurrentPosition(
        (data) =>
          this.setState({
            lat: data.coords.latitude,
            lon: data.coords.longitude,
          }),

        (error) =>
          this.setState({
            errormessage: error.message,
          })
      );
    }, 2000);
  }
  componentDidUpdate() {
    
  }
  rendercontent() {

    const {lat,errormessage}= this.state;
    if (lat  && !errormessage) {
      return <SeasonDisplay  latitude={lat}/>;
    }
    if (!lat && errormessage) {
      return <h1>Error :{errormessage}</h1>;
    }
    return <Loader />;
  }
  render() {
    return this.rendercontent();
  }
}

export default App;
