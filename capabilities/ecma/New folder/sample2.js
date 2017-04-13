var task = function(name) {
    this.name = name,
        this.completed = false,

        this.complete = function() {
            console.log("complete task: " + this.name);
            this.completed = true
        },
        this.save = function() {
            console.log(" saving task: " + this.name);
        }
}
var task1 = new task('create the demo constructor');
var task2 = new task('create the demo singletone');
var task3 = new task('create the demo prototype');

task1.complete();
task2.save();
task3.save();