import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useEffect, useState } from 'react';

const Map = () => {
  const [width, setWidth] = useState(400);
  const breakpoint = 900;

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  const mapStyles = {
    height: '400px',
    width: '800px',
  };

  const responsiveStyles = {
    height: '300px',
    width: '350px',
  };

  const defaultCenter = {
    lat: 34.6956849, lng: 135.1907174,
  };

  const locations = [
    {
      name: 'ハックバー',
      location: {
        lat: 34.695689,
        lng: 135.192923,
      },
    },
  ];

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_API_KEY}
      language="ja"
    >
      <div style={{ marginTop: '50px' }}>
        <GoogleMap
          mapContainerStyle={width < breakpoint ? responsiveStyles : mapStyles}
          zoom={13}
          center={defaultCenter}
        >
          {
            locations.map((item) => (
              <Marker key={item.name} position={item.location} />
            ))
          }
        </GoogleMap>
      </div>
    </LoadScript>
  );
};

export default Map;
