var map;
function initMap() 
{
    map = new google.maps.Map(document.getElementById('map'), 
    {
      center: {lat: 53.483137, lng: -2.200404},
      zoom: 15,
      mapTypeId: 'satellite',
      mapTypeControl: true,
      mapTypeControlOptions: 
      {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        mapTypeIds: ['roadmap', 'satellite'],
        position: google.maps.ControlPosition.TOP_CENTER
      },
      zoomControl: true,
      zoomControlOptions: 
      {
        position: google.maps.ControlPosition.RIGHT_CENTER
      }
    });
    var marker = new google.maps.Marker(
    {
      position: {lat: 53.483137, lng: -2.200404},
      map: map,
      title: 'Etihad Stadium',
      icon: 'images/googlemapsicon'
    });
}

google.maps.event.addDomListener(window, 'load', initMap);

