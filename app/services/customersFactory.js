(function()
{
    var customerFactory = function($http)
    {
        var factory = {};

        factory.getCustomers = function()
        {
            return $http.get('server.php');
        };

        factory.getCustomer = function(customerId)
        {
            return $http.get('server.php?id=' + customerId);
        };

        factory.getOrders = function()
        {
            return $http.get('server.php?allOrders');
        };

        return factory;
    };

    customerFactory.$inject = ['$http'];

    angular.module('customersApp').factory('customersFactory', customerFactory);
}());