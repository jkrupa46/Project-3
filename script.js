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
    
    var contentString = 
      '<h1>Etihad Stadium</h1>'+
      '<p><b>Etihad Stadium</b>, also known as the City of Manchester Stadium, in Manchester, England, is the home ground of Manchester City Football Club and, with a domestic football capacity of 55,097, the fourth-largest in the Premier League and eighth-largest in the United Kingdom.</p>'+
      '<p>For more information, click on this link: <a href="https://en.wikipedia.org/wiki/City_of_Manchester_Stadium">Etihad Stadium</a></p>';
        
    var infowindow = new google.maps.InfoWindow(
    {
      content: contentString
    });
    
    var marker = new google.maps.Marker(
    {
      position: {lat: 53.483137, lng: -2.200404},
      map: map,
      animation: google.maps.Animation.DROP,
      title: 'Etihad Stadium'
    });
    
    marker.addListener('click', function() 
    {
      infowindow.open(map, marker);
    });
}

google.maps.event.addDomListener(window, 'load', initMap);

