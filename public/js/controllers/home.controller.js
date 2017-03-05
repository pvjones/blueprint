(function() {
  angular
    .module('app')
    .controller('HomeController', HomeController)

  function HomeController($scope, user) {

    // Auth
    $scope.userName = user.userName;
    $scope.isAuthed = user.isAuthed;

    // Parallax scroll effects
    d3.select(window)
      .on('scroll', function() {

      let winScroll = $(this).scrollTop();

      d3.select('.helix')
        .style('transform',`translateY(+${winScroll / 15}%)`);

      d3.select('.helix-marks')
        .style('transform', `translate(-${winScroll / 7}%, +${winScroll / 15}%)`);

      d3.select('.backbone')
        .style('transform', `translateY(+${winScroll / 15}%)`);

      d3.select('.cytosine')
        .style('transform', `translateX(+${winScroll / 12}%)`);

      d3.select('.circles')
        .style('transform', `translateY(+${winScroll / 12}%)`);

      d3.select('.circles2')
        .style('transform', `translateY(+${winScroll / 15}%)`);

      d3.select('.helix2')
        .style('transform', `translateY(+${winScroll / 15}%)`);

      d3.select('.backbone2')
        .style('transform', `translateY(+${winScroll / 15}%)`);
    });

  } // END OF CTRL FUNC
})(); // END OF IIFE