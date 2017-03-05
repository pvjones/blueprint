(function() {

  angular
    .module('app')
    .controller('MenuController', MenuController)

  function MenuController($scope, AuthService) {

    // Set initial display variables
    $scope.loggedIn = ($scope.loggedIn === true) ? true : false;

    function getUser() {
      AuthService.getUser()
        .then((res) => {
            $scope.userName = res.username;
            $scope.isAuthed = true;
          })
          .catch((err) => {
            $scope.isAuthed = false;
          });
    }

    getUser();

    window.onscroll = function() {
      let sticky = d3.select('.sticky'),
          scroll = window.scrollY;
      if (scroll >= 100) {
        sticky.classed('fixed', true);
      } else {
        sticky.classed('fixed', false);
      }
    };

  } // END OF CTRL FUNC
})(); // END OF IIFE