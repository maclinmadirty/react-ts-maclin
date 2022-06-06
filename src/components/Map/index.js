import React from 'react';
import './styles.scss';

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = 'sk.eyJ1IjoibWFjbGlubWFkaXJ0eSIsImEiOiJjbDQyZjhxczAwMjYyM2lwYWhlc2FvdW9vIn0.BzrDPKVTrlahRlfFh_l5Kw';

const Map = () => {
  return <div className="map-root"></div>;
};

export default Map;
