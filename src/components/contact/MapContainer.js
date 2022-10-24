import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { MapContainerDiv } from '../../styles/Contact.styled';


export class MapContainer extends React.Component {
    render() {
        return (
            <MapContainerDiv>
                <Map
                    google={this.props.google}
                    zoom={13}
                    initialCenter={{
                        lat: 24.8546842,
                        lng: 67.0207055
                    }}
                >

                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                </Map>
            </MapContainerDiv>
        );
    }
}

const mapContainerStyle = {
    position: 'relative',
    height: '400px'
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyDkmmNKgMKQACgKR_4rL38wWvGsajiTNMk')
})(MapContainer)