var app = angular.module('app',[]);
var url = $("#url").val();

app.controller('homeCtrl', function($scope, $http){
    $('#da-slider').cslider({
        autoplay    : true,
    
        interval    : 5000  
    });
    $("#owl-example").owlCarousel();
})


app.controller('mobileApp',  function($scope, $http){
	$scope.manage = [];
	$scope.view = [];
	$scope.getapp = function(){
		$http.post(url+"app/get_app").success(function(e){
			$scope.manage = e;
		})
	}
	$scope.getapp();
   
    $scope.showDetail = function(i){
         $("#fv").modal('show');
		 $scope.view = $scope.manage[i];
    }
})
app.controller('contact',  function($scope, $http){
	$scope.form = [];
	$scope.det = {'name':'', 'e_mail':'', 'mobile_no':'', 'message':''};
	$scope.addcontact = function(){
		var ec = 0;
		if($scope.det.name == ''){
			ec = 1;
			alert('Please enter name');
			$("#name").addClass('err');
		}
		if($scope.det.e_mail == ''){
			ec = 1;
			alert('Please enter e_mail');
			$("#e_mail").addclass('err');
		}
		if($scope.det.mobile_no == ''){
			ec = 1;
			alert('Please enter mobile number');
			$("#mobile_no").addclass('err');
		}
		if(ec == 0){
		$http.post(url+"contact/add_contact", $scope.det).success(function(e){
		})
		}
	}
	
	
})




function showMwnu(){
	$("#mmnu").toggle(500);
}