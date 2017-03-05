(function() {

  angular
    .module('app')
    .controller('StartController', StartController)

  function StartController($scope, $state, UploadService, user) {

    $scope.username = user.userName;
    $scope.showModal = false;
    $scope.showProcessing = true;
    $scope.showError = false;

    $scope.uploadGenomeTXT = (TXT, genomeName) => {

      if (TXT && $scope.genomeName) {
        $scope.showModal = true;
        UploadService.sendGenomeTXT(TXT, genomeName)
          .then((response) => {
            $state.go('summary');
          }, (err) => {
            console.log(err)
            $scope.showProcessing = false;
            $scope.showError = true;
          })
      }
    }

    $scope.resetModal = () => {
      $scope.showModal = false;
      $scope.showProcessing = true;
      $scope.showError = false;
    }

  } // END OF CONTROLLER FUNCTION
})(); // END OF IIFE