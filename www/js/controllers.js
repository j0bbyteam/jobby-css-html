angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };

  $scope.searchKey = "";
  $scope.professions = [
    {
      "img" : "img/money-gold-coins-finance.jpg",
      "name" : "Tax",
      "number" : 1
    },
    {
      "img" : "img/MotorcycleMechanic_0.jpg",
      "name" : "Mechanic",
      "number" : 0
    },
    {
      "img" : "img/Depositphotos_6638219_m-1024x680.jpg",
      "name" : "Cleaners",
      "number" : 0
    },
    {
      "img" : "img/planner-1024x683.jpg",
      "name" : "Wedding Planner",
      "number" : 0
    },
    {
      "img" : "img/1361944886946560.jpg",
      "name" : "Travel",
      "number" : 0
    },
    {
      "img" : "img/nanny_2814335b.jpg",
      "name" : "Childcare",
      "number" : 0
    },
    {
      "img" : "img/home-renovation_1.jpg",
      "name" : "Home Renovation",
      "number" : 0
    },
    {
      "img" : "img/394968_538b_5.jpg",
      "name" : "Photographer",
      "number" : 0
    },
    {
      "img" : "img/image-Legal-523x324.png",
      "name" : "Legal",
      "number" : 0
    },
    {
      "img" : "img/content_ethnicity_1forweb.jpg",
      "name" : "Catering",
      "number" : 0
    },
    {
      "img" : "img/is0313-p12-HOLLAND_2514824b.jpg",
      "name" : "Tutor",
      "number" : 0
    },
    {
      "img" : "img/massage-relaxation_132916313.jpg",
      "name" : "Massage",
      "number" : 0
    },
    {
      "img" : "img/images.jpeg",
      "name" : "Therapy",
      "number" : 0
    },
    {
      "img" : "img/c700x420.jpg",
      "name" : "Fitness",
      "number" : 20
    },
    {
      "img" : "img/construction2.jpg",
      "name" : "Skilled Trades",
      "number" : 0
    },
    {
      "img" : "img/sports_entertainment.jpg",
      "name" : "Entertainment",
      "number" : 0
    },
    {
      "img" : "img/music.jpeg",
      "name" : "Music Lessons",
      "number" : 0
    }
  ];

  $scope.array = [
    {
      "$id" : "simplelogin:58",
      "address" : "540 Sherbourne St, Toronto, ON M4X 1L2, Canada",
      "curlocation" : [ 43.669177999999995, -79.38729959999999 ],
      "email" : "a@q.com",
      "group" : "Trainers",
      "imgLink" : "http://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg",
      "info" : "I am a professional tax guy. I file tax everyday",
      "latitude" : 43.6691204,
      "location" : [ 43.66919370000001, -79.37560492636722 ],
      "longitude" : -79.3759403,
      "modified" : 1463544992498,
      "normalRate" : 3,
      "position" : [ 43.8148736, -79.3117931 ],
      "primeRate" : 5,
      "profession" : "tax",
      "tokens" : 0,
      "username" : "qqqqq",
      "youtubeLink" : "cQ5SJRiDEhU"
    }

  ]
});
