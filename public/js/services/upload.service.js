(function() {
  angular
    .module('app')
    .service('UploadService', UploadService)

  function UploadService($http, $q) {

    this.sendGenomeTXT = (uploadTXT, genomeName) => {
      var deferred = $q.defer();    
      $http({    
            method: 'POST',
            url: '/api/upload',
            data: {
                    file: uploadTXT,
                    genomeName: genomeName
                  }
      }).then(function(res) {      
        deferred.resolve(res.data);    
      }).catch(function(res) {      
        deferred.reject(res);    
      });    
      return deferred.promise;
    }

  } //END OF SVC FUNC

})(); //END OF IIFE