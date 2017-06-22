var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__trigger');
var pageHeader = document.querySelector('.page-header');
var pageIntro = document.querySelector('.intro');

navMain.classList.remove('main-nav--nojs');
pageHeader.classList.remove('page-header--full');
pageIntro.classList.remove('intro--short');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    if (pageHeader.classList.contains('page-header--full')) {
      pageHeader.classList.remove('page-header--full');
    } else {
      pageHeader.classList.add('page-header--full');
    };
    if (pageIntro.classList.contains('intro--short')) {
      pageIntro.classList.remove('intro--short');
    } else {
      pageIntro.classList.add('intro--short');
    };
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    pageHeader.classList.remove('page-header--full');
    pageIntro.classList.remove('intro--short');
  }
});

var mapContainer = document.querySelector('.contacts__map');

var map ='';
google.maps.event.addDomListener(window, 'load', init);
google.maps.event.addDomListener(window, 'resize', m_res );
function init() {
	var mapOptions = {
		zoom: 15,
		mapTypeControl: false,
		zoomControl: true,
		scrollwheel: false,
		zoomControlOptions: {
			position: google.maps.ControlPosition.right_bottom
		},
		streetViewControl: false,
		center: new google.maps.LatLng(59.937369, 30.321056),
	};

	var mapElement = document.getElementById('map');
  mapElement.classList.add('contacts__map--map-loaded');
	map = new google.maps.Map(mapElement, mapOptions);
	var image = '../img/icon-map-marker.svg';
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(59.936287, 30.321047),
		map: map,
		icon: image
	});

	m_res();
}
function m_res(){
	google.maps.event.trigger(map, "resize");
	map.panTo(new google.maps.LatLng(59.937369, 30.321056));
}
