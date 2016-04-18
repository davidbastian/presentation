function headerController($scope, $http, $routeParams) {

    $scope.message = 'This is headerController'

    // $scope.slug = $routeParams.slug
    //console.log($scope)

    window.onscroll = function() {
        var posTop = (window.scrollY);

        if (posTop >= 80) {
            document.getElementsByTagName("header")[0].className = "active";
        } else {
            document.getElementsByTagName("header")[0].className = "";
        }
    };


    $('.burger').click(function() {

        if ($('#menu').hasClass('active')) {

            $('#menu').removeClass('active');

        } else {

            $('#menu').addClass('active');

        }

        return false;
    });

    $('#search-nav a').click(function(){

            return false;
    });

}
export {
    headerController
};