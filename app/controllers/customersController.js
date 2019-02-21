
(function()
{
    var CustomersController = function($scope, $log, customersFactory, appSettings)
    {
        $scope.sortBy = "name";
        $scope.reverse = false;
        $scope.appSettings = appSettings;
        $scope.customers = [];

        function init()
        {
            customersFactory.getCustomers().then(function successCallback(response)
            {
                $scope.customers = response.data;
            }, function errorCallback(response)
            {
                $log.log('An error has occurred. ' + response.status);
            });
        }

        init();

        $scope.DoSort = function(propName)
        {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };
    };

    CustomersController.$inject = ['$scope', '$log', 'customersFactory', 'appSettings'];

    angular.module('customersApp').controller('CustomersController', CustomersController);
}());
