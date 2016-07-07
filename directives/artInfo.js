app.directive('artImages', function(){
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'directives/artInfo.html'
  };
});
