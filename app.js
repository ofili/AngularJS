(function() {
    'use strict';

    angular.module('NameCalculator', [])

    .controller('NameCalculatorController', function($scope) {
        $scope.name = "";
        $scope.totalValue = 0;

        $scope.displayNumeric = function() {
            var totalnameValue = calculateNumericForString($scope.name);
            $scope.totalValue = totalnameValue;
        };

        function calculateNumericForString(tring) {
            var totalStringValue = 0;
            for (var i = 0; i < String.length; i++) {
                totalStringValue += String.charCodeAt(i);
            }
            return totalStringValue;
        };

    });


})();