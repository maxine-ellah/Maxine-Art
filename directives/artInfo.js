app.directive('artImages', function(){
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateURL: 'directives/artInfo.html'
  }
})
