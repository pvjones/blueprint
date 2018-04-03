(function() {
  'use strict';

  angular
    .module('app')
    .directive('onReadFile', onReadFile);

  function onReadFile($parse) {

    return {
      restrict: 'A',
      scope: false,
      link: function(scope, element, attrs) {

        var fn = $parse(attrs.onReadFile);

        element.on('change', (onChangeEvent) => {
          var reader = new FileReader();
          reader.onload = (onLoadEvent) => {
            scope.$apply(() => {
              fn(scope, {
                $fileContent: onLoadEvent.target.result
              });
            });
          };

          reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
        });
      }

    };
  };
})();