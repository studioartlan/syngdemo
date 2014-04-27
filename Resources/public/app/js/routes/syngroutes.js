SyngDemoApp.config(function($stateProvider, $urlRouterProvider) {

//  $urlRouterProvider.otherwise("/state1");

	$stateProvider

	.state('studioartlan_syngdemo_demo_product', {
		"url": "/product/{id}",
		"templateUrl": "partials/views/product.html",
		"apiUrl": "/product/{id}"
	})

	.state('studioartlan_syngdemo_demo_product_1', {
		"url": "/product/",
		"templateUrl": "partials/views/product.html",
		"apiUrl": "/product/"
	})

	.state('studioartlan_syngdemo_demo_index', {
		"url": "/",
		"templateUrl": "partials/views/index.html",
		"apiUrl": "/"
	});

});