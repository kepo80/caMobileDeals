angular.module('starter.services', [])

    .service('Information', function () {
        var info = [
            {"id":0,"name":"Louise","description":"Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh."},
            {"id":1,"name":"Mildred","description":"Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit."},
            {"id":2,"name":"Linda","description":"Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."},
            {"id":3,"name":"Emily","description":"Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."},
            {"id":4,"name":"Cynthia","description":"Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."},
            {"id":5,"name":"Amanda","description":"Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh."},
            {"id":6,"name":"Carol","description":"Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."},
            {"id":7,"name":"Gloria","description":"Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."},
            {"id":8,"name":"Andrea","description":"Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh."},
            {"id":9,"name":"Angela","description":"Phasellus in felis. Donec semper sapien a libero. Nam dui."}
        ]
        return {
            user: function() {
                return info[2].name;
            },
            all: function() {
                return info;
            },
            get: function(dealId) {
                return info[dealId];
            }
        }
    })

    .factory('UserMenu', function () {
        var customerItems = [
            {id: 0, name: 'My Account', state: 'home.account'},
            {id: 1, name: 'My Deals', state: 'my-deals'},
            {id: 2, name: 'My Points', state: 'my-points'}
        ];

        return {
            all: function() {
                return customerItems;
            },
            get: function(pageId) {
                return customerItems[pageId];
            }

        }
    })

    .factory('CompanyMenu', function () {
        var companyItems = [
            {id: 0, name: 'About Us', state: 'about'},
            {id: 1, name: 'Contact Us', state: 'contact'},
            {id: 2, name: 'Terms of Service', state: 'terms'},
            {id: 3, name: 'Privacy Policy', state: 'policies'},
            {id: 4, name: 'Log Out', state: 'log-out'}
        ];

        return {
            all: function () {
                return companyItems;
            },
            get: function (compPageId) {
                return companyItems[compPageId];
            }

        }
    })
    .factory('User', function () {
        var user =  {
            id: 0,
            fullName: 'John Q. User',
            firstName: 'John',
            avatar: "img/headShot.jpg",
            points: 0,
            purchasePoints: 0,
            sharePoints: 0,
            coupons:[
                {id: 0, coupon: 'JB00111142014D', redeemed: false, redeemDate: 0000000},
                {id: 1, coupon: 'TLB0011142014D', redeemed: false, redeemDate: 0000000},
                {id: 2, coupon: 'TWS0011142014D', redeemed: false, redeemDate: 0000000},
                {id: 3, coupon: 'OCD0011142014D', redeemed: false, redeemDate: 0000000}
            ],
            maps: [],
            deals: [],
            addSharePoints: function (sharePoints) {
                user.sharePoints = user.sharePoints + sharePoints;
                user.points = user.points + sharePoints;
                console.log(user.sharePoints);
            },
            addPurchasePoints: function (purchasePoints) {
                user.purchasePoints = user.purchasePoints + purchasePoints;
                user.points = user.points + purchasePoints;
                console.log(user.purchasePoints);
            }

        }
            return user;
    })
    .factory('Points', function (User, Deals) {
        return {

        }


    })
    .factory('Promos', function () {
        var promos = [
            {id:0, promoId: 'JB-P1', name: 'Paper and a Coffee', totalPoints: 450, purchasePoints: 100 , companyId: 'JB00111142014D', image: 'img/logo_1.svg'},
            {id:1, promoId: 'TLB-P1', name: 'Paper and a Coke', totalPoints: 450, purchasePoints: 100 , companyId: 'TLB0011142014D', image: 'img/logo_2.svg'},
            {id:2, promoId: 'TWS-P1', name: 'Paper and a Breakfast Sandwich', totalPoints: 450, purchasePoints: 100 , companyId: 'TWS0011142014D', image: 'img/logo_3.svg'},
            {id:3, promoId: 'FSDB-P1', name: 'CA', totalPoints: 400, purchasePoints: 100 , companyId: 'FSDB0011142014D', image: 'img/logo_4.svg'},
            {id:4, promoId: 'TGCHB-P1', name: 'CA and a Candy Bar', totalPoints: 200, purchasePoints: 100 , companyId: 'TGCHB0011142014D', image: 'img/logo_5.svg'},
            {id:5, promoId: 'OCD-P1', name: 'CA', totalPoints: 200, purchasePoints: 100 , companyId: 'OCD0011142014D', image: 'img/logo_6.svg'},

        ]
        return {
            all: function () {
                return promos;
            },
            get: function (promoId) {
                return promos[promoId];
            },
            addPoints: function (user) {

            },
            checkPoints: function (user) {

            }
        }
    })
    .factory('Deals', function (User) {
        var deals = [
            { id: 0, dealCode: 'JB00111142014D', barcode: 'img/barcode.jpg',dollarSavings: 6.00, name: '50% off Bagels', mainCategory: 'breakfast', subCategories:[], thumb: 'img/deals/bagels_thmb.jpg',  company: { featureImg: 'img/deals/bagels.jpg', details: 'Get 50% off a dozen bagels', totalPoints: 200, purchasePoints: 100,  sharePoints: 100, companyName: 'Joe\'s Bagels', address: '1059 Store Plaza', zip: 38109, keywords: ['Food,', 'Pastry,', 'Desert'], expires: '11/11/99'}},
            { id: 1, dealCode: 'TLB0011142014D', barcode: 'img/barcode.jpg',dollarSavings: 4.00, name: '20% off lunch ',  mainCategory: 'lunch', subCategories:[], thumb: 'img/deals/lunch_thmb.jpg', mainColor: '#b74c0a', company: { featureImg: 'img/deals/lunch.jpg', details: 'Get Up to 20% off any gourmet lunch combo', totalPoints: 200, purchasePoints: 100, sharePoints: 200, companyName: 'The Lunch Box', address: '2304 Lunch Lane', zip: 38118, keywords: ['Food,', 'Lunch'], expires: '11/11/99'}},
            { id: 2, dealCode: 'TWS0011142014D', barcode: 'img/barcode.jpg',dollarSavings: 3.00, name: '20% off Breakfast at Tiffany\'s', mainCategory: 'breakfast', subCategories:[], thumb: 'img/deals/breakfast_thmb.jpg', company: { featureImg: 'img/deals/breakfast.jpg', details: 'Get up to 20% OFF breakfast', totalPoints: 400, purchasePoints: 100, sharePoints: 100, companyName: 'Tiffany\'s Waffle Shop', address: '3018 Dinner Lane', zip: 38018, keywords: ['Food,', 'Breakfast'], expires: '11/11/99'}},
            { id: 3, dealCode: 'FSDB0011142014D',barcode: 'img/barcode.jpg',dollarSavings: 10.00, name: '30% off Dinner for the entire family', mainCategory: 'dinner', subCategories:[], thumb: 'img/deals/dinner_thmb.jpg', company:{ featureImg: 'img/deals/dinner.jpg', details: 'Get 30% off dinner for the entire family', totalPoints: 400, purchasePoints: 100, sharePoints: 100, companyName: '5 Star Dinner Bistro', address: '1004 Dinner Plaza', zip: 38106, keywords: ['Food,', 'Dinner'], expires: '11/11/99'}},
            { id: 4, dealCode: 'TGCHB0011142014D',barcode: 'img/barcode.jpg',dollarSavings: 2.00, name: '15% off any bag of Gourmet Coffee', mainCategory: 'beverage', subCategories:[], thumb: 'img/deals/coffee_thmb.jpg', company:{ featureImg: 'img/deals/coffee.jpg', details: '15% off any bag of freshly ground gourmet coffee', totalPoints: 400, purchasePoints: 100, sharePoints: 100, companyName: 'The Gourmet Coffee House', address: '4567 Coffee Ave', zip: 38105 , keywords: ['Food,', 'Drink,', 'Hot Beverage'], expires: '11/11/99'}},
            { id: 5, dealCode: 'OCD0011142014D', barcode: 'img/barcode.jpg',dollarSavings: 7.00, name: '25% off your next oil change', mainCategory: 'automotive', subCategories:[], thumb: 'img/deals/oilChange_thmb.jpg', company:{ featureImg: 'img/deals/oilChange.jpg', details: 'Get 25% off your next oil change', totalPoints: 400, purchasePoints: 100, sharePoints: 100, companyName: 'Oil Change Dealership', address: '4756 Oil Street', zip: 38105, keywords: ['Services,', 'Automotive'], expires: '11/11/99'}}
        ];

        return {
            all: function () {
                return deals;
            },
            get: function (dealId) {
                return deals[dealId];
            },
            dealByDealCode: function (dealCode) {
                var l = deals.length;
                var result = {};
                for (var i=0; i<l; i++) {
                    if(dealCode == deals[i].dealCode) {
                       result = deals[i];
                        return result;
                        break;
                    }

                   // Need to add action if no response if found


                }
            },
             dealsByDealCodes: function () {
                var userCoupons = User.coupons;
                var c = userCoupons.length;
                var d = deals.length;
                var result = [];
                var cp = '';
                 if(c) {
                     for (var i = 0; i < c; i++) {
                         cp = userCoupons[i].coupon;
                         for (var j = 0; j < d; j++) {
                             if (cp == deals[j].dealCode) {
                                 result.push(deals[j]);
                             }
                         }
                     }
                     return result;
                 } else {
                    result.push('You have no coupons at this time.');return result;
                 }


            },
            keywords: function (dealId) {
               var dealKeyWords = deals[dealId].company.keywords;
                var d = dealKeyWords.length;
                var result = '';
                    if(d) {
                        for (var i = 0; i < d; i++) {
                         result = result + dealKeyWords[i] + ' ';
                       }
                    } else {
                        result = "No Key Words";
                    }
               return result;
             },
            category: function(mapCat) {
              var result = [];
              var l = deals.length;
                for(var i=0; i<l; i++) {
                    if (deals[i].mainCategory === mapCat) {
                        result.push(deals[i]);
                    }
                }

                return result;
            },
            storeNames: function(){
                var result = [];
                var l = deals.length;
                for(var i=0;i<l;i++) {
                    result.push(deals[i].company.companyName);
                }

                return result;
            }
        }
    })

    .factory('RoadMaps', function () {
        var maps =[
            {id: 0, name: 'Daily Breakfast Savings', mainCategory: 'breakfast', icon: 'img/breakfast3.png', description: "Get a discount for breakfast every morning.", savings: "Save $15 a week", mainImg: 'img/deals/map-breakfast.jpg', class: 'breakfast', title: 'Start Your Day with Savings', tag: 'Coffee, Breakfast, Pastries...'},
            {id: 1, name: 'Daily Lunch Savings', mainCategory: 'lunch', icon: 'img/lunch.png', description: "Get a discount for lunch everyday.", savings: "Save $20 a week", mainImg: 'img/deals/map-lunch.jpg', class: 'lunch', title: 'Refuel after a Hard Morning', tag: 'Daily lunch savings'},
            {id: 2, name: 'Daily Dinner Savings', mainCategory: 'dinner', icon: 'img/dinner.png', description: "Get a discount for dinner every evening.", savings: "Save $20 a week", mainImg: 'img/deals/map-dinner.jpg', class: 'dinner', title: 'Perfect Ending to Your Day', tag: 'Great Dinner Savings'},
            {id: 3, name: 'Automotive Savings', mainCategory: 'automotive', icon: 'img/automotive.png', description: "Get great discounts on automotive services.", savings: "Up to 50% off", mainImg: 'img/deals/map-services.jpg', class: 'services', title: 'Fix it, Build it, and Clean it', tag: 'Great Deals on services'}

        ];

        return {
            all: function () {
                return maps;
            },
            get: function (mapsId) {
                return maps[mapsId];
            }
        }
    })

    .factory('Notifications', function (User) {
        
    })

    .factory('Features', function (User) {

    })