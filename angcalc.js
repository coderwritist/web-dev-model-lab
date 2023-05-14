angular.module('CalculatorApp', [])
    .controller('CalculatorController', function($scope) {
        $scope.result = function() {
        var a = $scope.a;
        var b = $scope.b;
        var operator = $scope.operator;
        var result;
        switch(operator) {
            case '+':
            result = a + b;
            break;
            case '-':
            result = a - b;
            break;
            case '*':
            result = a * b;
            break;
            case '/':
            result = a / b;
            break;
            case '%':
            result = a % b;
            break;
        }
        return result;
        };
    });