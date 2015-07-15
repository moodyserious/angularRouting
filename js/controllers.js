/**
 * Created by you on 2/12/2015.
 */

var controllers = angular.module("Mycontrollers", []);



controllers.controller("aboutUAEcontroller", function($scope){
    console.log("aboutUAE controller called");

});

controllers.controller("climatecontroller", function($scope){
    console.log("climate controller calle");

});


controllers.controller("sportscontroller", function($scope, $http){

    console.log("sports controller calle");
    var successFunction = function(data)
    {
        $scope.winners = data;
    }
    var errorFunction = function(error)
    {
        console.log("Error");
    }

    $http.get("js/name.json").success(successFunction).error(errorFunction);

});

controllers.controller("historycontroller", function($scope){
    console.log("history controller calle");

});

controllers.controller("historycontroller", function($scope){
    console.log("registration controller calle");

});





