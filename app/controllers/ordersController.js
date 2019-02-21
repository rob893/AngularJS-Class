
(function()
{
    var OrdersController = function($scope, $log, $routeParams, customersFactory)
    {
        var customerId = $routeParams.customerId;
        $scope.customer = null;

        function init()
        {
            customersFactory.getCustomer(customerId).then(function successCallback(response)
            {
                $scope.customer = response.data;
            }, function errorCallback(response)
            {
                $log.log('An error has occurred. ' + response.status);
            });
        }

        init();
    };

    OrdersController.$inject = ['$scope', '$log', '$routeParams', 'customersFactory'];

    angular.module('customersApp').controller('OrdersController', OrdersController);
}());
