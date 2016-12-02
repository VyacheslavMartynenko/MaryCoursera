var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/main", {
            templateUrl: "components/main.html"
        })
        .otherwise({
            templateUrl: "components/main.html"
        });
});
