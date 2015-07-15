/// <reference path="typings/angularjs/angular.d.ts"/>

module HelloWorld {
  export interface Scope extends ng.IScope {
    name: string;
    greeting: string;
    hello: () => void;
    hi: () => void;
    hey: () => void;
    call: () => void;
  }
  export class Controller {
    constructor($scope: Scope) {
      $scope.name = 'World!!∏';
      $scope.greeting = 'Hello';
      $scope.hello = () => $scope.greeting = 'Hello';
      $scope.hi = () => $scope.greeting = 'Hi';
      $scope.hey = () => $scope.greeting = 'Hey';
      $scope.call = () => alert($scope.greeting + " " + $scope.name + "!");
    }
  }

  angular.module("myApp", [])
    .controller("helloWorldController", ["$scope", Controller]);
}