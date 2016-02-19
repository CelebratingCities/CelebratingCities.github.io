/**
 *
 * Created by zwhitman on 1/23/2016.
 */

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var centers = [[-77.038,38.915],[-76.61,39.31]],
    centersBU = [[38.915,-77.038],[39.31,-76.61]],
    centerChoice = centers[getRandomInt(0,1)],
    centerChoiceBU = centersBU[getRandomInt(0,1)],
    centerAssign;



try{
    mapboxgl.accessToken = 'pk.eyJ1IjoiendoaXRtYW4iLCJhIjoiY2lqcjhwZjVrMDgwcXV5bHh0bmN5eWtxdyJ9.FQ-Fd-X4W08OL7i7ALPmxA';
    var map = new mapboxgl.Map({
        container: 'map-one', // container id
        style: 'mapbox://styles/zwhitman/cijr8l1pu006990lx8cm0km52', //hosted style id
        center: centerChoice, // starting position
        zoom: 11.5,// starting zoom
        interactive: false
    });
    centersAssign = centers;
} catch(err){
// Map configuration settings
    console.log(err);
    L.mapbox.accessToken = 'pk.eyJ1IjoiendoaXRtYW4iLCJhIjoiY2lqcjhwZjVrMDgwcXV5bHh0bmN5eWtxdyJ9.FQ-Fd-X4W08OL7i7ALPmxA';
    var mbUrl = 'https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png';
    var basemap = L.tileLayer(mbUrl, {id: 'zwhitman.e2b002aa'});
    var map = L.map('map-one', {
        center: centerChoiceBU,
        zoom: 12,
        //maxBounds: bounds,
        layers: [basemap],
        interactive: false
    });
    centersAssign = centersBU;
}

$(window).bind('scroll', function (e) {
    parallaxScroll();
});

function parallaxScroll() {
    var scrolled = $(window).scrollTop();
    $('#map-one').css('top', (0 - (scrolled * .25)) + 'px');
    $('#banner-head').css('top', (0 - (scrolled * .28)) + 'px');
}

function pan(city){
    map.panTo(centersAssign[city])
}

