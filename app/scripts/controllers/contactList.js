angular.module('proyectofinalApp')
.controller('contactListController', function($scope){
	$scope.vengadores = [
					{
						nombre: "Tony",
						apellido: "Stark",
						alias: "Iron Man"
					},
					{
						nombre: "Thor"
					},
					{
						nombre: "Steve",
						apellido: "Rogers",
						alias: "Capitán America"
					},
					{
						nombre: "Natasha",
						apellido: "Romanov",
						alias: "La viuda negra"
					},
					{
						nombre: "Bruce",
						apellido: "Banner",
						alias: "Hulk"
					},
					{
						nombre: "Clint",
						apellido: "Barton",
						alias: "Ojo de halcón"
					},
					{
						nombre: "Nick",
						apellido: "Furia"
					},
					{
						nombre: "Argumento"
					}];
});