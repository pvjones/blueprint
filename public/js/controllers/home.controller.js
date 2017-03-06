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
      .on('scroll', () => {

      let winScroll = window.scrollY;

      d3.select('.helix')
        .style('transform',`translateY(+${winScroll / 15}%)`);

      d3.select('.helix-marks')
        .style('transform', `translate(-${winScroll / 7}%, +${winScroll / 15}%)`);

      d3.select('.backbone')
        .style('transform', `translateY(+${winScroll / 15}%)`);

      d3.select('.cytosine')
        .style('transform', `translateX(+${winScroll / 12}%)`);

      d3.select('.circles')
        .style('transform', `translateY(+${winScroll / 8}%)`);

      d3.select('.circles2')
        .style('transform', `translateY(+${winScroll / 20}%)`);

      d3.select('.helix2')
        .style('transform', `translateY(+${winScroll / 15}%)`);

      d3.select('.backbone2')
        .style('transform', `translateY(+${winScroll / 15}%)`);

      d3.select('.circles3')
        .style('transform', `translateY(+${winScroll / 20}%)`);

      d3.select('.masthead-contents')
        .style('transform', `translateY(+${winScroll / 30}%)`);
    });

  } // END OF CTRL FUNC
})(); // END OF IIFE