// HelloAngular_Directive.js
var myModule = angular.module("MyModule",[]);
myModule.directive("hello", function(){
    return {
        restrict: 'AEMC',       //四个字母分别表示：属性，元素，注释，类
        template: '<div>Hi everyone!</div>',
        replace: true
    }
});