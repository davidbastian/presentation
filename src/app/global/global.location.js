function GlobalLocation($rootScope, $location) {

    $rootScope.$on('$routeChangeSuccess', function() {
       // ga('send', 'pageview', $location.path());
    });

}

export {
    GlobalLocation
};