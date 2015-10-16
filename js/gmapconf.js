var gmap;
function initMap() {
    gmap = new google.maps.Map(document.getElementById('gmap'), {
        center: {lat: 17.9835465, lng: -92.9553534},
        zoom: 13
    });
}
