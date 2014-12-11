angular.module('starter.controllers', [])


    .controller('MainCtrl', function (Information) {

        var app = this;
        app.deals = Information.all();
        app.user = Information.user();

    })
    .controller('SideMenuCtrl', function (UserMenu, CompanyMenu, User) {
        var app = this;
        app.userMenu = UserMenu.all();
        app.compMenu = CompanyMenu.all();
        app.user = User;
    })
    .controller('PagesCtrl', function ($stateParams, UserMenu, CompanyMenu, User) {
        var app = this;
        app.userMenu = UserMenu.all();
        app.compMenu = CompanyMenu.all();


    })
     .controller('PageCtrl', function ($scope, $stateParams, UserMenu, CompanyMenu, User) {

        $scope.page = CompanyMenu.get($stateParams.pageId);

    })
     .controller('CompCtrl', function ($scope, $stateParams, UserMenu, CompanyMenu, User) {

        $scope.companyPage = CompanyMenu.get($stateParams.compPageId);

    })
    .controller('DealsCtrl', function ($scope, $stateParams, Deals) {
        var app = $scope;
        app.deals = Deals.all();
        app.keyWords = Deals.keywords;
    })
    .controller('DealCtrl', function ($scope, $stateParams, Deals, User) {
        var app = $scope;
        app.deal = Deals.get($stateParams.dealId);
        app.borderColor = Deals.borderColor;
        app.addSharePoints = User.addSharePoints;
        app.groups = [
            {name: 'Deal Info', items: [ {info:'You must do all this.', date: '1/11/99'}]},
            {name: 'Company Info', items: [{info: '1045 Somewhere Lane', date: '1/12/99'}]},
            {name: 'Conditions', items: [ {info: 'It has to be this and that', date: '1/12/99'}]}
        ];


        //$scope.groups = [];
        //for (var i=0; i<10; i++) {
        //    $scope.groups[i] = {
        //        name: i,
        //        items: []
        //    };
        //    for (var j=0; j<3; j++) {
        //        $scope.groups[i].items.push(i + '-' + j);
        //    }
        //}

        /*
         * if given group is the selected group, deselect it
         * else, select the given group
         */
        $scope.toggleGroup = function(group) {
            if ($scope.isGroupShown(group)) {
                $scope.shownGroup = null;
            } else {
                $scope.shownGroup = group;
            }
        };
        $scope.isGroupShown = function(group) {
            return $scope.shownGroup === group;
        };
    })

    .controller('AcctCtrl', function ($scope, $stateParams, User) {
        var app = $scope;
        app.user = User;
    })

    .controller('MapsCtrl', function ($scope, RoadMaps) {
        var app = $scope;
        app.maps = RoadMaps.all();

    })

    .controller('CatCtrl', function ($scope, $stateParams, Deals) {
        var app = $scope;
        app.category = Deals.category($stateParams.mapCt);
        app.catName = $stateParams.mapCt;


    })
    .controller('CouponsCtrl', function ($scope, User, Deals) {
        var app = $scope;
        app.hasCoupons = User.coupons.length;
        app.userCoupons = User.coupons;
        app.coupons = Deals.dealsByDealCodes();

    })


    .controller('CouponCtrl', function ($scope, $stateParams, Deals ) {
        var app = $scope;
        app.coupon = Deals.dealByDealCode($stateParams.dealCode);

    })
    .controller('StoresCtrl', function ($scope, Deals) {
        var app = $scope;
        app.stores = Deals.storeNames();

    })
    
    .controller('UserCtrl', function ($scope, User) {
        
    })
    
    .controller('PromosCtrl', function ($scope, Promos) {
        var app = $scope;
        app.promotions = Promos.all();
    })

.controller('DashCtrl', function ($scope) {
        var app = $scope;
    })
;