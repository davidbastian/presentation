//load styles
import './styles/base/base.scss'

//load npm-modernizr
import modernizr from 'imports?this=>window!../../../node_modules/npm-modernizr/modernizr.js'
import detectizr from 'imports?this=>window!../../../node_modules/detectizr/dist/detectizr.js'

//load angular
import angular from 'angular'
import ngroute from 'angular-route'
import nganimate from 'angular-animate'
import sanitize from 'angular-sanitize'

import zepto from 'npm-zepto'


//load jquery 
//import jquery from '../../../node_modules/jquery/dist/jquery.js'

//load gsap
import gsap from 'gsap'

//load gsap plugins
import ScrollToPlugin from '../../../node_modules/gsap/src/uncompressed/plugins/ScrollToPlugin.js'
import Draggable from '../../../node_modules/gsap/src/uncompressed/utils/Draggable.js'
import ThrowPropsPlugin from 'imports?this=>window!./vendor/ThrowPropsPlugin.min.js'

//load global animation between pages
import { GlobalRouteAnimation } from './global.route-animation'

//load routing
import { GlobalRoute } from './global.route'

//pageLocation
import { GlobalLocation } from './global.location.js'

//load controllers
import { GlobalController } from './global.controller'
import { HomeController } from '../pages/home/home.controller'

//load header & footer
import { headerApp } from '../../app/common/directives/header/header.directive'
import { headerController } from '../../app/common/directives/header/header.controller'



//load brand
import { brand } from '../../app/common/directives/header/brand'


//load modules

import { twoColumn } from '../../app/common/modules/two-column/two-column'


//filters
import { trusted } from '../../app/common/filters/trusted.js'


//start app
angular
    .module("db", [ngroute, nganimate, sanitize])

//.animation('.main-container', GlobalRouteAnimation)

    .config(['$routeProvider', '$locationProvider', GlobalRoute])

    .controller('headerController', ['$scope', '$http', headerController])
    .controller('GlobalController', ['$scope', GlobalController])
    .controller('HomeController', ['$scope', HomeController])


//header & footer
    .directive('headerApp', headerApp)

//modules

    .directive('twoColumn', twoColumn)

    //brand
    .directive('brand', brand)

    //filters
    .filter('trusted', ['$sce', trusted])

    .run(['$rootScope', '$location', GlobalLocation])