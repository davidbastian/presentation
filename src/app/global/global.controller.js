function GlobalController($scope) {
    $scope.metadata = {
        'title': 'default title',
        'description': 'default description',
    };

    var brand = require('../../assets/vectors/brand.svg');

    $scope.brand = brand;

    //$scope.phone = $('html').hasClass('mobile');

    // whenever a controller emits the newPageLoaded event, we update the app's metadata
    $scope.$on('newPageLoaded', function(event, metadata) {
        $scope.metadata = metadata
    });

    $scope.$on('$viewContentLoaded', function() {
        // Run after view loaded.
    });
}

export {
    GlobalController
};