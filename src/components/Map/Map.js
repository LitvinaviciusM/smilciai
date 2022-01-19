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
            <ButtonLinkHref target="_blank"
                            href="https://www.google.com/maps/place/56%C2%B0+0.201+N+21%C2%B0+4.7+E/@56.003357,21.078337,15z?gl=LT"
                            className="view_map regular_url">
                Žiūrėti žemėlapyje
            </ButtonLinkHref>


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

const ButtonLinkHref = styled.a`
  display: inline-block;
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 20;
  background: ${props => props.theme.primary};
  white-space: nowrap;
  padding: 0.75rem 1.5rem;
  color: ${props => props.theme.black};
  font-size: clamp(0.5rem, 5vw, 0.875rem) !important;
  line-height: clamp(1.5rem, 5vw, 1.5rem);
  font-weight: 600;
  outline: none;
  border: none;
  min-width: 50px;
  cursor: pointer;
  text-decoration: none;
  border-radius: 5px;
  -webkit-tap-highlight-color: transparent;
  transition: 100ms;
  
  &:hover {
    background: ${props => props.theme.primaryHover};
    transition: 100ms;
  }
`;