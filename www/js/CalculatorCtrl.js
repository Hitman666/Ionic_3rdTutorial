angular.module('calculator', [])
.controller('CalculatorCtrl', function($scope, $ionicPopup){
	$scope.result = '';

	$scope.counter = 1;
	$scope.btnClicked = function(btn){		
		if (btn == 'C'){
			$scope.result = '';
		}
		else if (btn == '='){
			if ($scope.result == ''){
				return;
			}

			try {
				$scope.result = eval($scope.result).toFixed(0);
			}
			catch (err) {
				$ionicPopup.alert({
			    	title: 'Malformed input',
			    	template: "Ooops, please try again..."
			   	});

				$scope.result = '';		
			}

			//on every 5th result show the Interstitial ad one second after the result appears
			if ($scope.counter++ == 5){
				setTimeout(function(){
					if (AdMob){
						AdMob.showInterstitial();	
					}
					
					$scope.counter = 1;
				}, 1000);
			}
		}
		else{
			$scope.result += btn;	
		}
	};
});