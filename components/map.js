import React from 'react';
import ReactMapGL from 'react-map-gl';

const Map = () => (
  <section>
    <ReactMapGL
      scrollZoom
      doubleClickZoom
      mapboxApiAccessToken={
        'pk.eyJ1Ijoiam9lamVtbWVseSIsImEiOiJjanh6NHF5dDYwMHQzM2ZvYTBuMGc5Ym54In0.sYo_A4-VGQXnUz1VvlSAjA'
      }
      width={'100%'}
      height={'100%'}
    />
    <style jsx>
      {`
        section {
          height: 360px;
          background-color: #ccc;
          border-radius: 8px;
        }
      `}
    </style>
  </section>
);

export default Map;
