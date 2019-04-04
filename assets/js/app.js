// CONSTANTS
var protocol = "http://"
var host = protocol + "localhost:8000"

// App Instance
var app = angular.module("website", ["ngRoute"])

app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
    .when("/", {
        templateUrl: "templates/home.html",
        // controller: "homeController"
    })
    .when("/insurer", {
        templateUrl: "templates/insurer.html",
        // controller: "advisorController"
    })
    .when("/about-us", {
        templateUrl: "templates/about_us.html",
        // controller: "aboutusController"
    })

}]);