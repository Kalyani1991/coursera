(function(){
    'use strict';

    angular.module('LunchStatus',[])
        .controller('LunchStatusController',LunchStatusController);

    LunchStatusController.$inject = ['$scope'];
    function LunchStatusController($scope) {
        $scope.lunchMenu = '';
        $scope.message = '';
        $scope.checked = false;

        $scope.checkLunchStatus = function(){
            //console.log("In function");
            if($scope.lunchMenu != ''){    
                //console.log($scope.lunchMenu);
                var arrDishes = $scope.lunchMenu.split(',');
                console.log(arrDishes);
                var arrDishesNew = arrDishes.filter(function(v){
                    return v!==''
                });  
                $scope.checked = true;
                $scope.empty = false;
                if(arrDishesNew.length > 3){                    
                    $scope.message = "Too Much....!!!";
                }else{
                    $scope.message = "Enjoy....!!!";
                }              
            } else{
                $scope.empty = true;
                //console.log("Please enter some data first");
                $scope.message = "Please enter some data first";
            }
            
        }
    }


})();