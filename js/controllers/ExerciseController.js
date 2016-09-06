
module.exports = ['$scope', '$routeParams', 'exService',
  function($scope, $routeParams, exService){
    $scope.exid = $routeParams.id;
    $scope.exercise = exService.getExercise($scope.exid);
}];
