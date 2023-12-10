var myModule = angular.module('myApp', []);
myModule.controller('myCtrl', function($scope,$http) {

    $scope.taskData= []
    $scope.newTask = {}

    $scope.getTodoTask = function()
    {
        $http.get('/api/getTaskData').then((response)=>{
            $scope.taskData = response.data
            $scope.newTask = {}
        })
    }
$scope.getTodoTask()
})