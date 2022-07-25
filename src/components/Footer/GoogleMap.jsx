import GoogleMapReact from 'google-map-react';

function GoogleMap() {
  const defaultLatLng = {
    lat: 34.6956849,
    lng: 135.1907174,
  };

  const handleApiLoaded = ({ map, maps }) => {
    maps.Marker({
      map,
      position: defaultLatLng,
    });
  };

  return (
    <div style={{ marginTop: '70px', height: '500px', width: '1000px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        defaultCenter={defaultLatLng}
        defaultZoom={16}
        onGoogleApiLoaded={handleApiLoaded}
      />
    </div>
  );
}

export default GoogleMap;
