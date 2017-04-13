var stateObject = {
    "Beverages": {
        "Tea": ["Green Tea", "Lemon Tea"],
        "Coffee": ["Latte", "Cappuccino"]
    },
    "Snacks": {
        "Sandwich": ["Corn", "Bread Omlet"],
        "Noodles": ["Soupy", "Veg"]
    }
}
window.onload = function() {
    var category = document.getElementById("category"),
        drinks = document.getElementById("drinks"),
        order = document.getElementById("order");
    for (var index in stateObject) {
        category.options[category.options.length] = new Option(index, index);

    }
    category.onchange = function() {
        drinks.length = 1;
        order.length = 1;
        if (this.selectedIndex < 1)
            return;
        for (var index2 in stateObject[this.value]) {
            drinks.options[drinks.options.length] = new Option(index2, index2);
        }
        // category.onchange();
        drinks.onchange = function() {
            order.length = 1;
            if (this.selectedIndex < 1) return;
            var junk = stateObject[category.value][this.value];
            for (var i = 0; i < junk.length; i++) {
                order.options[order.options.length] = new Option(junk[i], junk[i]);
            }
        }


    }
}