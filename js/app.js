/**
 * Created by you on 2/12/2015.
 */
var app = angular.module("myApp", ["ui.bootstrap", "ui.router" , "Mycontrollers", "Myservices"]);

app.config(function($stateProvider, $urlRouterProvider){

    $stateProvider

        .state('aboutUAE', {
            url: '/aboutUAE',
            views: {
                'mainArea' : {
                      templateUrl: 'templates/aboutUAE.html',
                      controller: 'aboutUAEcontroller'
                }
            }
        })

        .state('climate', {
            url: '/climate',
            views: {
                'mainArea' : {
                    templateUrl: 'templates/climate.html',
                    controller: 'climatecontroller'
                }
            }
        })

    .state('sports', {
        url: '/sports',
        views: {
            'mainArea' : {
                templateUrl: 'templates/sports.html',
                controller: 'sportscontroller'
            }
        }
    })

    .state('history', {
        url: '/history',
        views: {
            'mainArea' : {
                templateUrl: 'templates/history.html',
                controller: 'historycontroller'
            }
        }
    })

    .state('registration', {
        url: '/registration',
        views: {
            'mainArea' : {
                templateUrl: 'templates/registration.html',
                controller: 'registrationcontroller'
            }
        }
    });



        $urlRouterProvider.otherwise('/aboutUAE');
});