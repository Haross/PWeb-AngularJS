var app = angular.module('HistApp',[])

  app.directive('menuL',[function(){
    return {
      restrict:'A',
      require: 'ngModel',                  
      scope: { modelValue: '=ngModel' }, 
      link:function(scope, element, attr, ngModel){
          var links=element.find('a');
          links.on('click',function(e){
              e.preventDefault();
              ngModel.$setViewValue( angular.element(this).attr('href') );
              scope.$apply();
          })        

          scope.$watch('modelValue',function(){
            for(var i=0,l=links.length;i<l;++i){
              var link = angular.element(links[i]);
              link.attr('href') === scope.modelValue ?
              link.addClass('active') : link.removeClass('active')
            }
          })
      }
    }
  }])

  app.controller('HistCtrl',['$scope',function($scope){
    $scope.menu = {};
    $scope.menu.vista = '2009';
  }])

  app.directive('modalDialog', function() {
  return {
    restrict: 'E',
    scope: {
      show: '='
    },
    replace: true, // Replace with the template below
    transclude: true, // we want to insert custom content inside the directive
    link: function(scope, element, attrs) {
      scope.dialogStyle = {};
      if (attrs.width)
        scope.dialogStyle.width = attrs.width;
      if (attrs.height)
        scope.dialogStyle.height = attrs.height;
      scope.hideModal = function() {
        scope.show = false;
      };
    },
    template: "<div class='ng-modal' ng-show='show'><div class='ng-modal-overlay' ng-click='hideModal()'></div><div class='ng-modal-dialog' ng-style='dialogStyle'><div class='ng-modal-close' ng-click='hideModal()'>X</div><div class='ng-modal-dialog-content' ng-transclude></div></div></div>"
  };
});
  app.controller('portada', function ($scope) {
    $scope.names = [
      {nombre: 'Andres Aguilar Cruz', matricula:"143385"},
      {nombre: 'Josseline Juliane Arreola Cruz', matricula:"143471"},
      {nombre: 'Javier de Jesús Flores Herrera', matricula:"143372"},
      {nombre: 'Hugo Sarmiento Toledo', matricula:"143359"},

    ];

  });


app.controller('MyCtrl', ['$scope', function($scope) {
  $scope.modalShown = false;
  $scope.toggleModal = function() {
    $scope.modalShown = !$scope.modalShown;
  };
  $scope.com1="DATA BINDING";
  $scope.com2="DIRECTIVES";
  $scope.com3="FILTERS";
  $scope.dato="Ver más";
  $scope.nombre = "Hugo";
  
  $scope.names = [
        'Jani',
        'Carl',
        'Margareth',
        'Hege',
        'Joe',
        'Gustav',
        'Birgit',
        'Mary',
        'Kai'
    ];
}]);