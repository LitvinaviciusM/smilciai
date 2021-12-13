import React from 'react';
import GoogleMapReact from 'google-map-react';
import {MapContainer} from "./Map.styles";
import {MapStyle} from './MapStyle';
import {NavigationIcon} from "../../assets/svg/icons-and-logos";
import styled from "styled-components";

const Map = ({coords}) => {

    const coordinates = {lat: coords.lat, lng: coords.lng};

    return (
        <MapContainer>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.GATSBY_GOOGLE_MAP_API_KEY }}
                defaultCenter={coordinates}
                defaultZoom={11}
                center={coordinates}
                options={{ disableDefaultUI: true, zoomControl: true, styles: MapStyle }}
            >
                <Icon lat={coords.lat} lng={coords.lng}/>
            </GoogleMapReact>
        </MapContainer>
    );
};

export default Map;

const Icon = styled(NavigationIcon)`
  fill: ${props => props.theme.primaryHover};
  width: 48px;
  height: 48px;
  transform: translate(-24px, -48px);
`;