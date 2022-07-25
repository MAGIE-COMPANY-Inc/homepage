import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  const mapStyles = {
    height: '400px',
    width: '800px',
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
          mapContainerStyle={mapStyles}
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
