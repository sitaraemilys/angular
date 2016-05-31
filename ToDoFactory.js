toDoApp.factory('ToDoFactory', function(){
  // first, we declare the constructor for the model
 // just like Thermostat
  var toDo = function(todoText){
    this.text = todoText;
    this.completed = (typeof completed !== 'undefined') ? completed : false;
  };

  toDo.prototype.complete = function(){
    this.completed = true;
  };
  // then we return the constructor from the Factory
  return toDo;
});
