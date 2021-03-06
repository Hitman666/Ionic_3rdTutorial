angular.module('app', ['ionic', 'calculator'])

.run(function($ionicPlatform, $rootScope, $ionicPopup) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }

        var admobid = {
            banner: 'ca-app-pub-7957971173858308/9721191760',
            interstitial: 'ca-app-pub-7957971173858308/3674658165'
        };

        if (AdMob) {
            AdMob.createBanner({
                adId: admobid.banner,
                position: AdMob.AD_POSITION.BOTTOM_CENTER,
                autoShow: true
            });

            AdMob.prepareInterstitial({
                adId:admobid.interstitial, 
                autoShow:false
            });
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
        .state('calculator', {
            url: '',
            templateUrl: 'templates/calculator.html',
            controller: 'CalculatorCtrl'
        });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('');
});