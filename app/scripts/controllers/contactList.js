angular.module('proyectofinalApp')
.controller('contactListController', function($scope){
	$scope.vengadores = [{
						nombre: "Carles",
						apellido: "Sanz"
					},
					{
						nombre: "Nick",
						apellido: "Furia"
					},
					{
						nombre: "Steve",
						apellido: "Rogers",
						alias: "Capitán America"
					},
					{
						nombre: "Thor"
					},
					{
						nombre: "Tony",
						apellido: "Stark",
						alias: "Iron Man"
					},
					{
						nombre: "Bruce",
						apellido: "Banner",
						alias: "Hulk"
					},
					{
						nombre: "Natasha",
						apellido: "Romanov",
						alias: "La viuda negra"
					},
					{
						nombre: "Clint",
						apellido: "Barton",
						alias: "Ojo de halcón"
					},
					{
						nombre: "Peter",
						apellido: "Parker",
						alias: "Spiderman"
	}];
});