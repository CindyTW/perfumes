let platform = new H.service.Platform({
    'apikey': 'hbIDHzyfTYuBDt4C8_rQtOt-Rn231JO-aKpy3b-J46E'
});


function landmarkGeocode() {
  let title = document.querySelector("h1").textContent;
  var geocoder = platform.getGeocodingService(),
    landmarkGeocodingParameters = {
      searchtext: title,
      jsonattributes : 1
    };

  geocoder.search(
    landmarkGeocodingParameters,
    showMap,
    (e)=>console.log(e)
  );
}

function showMap(result){
  let location = result.response.view[0].result[0].place.locations[0].displayPosition;
  console.log(location);
  let defaultLayers = platform.createDefaultLayers();
  let map = new H.Map(
  document.querySelector('.map'),
  defaultLayers.vector.normal.map,
  {
    zoom: 13.5,
    center: { lat: location.latitude, lng: location.longitude}
  });

  let marker = new H.map.Marker({lat: location.latitude, lng:location.longitude});
  map.addObject(marker);
  let ui = H.ui.UI.createDefault(map, defaultLayers);
}  

    
landmarkGeocode();