import GoogleMapReact from 'google-map-react';

function GoogleMap() {
  const defaultLatLng = {
    lat: 35.7022589,
    lng: 139.7744733,
  };

  const handleApiLoaded = ({ map, maps }) => {
    maps.Marker({
      map,
      position: defaultLatLng,
    });
  };

  return (
    <div style={{ height: '300px', width: '300px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={defaultLatLng}
        defaultZoom={16}
        onGoogleApiLoaded={handleApiLoaded}
      />
    </div>
  );
}

export default GoogleMap;
