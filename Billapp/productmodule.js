var app = angular.module('MyApp',[])
app.controller('loginctrl',function($scope){
    $scope.userList = [
        {userID:'User1',pwd:'user1'},
        {userID:'User2',pwd:'user2'},
        {userID:'User3',pwd:'user3'}
    ]
    //product list
    $scope.productList = [
        {pID:'001',pName:'Product1',price:'45000'},
        {pID:'002',pName:'Product2',price:'1000'},
        {pID:'003',pName:'Product3',price:'500'},
        {pID:'004',pName:'Product4',price:'900'},
        {pID:'005',pName:'Product5',price:'15000'}
    ]
    //Authentication function
    $scope.stat
    $scope.authentication = function(id,pass){
        for(i in $scope.userList)
        {
            if($scope.userList[i].userID == id)
            {
                $scope.stat=1
                break;
            }
            else
            {
                $scope.stat=0
            }
        }
    }

    //Add to cart
    $scope.cart = []
    $scope.addToCart = function(i,q)
    {
        i.qty = q
        $scope.cart.push(i)
        $scope.grandTotal(i)
    }
    //grand Total
    $scope.total=0;
    $scope.grandTotal = function(obj)
    {
        $scope.total += obj.price * obj.qty
    }

})