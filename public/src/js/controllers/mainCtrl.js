// public/js/controllers/mainCtrl.js

  angular.module('mainCtrl', [])
      .controller('mainController', function($scope) {

    //main script variables go here  
	$scope.background = [
		{image: 'dist/img/purple_hex.png', desciption: 'purple'},
		{image: 'dist/img/platform_flat.png', description: 'platform flat'},
		{image: 'dist/img/analytics_flat.png', description:'analytics flat'},
		{image: 'dist/img/who_we_are.png', description: 'teamwork'},
		{image: 'dist/img/img_four.png', description: 'Main'},
		{image: 'dist/img/logo/edtrics_two.png', description: 'logo'} 
	];
});
