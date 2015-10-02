angular.module('calculator', [])
.controller('CalculatorCtrl', function($scope, $rootScope){
	$scope.result = '';

	$scope.counter = 1;
	$scope.btnClicked = function(btn){		
		if (btn == 'C'){
			$scope.result = '';
		}
		else if (btn == '='){
			$scope.result = eval($scope.result);

			//on every 5th result show the Interstitial ad one second after the result appears
			if ($scope.counter++ == 5){
				setTimeout(function(){
					AdMob.showInterstitial();
					$scope.counter = 1;
				}, 1000);
			}
		}
		else{
			$scope.result += btn;	
		}
	};

	$scope.testadmob = function(){

		if (AdMob) {
            $rootScope.admob = "YES ADMOB";
            AdMob.createBanner({
                adId: admobid.banner,
                position: AdMob.AD_POSITION.TOP_CENTER,
                autoShow: true
            });
        }
        else{
        	$rootScope.admob = "SRAJE";
        }

	};

	$scope.clickme = function(){
    	$rootScope.admob = "CLICKED";
	}
});