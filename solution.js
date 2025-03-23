var PRICES = {
    Apple: 35,
    Banana: 20,
    Melon: 50,
    Lime: 15,
};
var DISCOUNTS = {
    // Melon - Buy one get one free offer
    Melon: function (count, price) { return Math.ceil(count / 2) * price; },
    // Lime - 3 for price of 2 offer
    Lime: function (count, price) { return Math.floor((count / 3) * 2) * price + (count % 3) * price; },
};
function calculateTotalCost(items) {
    var itemCounts = {};
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        itemCounts[item] = (itemCounts[item] || 0) + 1;
    }
    var totalCost = 0;
    // Calculates total cost after adjusting the discount
    for (var item in itemCounts) {
        var count = itemCounts[item];
        if (Object.keys(PRICES).indexOf(item) === -1) {
            console.log("Price for ".concat(item, " is not available."));
            return -1;
        }
        // @ts-ignore
        var price = PRICES[item] || 0;
        totalCost += DISCOUNTS[item] ? DISCOUNTS[item](count, price) : count * price;
    }
    return totalCost;
}
// Basket Items
var basket = ["Apple", "Apple", "Banana", "Melon", "Melon", "Lime", "Lime", "Lime", "Lime"];
var totalCost = calculateTotalCost(basket);
if (totalCost == -1) {
    console.log("Please add the price of the missing items before checkign out. Thank you");
}
else {
    console.log("Total cost: ".concat(totalCost, "p"));
    // Output: Total cost: 195p
}
