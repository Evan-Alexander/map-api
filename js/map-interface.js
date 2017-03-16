// var Map = require('./../js/map.js').mapModule;

$(document).ready(function() {
  $.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBJrbCiMqFiXkQLqYt9cAVsJ20exyryy9U")
  .then(function() {
    var map = new google.maps.Map(document.getElementById('map'), {
             center: {lat: -34.397, lng: 150.644},
             zoom: 8
            });
    });
  });

  // $.ajax({
  //   url: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBJrbCiMqFiXkQLqYt9cAVsJ20exyryy9U',
  //   type: 'GET',
  //   dataType: 'jsonp',
  //   cache: false,
  //   success: function(response){
  //     console.log("works");
  //     var map = new google.maps.Map(document.getElementById('map'), {
  //          center: {lat: -34.397, lng: 150.644},
  //          zoom: 8
  //        });
  //       //  $("#map").append("<p>fuck off</p>")
  //   },
  //   fail: function(error){
  //     console.log("error");
  //   }
  // });
