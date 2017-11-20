const rpg = angular.module('rpg',[]);

rpg.controller('rpgCtr', ['$scope', 'character', function($scope, character) {
  $scope.rpg = 'rpg';
}]);

rpg.service('character', ['stats', function(stats){
  this.getStatsFor = (characterName) => {
    
  }
}]);

rpg.service('stats', function(){
  // this.forCharacter = ()
})
