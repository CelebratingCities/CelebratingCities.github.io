/**
 *
 * Created by zwhitman on 1/23/2016.
 */

mapboxgl.accessToken = 'pk.eyJ1IjoiendoaXRtYW4iLCJhIjoiY2lqcjhwZjVrMDgwcXV5bHh0bmN5eWtxdyJ9.FQ-Fd-X4W08OL7i7ALPmxA';
var map = new mapboxgl.Map({
    container: 'map-one', // container id
    style: 'mapbox://styles/zwhitman/cijr8l1pu006990lx8cm0km52', //hosted style id
    center: [-76.83, 39.23], // starting position
    zoom: 8.8,// starting zoom
    interactive: false
});

//function onLoad() {
//
//    window.onscroll = function() {
//        var speed = 8.0;
//        document.body.style.backgroundPosition = (-window.pageXOffset / speed) + "px " + (-window.pageYOffset / speed) + "px";
//    }
//
//}
