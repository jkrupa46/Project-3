function initMap()
{
  alert("ready");
  var map = new google.maps.Map(document.getElementById('map');
  var mapOptions =
  {
    center: {lat: 53.483137, lng: -2.200404},
    zoom: 18,
    mapType: google.mpas.MapTypeId.SATELLITE,
    mapTypeControl: true,
    mapTypeControlOptions: 
    {
      position: google.maps.ControlPosition.TOP_CENTER,
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      mapTypeIds: ['satellite', 'roadmap'],
    }
  };
  
  var myMap = google.maps.Map(map, mapOptions);
  
  var marker = new google.maps.Marker(
  {
    position: {lat: 53.483137, lng: -2.200404},
    map: myMap,
    animation: google.maps.Animation.BOUNCE
    icon: 'images/googlemapsicon.jpg',
  });
  
  var contentString = '<h1>Etihad Stadium - Home of Manchester City Football Club</h1><p>Manchester City Football Club is a football club in Manchester, England. Founded in 1880 as St. Mark's (West Gorton), they became Ardwick Association Football Club in 1887 and Manchester City in 1894. The club moved to the City of Manchester Stadium in 2003, having played at Maine Road since 1923. The club's most successful period was in the late 1960s and early 1970s when they won the League Championship, FA Cup, League Cup and European Cup Winners' Cup under the management team of Joe Mercer and Malcolm Allison. After losing the 1981 FA Cup Final, the club went through a period of decline, culminating in relegation to the third tier of English football for the only time in their history in 1998. Having regained their Premier League status in the early 2000s, the club was purchased in 2008 by Abu Dhabi United Group and has become one of the wealthiest in the world. Since 2011 the club have won five major honours, including the Premier League in 2012 and 2014.</p>';
  
  var infowindow = new google.maps.InfoWindow(
  {
    content: contentString
  });
  
  google.maps.event.addListener(marker, 'click', function()
  {
    infowindow.open(myMap, marker);
  });
}

google.maps.event.addDomListener(window, 'load', initMap);

