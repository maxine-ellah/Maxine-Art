app.controller('artCtrl', function($scope) {
  $scope.prince = {
    name: "black",
    images: './images/black.jpg'
  };

  $scope.gallery = [
    {
      name: 'madonna',
      images: './images/madonna.jpg'
    },
    {
      name: 'untitled',
      images: './images/Untitled-1.jpg'
    },
    {
      name: 'womanwave',
      images: './images/womanwave.jpg'
    },
    {
      name: 'blackerlines',
      images: './images/blackerlinessmall.jpg'
    },
    {
      name: 'chosen',
      images: './images/chosen3.jpg'
    }
  ];

  // $scope.madonna = {
  //   name: 'madonna',
  //   images: [
  //     './images/madonna.jpg'
  //   ]
  // };
  //
  // $scope.untitled = {
  //   name: 'untitled',
  //   images: [
  //     './images/Untitled-1.jpg'
  //   ]
  // };
  //
  // $scope.womanwave = {
  //   name: 'womanwave',
  //   images: [
  //     './images/womanwave.jpg'
  //   ]
  // };
  //
  // $scope.lines = {
  //   name: 'blackerlines',
  //   images: [
  //     './images/blackerlinessmall.jpg'
  //   ]
  // };
  //
  // $scope.chosen = {
  //   name: 'chosen',
  //   images: [
  //     './images/chosen3.jpg'
  //   ]
  // }

})
