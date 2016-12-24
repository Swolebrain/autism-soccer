(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var app = angular.module('AutismSoccer', ['ngRoute']);
app.config(function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: '../templates/home.html',
    controller: 'HomeController'
  }).when('/ex/:id', {
    templateUrl: '../templates/exercise.html',
    controller: 'ExerciseController'
  });
});
app.run(function ($rootScope) {
  var container = document.getElementById('container');
  document.addEventListener("keyup", function (e) {
    if (e.keyCode === 27) $rootScope.$broadcast("escapePressed", e.target);
  });

  container.addEventListener("click", function (e) {
    $rootScope.$broadcast("documentClicked", e.target);
  });

  container.addEventListener("touchstart", function (e) {
    $rootScope.$broadcast("documentClicked", e.target);
    console.log("touch event");
  });
});

app.factory('exService', require('./services/exService.js'));

app.controller('NavController', require('./controllers/NavController.js'));
app.controller('HomeController', require('./controllers/HomeController.js'));
app.controller('ExerciseController', require('./controllers/ExerciseController.js'));

},{"./controllers/ExerciseController.js":2,"./controllers/HomeController.js":3,"./controllers/NavController.js":4,"./services/exService.js":5}],2:[function(require,module,exports){
'use strict';

module.exports = ['$scope', '$routeParams', 'exService', function ($scope, $routeParams, exService) {
  $scope.exid = $routeParams.id;
  $scope.exercise = exService.getExercise($scope.exid);
}];

},{}],3:[function(require,module,exports){
'use strict';

module.exports = ['$scope', function ($scope) {
  console.log('HomeController reporting in');
}];

},{}],4:[function(require,module,exports){
'use strict';

module.exports = ['$scope', '$rootScope', 'exService', function ($scope, $rootScope, exService) {
  $scope.exercises = exService.getAllExercises();

  $scope.toggleNav = function () {
    var nav = document.querySelectorAll('.navbar')[0];
    var elemStyle = document.querySelectorAll('.navbar')[0].style.left;
    console.log(elemStyle);
    if (elemStyle != "0px") nav.style.left = '0px';else {
      nav.style.left = "-400px";
    }
  };
  function _hideNav() {
    document.querySelectorAll('.navbar')[0].style.left = "-400px";
  }
  $rootScope.$on("documentClicked", _hideNav);
  $rootScope.$on("escapePressed", _hideNav);
}];

},{}],5:[function(require,module,exports){
'use strict';

module.exports = [function () {
  var exercises = [{ name: 'ex1', url: '#/ex/1', description: 'exercise 1 description',
    videoUrl: '../../videos/situps.mp4' }, { name: 'ex2', url: '#/ex/2', description: '',
    videoUrl: '../../videos/smiling.mp4' }, { name: 'ex3', url: '#/ex/3', description: '',
    videoUrl: '../../videos/situps.mp4' }, { name: 'ex4', url: '#/ex/4', description: '',
    videoUrl: '../../videos/smiling.mp4' }, { name: 'squat', url: '#/ex/5', description: 'este es un squat',
    videoUrl: '../../videos/situps.mp4' }];
  function getExercise(id) {
    id = parseInt(id);
    return exercises[id - 1];
  }
  function getAllExercises() {
    return exercises.map(function (e) {
      return { name: e.name, url: e.url };
    });
  }
  return { getExercise: getExercise, getAllExercises: getAllExercises };
}];

},{}]},{},[1]);
