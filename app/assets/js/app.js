var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/main", {
            templateUrl: "components/main.html"
        })
        .when("/wanga", {
            templateUrl: "components/wanga.html"
        })
        .when("/zet", {
            templateUrl: "components/zet.html"
        })
        .when("/analyze", {
            templateUrl: "components/analyze.html"
        })
        .otherwise({
            templateUrl: "components/main.html"
        });
});

