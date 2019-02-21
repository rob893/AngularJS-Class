<?php

$customers = 
[
    [
        'id' => 1, 
        'name' => 'John', 
        'city' => 'Chandler', 
        'joined' => '2000-12-02', 
        'orderTotal' => 9.123,
        'orders' => 
        [
            [
                'id' => 1,
                'product' => 'Shoes',
                'total' => 9.123
            ]
        ]
    ],
    [
        'id' => 2, 
        'name' => 'Joe', 
        'city' => 'Atlanta', 
        'joined' => '2001-12-02', 
        'orderTotal' => 10,
        'orders' => 
        [
            [
                'id' => 2,
                'product' => 'Hat',
                'total' => 5
            ],
            [
                'id' => 3,
                'product' => 'Shirt',
                'total' => 5
            ]
        ]
    ],
    [
        'id' => 3, 
        'name' => 'Bob', 
        'city' => 'Lemoore', 
        'joined' => '2002-12-02', 
        'orderTotal' => 8.1,
        'orders' => 
        [
            [
                'id' => 4,
                'product' => 'Socks',
                'total' => 5
            ],
            [
                'id' => 5,
                'product' => 'Pants',
                'total' => 3.1
            ]
        ]
    ],
    [
        'id' => 4, 
        'name' => 'Robert', 
        'city' => 'Peoria', 
        'joined' => '2007-12-02', 
        'orderTotal' => 6,
        'orders' => 
        [
            [
                'id' => 6,
                'product' => 'Hat',
                'total' => 3
            ],
            [
                'id' => 7,
                'product' => 'Shirt',
                'total' => 3
            ]
        ]
    ]
];

if(isset($_GET['id']))
{
    $customerId = $_GET['id'];

    foreach($customers as $customer)
    {
        if($customer['id'] == $customerId)
        {
            $customerJson = json_encode($customer);

            echo $customerJson;
            return;
        }
    }

    header('HTTP/1.1 500 Internal Server Error');
}
else if(isset($_GET['allOrders']))
{
    $orders = [];

    foreach($customers as $customer)
    {
        foreach($customer['orders'] as $order)
        {
            $orders[] = $order;
        }
    }

    $ordersJson = json_encode($orders);
    echo $ordersJson;
}
else 
{
    $customersJson = json_encode($customers);
    echo $customersJson;
}
