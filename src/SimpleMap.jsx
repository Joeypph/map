import React from "react";
import GoogleMapReact from 'google-map-react';
import crendentials from './crendentials'
import Marker from './Marker'

export default function SimpleMap(){

  // const defaultProps = {
  //   center: {
  //     lat:23.98629371046389, lng: -102.17375087900747
  //   },
  //   zoom: 6
  // };

  return (
    <>
      <GoogleMapReact

        bootstrapURLKeys={{ key: `${crendentials.mapskey}` }}
        defaultCenter={{lat:23.98629371046389, lng: -102.17375087900747}}
        defaultZoom={6}
      >
        <Marker
          // lat= {23.98629371046389}
          // lng= {-102.17375087900747}
          />
      </GoogleMapReact>
    </>
  );
}