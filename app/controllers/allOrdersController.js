
(function()
{
    var AllOrdersController = function($scope, $log, customersFactory)
    {
        $scope.orders = null;
        $scope.ordersTotal = 0.0;
        $scope.totalType;

        function init()
        {
            customersFactory.getOrders().then(function successCallback(response)
            {
                $scope.orders = response.data;
                getOrdersTotal();
            }, function errorCallback(response)
            {
                $log.log('An error has occurred. ' + response.status);
            });
        }

        function getOrdersTotal()
        {
            var total = 0;

            for(var i = 0; i < $scope.orders.length; i++)
            {
                total += $scope.orders[i].total;
            }

            $scope.ordersTotal = total;
            $scope.totalType = ($scope.ordersTotal > 100) ? 'alert-success' : 'alert-danger';
        }

        init();
    };

    AllOrdersController.$inject = ['$scope', '$log', 'customersFactory'];

    angular.module('customersApp').controller('AllOrdersController', AllOrdersController);
}());
