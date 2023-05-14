var app = angular.module('exampleApp', []);

app.service('exampleService', function($http) {
    this.getData = function() {
      return $http.get('./user.json');
    }
  
    this.sendData = function(data) {
      // send data to server
    }
  });

  app.component('helloWorld', {
    template: './service.html',
    controller: function($scope, exampleService){
    exampleService.getData().then(function(response) {
      $scope.data = response.data;
    });
  }

});
  // app.controller('exampleController', function($scope, exampleService) {
  //   $scope.data = {};
  
  //   exampleService.getData().then(function(response) {
  //     $scope.data = response.data;
  //   });

  // });
  