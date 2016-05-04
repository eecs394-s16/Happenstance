angular
  .module('example')
  .controller('ModalController', function($scope, supersonic, close) {
    $scope.close = close;
  });
