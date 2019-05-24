import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import { browserHistory } from 'react-router-dom';

class MapContainer extends Component {
    state = {
            showInfoWindow: [false, false, false]
        };

        changeInTrue = (index) => {
            let result = [false, false, false];
            result[index] = true;
            return result
        };

        changeInFalse = (index) => {
                    let result = [false, false, false];
                    return result
        };

   onMarkerClick = (index, e) => {
        this.setState({
            showInfoWindow: this.changeInTrue(index)
        });
   }

   render() {
       let data = this.props.places;
       let columns = this.props.columns
       let arrayData = this.props.arrayData
       console.log("================================================");
       console.log(data);
       const GoogleMapExample = withGoogleMap(props =>
          <GoogleMap
            defaultCenter = { { lat: 44.426164962, lng: 26.102332924 } }
            defaultZoom = { 11 } >
            {data.map(place => (
                    <Marker
                      key={`marker-${place.name}`}
                      title={place.name}
                      name={place.name}
                      position={place.position}
                      onClick = {this.onMarkerClick.bind(this, place.index)}>
                      {(this.state.showInfoWindow[place.index] == true) && (
                                             <InfoWindow
                                               key={`infowindow-${place.name}`}
                                               visible={true}>
                                               <div>
                                                {columns[0]}: {arrayData[place.index][0]} <br/>
                                                {columns[1]}: {arrayData[place.index][2]} <br/>
                                                {columns[2]}: {arrayData[place.index][3]} <br/>
                                               </div>
                                             </InfoWindow>
                      )}
                    </Marker>
                  ))}
          </GoogleMap>
   );
   return(
      <div>
        <GoogleMapExample
          containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};
export default MapContainer;