function homeCtrl( $scope ) {
    $scope.name = "wuxinting吴新庭";
}

var homeApp = angular.module( 'homeApp', [] )
homeApp.controller( 'homeCtrl', homeCtrl );