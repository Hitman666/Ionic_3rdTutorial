angular.module('calculator', [])
.controller('CalculatorCtrl', function($scope, $rootScope){
	$scope.result = '';

	$scope.btnClicked = function(btn){		
		if (btn == 'C'){
			$scope.result = '';
		}
		else if (btn == '='){
			$scope.result = eval($scope.result);
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