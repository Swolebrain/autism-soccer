var app = angular.module('AutismSoccer', ['ngRoute']);
app.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl: '../templates/home.html',
    controller: 'HomeController'
  })
  .when('/ex/:id',{
    templateUrl: '../templates/exercise.html',
    controller: 'ExerciseController'
  });
});
app.run(function($rootScope) {
  var container = document.getElementById('container');
  document.addEventListener("keyup", function(e) {
      if (e.keyCode === 27)
          $rootScope.$broadcast("escapePressed", e.target);
  });

  container.addEventListener("click", function(e) {
      $rootScope.$broadcast("documentClicked", e.target);
  });

  container.addEventListener("touchstart", function(e) {
      $rootScope.$broadcast("documentClicked", e.target);
      console.log("touch event");
  });
});

app.factory('exService', require('./services/exService.js'));

app.controller('NavController', require('./controllers/NavController.js'));
app.controller('HomeController', require('./controllers/HomeController.js'));
app.controller('ExerciseController', require('./controllers/ExerciseController.js'));
