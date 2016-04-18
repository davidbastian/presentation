import './home.scss';
function HomeController($scope, $http, $routeParams) {

    $scope.message = 'This is home'
   // $scope.slug = $routeParams.slug

}
export {
    HomeController
};
