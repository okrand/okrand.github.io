var app = angular.module('orkunModule', []);
app.controller("orkunCtrl", function ($scope) {
    $scope.firstName = "Orkun";
    $scope.lastName = "Krand";
    $scope.email = "mailto:orkun.krand@gmail.com";
    $scope.twitter = "https://twitter.com/Krando67";
    $scope.linkedin = "https://www.linkedin.com/in/orkun-krand/";
    $scope.github = "https://github.com/okrand";
    $scope.highside = "https://github.com/okrand/Web-Programming";
    $scope.triathlon = "https://github.com/okrand/Triathlon_Trainer";
    $scope.herdr = "https://github.com/okrand/Herdr";
    $scope.youtube = "https://www.youtube.com/okmotorcu";
    $scope.resume = "./Resume_Orkun_Krand.pdf";
});
