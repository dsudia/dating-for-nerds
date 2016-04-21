(function() {
  angular.module('gDating').filter('gender', () => {
    return (input) => {
      console.log(input);
      switch (input) {
        case 0:
          return "Guy";
          break;
        case 1:
          return "Gal";
          break;
        case 2:
          return "Androgynous";
          break;
        case 3:
          return "Doesn't Say";
          break;
      }
    }
  });
})();