(function () {

  angular.module('gDating').service('getLocation', function() {

    var lat = document.getElementById("latitude");
    var long = document.getElementById("longitude");

    function showPosition(position) {
      lat.innerHTML = position.coords.latitude;
      long.innerHTML = position.coords.longitude;
    }

    return {
      getLocation: function() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else {
          lat.innerHTML = "Geolocation is not supported by this browser.";
        }
      }
    }

  });
})();
