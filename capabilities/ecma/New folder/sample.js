var task = {
    title: 'My title',
    description: 'My description'
};

Object.defineProperty(task, 'toString', {
    value: function() {
        return this.title + ' ' + this.description;
    },
    writable: true,
    enumerable: true,
    configurable: true

});
console.log(task.toString());