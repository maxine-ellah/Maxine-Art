describe('productCatalogue', function() {

  beforeEach(angular.mock.module('sortApp'));

  var $controller;

  beforeEach(angular.mock.inject(function(_$controller_) {
	  $controller = _$controller_;
  }));

  describe('$scope.products', function() {
    var $scope, controller;

    beforeEach(function() {
      $scope = {};
      controller = $controller('productCatalogue', { $scope: $scope });
      var length = $scope.products.length;
      var booleanArr = [];
    });

    it('all 8 products available', function() {
      expect($scope.products.length).toBe(8)
    })

    it('all products have a price property with a value greater than 0', function() {
      var priceArr = [];
      var length = $scope.products.length;
      for (var i = 0; i<length; i++) {
        if ($scope.products[i].hasOwnProperty('price')){
          priceArr.push($scope.products[i].price > 0)
        } else {
          priceArr.push('product ' + i + ' doesnt have price')
          }
        expect(priceArr[i]).toBe(true)
      }
    })

    it('all products have an ID property', function(){
      var idArr = [];
      var length = $scope.products.length;
      for (var i = 0; i<length; i++) {
        if ($scope.products[i].hasOwnProperty('id')) {
          idArr.push($scope.products[i].id > 0)
        } else {
          idArr.push('product ' + i + ' doesnt have an ID')
        }
      expect(idArr[i]).toBe(true)
      }
    })

    it('all products have a name property and value  ot equal to null or empty string', function() {
      var nameArr = [];
      var length = $scope.products.length;
      for (var i = 0; i<length; i++) {
        if ($scope.products[i].hasOwnProperty('name')){
          nameArr.push($scope.products[i].name !== null && $scope.products[i].name !== '')
        } else {
          nameArr.push('product ' + i + ' doesnt have name')
          }
        expect(nameArr[i]).toBe(true)
      }
    })
  })

  describe('currency converter filters', function(){

    var $filter;

    beforeEach(angular.mock.inject(function(_$filter_){
      $filter = _$filter_;
    }))

    it('USDConverter returns given value multiplied by 0.76', function() {
      var usdConverter = $filter('USDConverter');
      expect(usdConverter(10)).toEqual(7.6)
    })

    it('EUROConverter returns given value multiplied by 0.67', function() {
      var euroConverter = $filter('EUROConverter');
      expect(euroConverter(10)).toEqual(6.7)
    })

  })



})//closes productCatalogue describe
