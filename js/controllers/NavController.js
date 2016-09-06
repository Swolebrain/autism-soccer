module.exports = ['$scope', '$rootScope', 'exService',
function($scope, $rootScope, exService){
  $scope.exercises= exService.getAllExercises();
  
  $scope.toggleNav = function(){
    var nav = document.querySelectorAll('.navbar')[0];
    var elemStyle = document.querySelectorAll('.navbar')[0].style.left;
    console.log(elemStyle);
    if (elemStyle != "0px")
      nav.style.left = '0px';
    else{
      nav.style.left= "-400px";
    }
  };
  function _hideNav(){
    document.querySelectorAll('.navbar')[0].style.left= "-400px";
  }
  $rootScope.$on("documentClicked", _hideNav);
  $rootScope.$on("escapePressed", _hideNav);
}];
