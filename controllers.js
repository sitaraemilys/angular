//
// 1. Got the root module (toDoApp), which is equal to angular.module('toDoApp', [])
// 2. Used the controller method on this root module to attach a controller module
// 3. Named the controller module ToDoController
// 4. Set up the controller in a callback provided to the controller() method.

toDoApp.controller('ToDoController', ['ToDoFactory', function(ToDoFactory) {
  // anything in here is 'controller code'
  var self = this;
  self.todos = [{ text: "ToDo1", completed: true }, { text: "ToDo2", completed: false }];

  self.addToDo = function(todoText){
    self.todos.push(new ToDoFactory(todoText));
  };

  self.removeToDo = function(){
    self.todos.pop();
  };

}]);
