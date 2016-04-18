function GlobalRoute($routeProvider, $locationProvider) {
                $routeProvider.

                when('/', {
                    template: require('../pages/home/home.html'),
                    controller: 'HomeController'
                }).

                /*when('/list-of-modules', {
                    template: require('../pages/list-of-modules/list-of-modules.html'),
                    controller: 'ListOfModules'
                }).*/

                /*when('/:slug', {
                    template: require('./single/single.html'),
                    controller: 'Single'
                }).*/

                otherwise({
                    redirectTo: '/'
                });

               if (window.history && window.history.pushState) {
                   //$locationProvider.html5Mode(true);
                }

            }

export {GlobalRoute};