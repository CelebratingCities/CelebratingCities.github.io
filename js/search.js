/**
 *
 * Created by zwhitman on 2/15/2016.
 */

//socrata
var baseURL = 'https://celebratingcities.data.socrata.com/',
    qParam = 'browse?q=';

//openData
//var baseURL = 'http://celebratingcities.deloittegeo.opendata.arcgis.com/',
//    qParam = 'datasets?q=';

function search(input) {
    if(typeof input === 'undefined'){
        var val = document.getElementById('s').value;
        if(val==''){
            window.location = baseURL;
        } else{
            window.location = baseURL + qParam + val;
        }
    } else if(input==0){
        return
    } else {
        window.location = baseURL + qParam + input;
    }
}
