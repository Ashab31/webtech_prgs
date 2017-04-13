var Task = function(name) {
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function() {
    console.log('completing task: ' + this.name);
    this.completed = true;
};

Task.prototype.save = function() {
    console.log('saving task: ' + this.name);
};

var task1 = new Task('create a demo for constructors');
var task2 = new Task('create the demo for singletone');
var task3 = new Task('create the demo for prototype');

task1.complete();
task2.save();
task3.save();