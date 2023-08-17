import { GoogleMap, useJsApiLoader, Marker} from '@react-google-maps/api';
import { Box } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';


function Map({street, number}) {

    const googleApiKey = import.meta.env.VITE_GOOGLE_API_KEY;

    const [location, setlocation] = useState({})

    useEffect(() => {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${street},${number}&key=${googleApiKey}`)
        .then(response => response.json())
        .then(data => {
        setlocation(data.results[0].geometry.location);
        })
        .catch(error => {
        console.lo('Erro ao obter dados de geolocalização:', error);
        });
    },[])
    

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: googleApiKey
        })

    return (
        <Box marginY={3} sx={{height: {xs: '400px', md:'500px'}, width: '500px'}} border={2} borderColor={'grey.300'} borderRadius={1}>
            {isLoaded ? (
            <GoogleMap
                mapContainerStyle={{height: '100%', width: '100%', borderRadius: '5px'}}
                center={{
                    lat: location.lat,
                    lng: location.lng
                }}
                zoom={14}
            >
                <Marker position={{lat: location.lat, lng: location.lng}}/>
            </GoogleMap>
        ) : <></>}
        </Box>
    )
}

export default Map