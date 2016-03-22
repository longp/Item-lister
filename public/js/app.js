angular.module("item_lister", []).controller("userController", function ($http) {
  var User = this;
  User.items = [];
    User.login = function () {
      $http({
        method: 'POST',
        url: "/login",
        data: {
          username: User.username,
          password: User.password,
          funds: 1000000
        },
      }).then(function (result) {
        User.id = result._id;
        User.username = result.username;
      });
    };
    
});
