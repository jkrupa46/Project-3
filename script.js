function initMap()
{
  var map;
  function initMap() 
  {
    map = new google.maps.Map(document.getElementById('map'), 
    {
      center: {lat: 53.483137, lng: -2.200404},
      zoom: 8
    });
}

google.maps.event.addDomListener(window, 'load', initMap);

