var singleton = (function() {
    var instance;

    function createInstance() {
        var object = new Object("I am the instance");
        return object;
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

function run() {

    var instance1 = singleton.getInstance();
    var instance2 = singleton.getInstance();

    alert("same instance? " + (instance1 === instance2));
}

run();