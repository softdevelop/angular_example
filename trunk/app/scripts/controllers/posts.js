(function(){
	'use strict';
	app.controller('PostsCtrl', function($scope, $location, Post) {
		$scope.posts = Post.all;
		$scope.post = {url: 'http://', title: ''};

		$scope.addPost = function()  {
			// using method of firebase
			Post.create($scope.post).then(function(ref) {
				$location.path('/post/' + ref.name());
				$scope.post = {url: 'http://', 'title': ''};
			});
			// method of $reso
			// Post.save($scope.post, function (ref) {
			//   $scope.posts[ref.name] = $scope.post;
			//   $scope.post = {url: 'http://', title: ''};
			// });
		};

		// delete Post
		$scope.delPost = function (postId) {
			Post.delete(postId);
			// Post.delete({id: postId}, function () {
		 //    	delete $scope.posts[postId];
		 //  	});
		};
	});
})();