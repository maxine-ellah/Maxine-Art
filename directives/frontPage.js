app.directive('frontPage', function(){
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'directives/frontPage.html'
  };
});
