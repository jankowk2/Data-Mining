'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
 .controller('MyCtrl1', ['$scope','stockService',function($scope,stockService) {

        $scope.name='Company';

        $scope.getCompany = function (company) {

            console.log(company);
            stockService.get(company, function (data) {
                console.log(data);
            })

        };


  }])
