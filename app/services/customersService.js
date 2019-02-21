(function()
{
    var customersService = function()
    {
        this.getCustomers = function()
        {
            return $http.get('server.php');
        };

        this.getCustomer = function(customerId)
        {
            return $http.get('server.php?id=' + customerId);
        };
    };

    angular.module('customersApp').service('customersService', customersService);
}());