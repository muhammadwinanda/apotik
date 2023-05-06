function mapAlifaMartapura() {
    const koordinatAlifaMtp = new google.maps.LatLng(-3.423050,114.849769)

    var propertiPeta = {
    center: koordinatAlifaMtp,
    zoom:20,
    mapTypeId:google.maps.MapTypeId.ROADMAP
    };

    var peta = new google.maps.Map(document.getElementById("mapAlifaMartapura"), propertiPeta);

    // membuat Marker
    var marker=new google.maps.Marker({
        position: koordinatAlifaMtp,
        map: peta
    });
}

function mapAlifaBjb() {
    const koordinatAlifaBjb = new google.maps.LatLng(-3.458733,114.848275)

    var propertiPeta = {
    center: koordinatAlifaBjb,
    zoom:20,
    mapTypeId:google.maps.MapTypeId.ROADMAP
    };

    var peta = new google.maps.Map(document.getElementById("mapAlifaBjb"), propertiPeta);

    // membuat Marker
    var marker=new google.maps.Marker({
        position: koordinatAlifaBjb,
        map: peta
    });
}

function gabunganMaps() {
    return mapAlifaBjb(), mapAlifaMartapura();
}
// let script = document.createElement('script');
// script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBjeNAV-4FNLg5jmwAtvflzb74lfb2LuAM&callback=gabunganMaps';
// document.head.appendChild(script);