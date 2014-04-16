SngDemoApp.config(['$routeProvider', function($routeProvider) {

	$routeProvider.when('/', {
		apiUrl: '/',
		templateUrl: 'partials/views/index.html',
		controller: 'Index'
	});

	$routeProvider.when('/sngdemo/', {
		apiUrl: '/sngdemo/',
		templateUrl: 'partials/views/sngdemo.html',
		controller: 'studioartlan_sngdemo_demo_index'
	});

	$routeProvider.when('/sngdemo/parameter/{parameter}', {
		apiUrl: '/sngdemo/parameter/{parameter}',
		templateUrl: 'partials/views/sngdemo/parameter.html',
		controller: 'studioartlan_sngdemo_demo_parameter'
	});

}]);
