/// <reference path="typings/angularjs/angular.d.ts"/>
var HelloWorld;
(function (HelloWorld) {
    var Controller = (function () {
        function Controller($scope) {
            $scope.name = 'World!!';
            $scope.greeting = 'Hello';
            $scope.hello = function () { return $scope.greeting = 'Hello'; };
            $scope.hi = function () { return $scope.greeting = 'Hi'; };
            $scope.hey = function () { return $scope.greeting = 'Hey'; };
            $scope.call = function () { return alert($scope.greeting + " " + $scope.name + "!"); };
        }
        return Controller;
    })();
    HelloWorld.Controller = Controller;
    angular.module("myApp", [])
        .controller("helloWorldController", ["$scope", Controller]);
})(HelloWorld || (HelloWorld = {}));
//# sourceMappingURL=main.js.map