const PRICES = {
  Apple: 35,
  Banana: 20,
  Melon: 50,
  Lime: 15,
};

type Discounts = Record<string, (count: number, price: number) => number>;

const DISCOUNTS: Discounts = {
  // Melon - Buy one get one free offer
  Melon: (count, price) => Math.ceil(count / 2) * price,
  // Lime - 3 for price of 2 offer
  Lime: (count, price) => Math.floor((count / 3) * 2) * price + (count % 3) * price,
};

function calculateTotalCost(items: string[]): number {
  const itemCounts: Record<string, number> = {};

  for (const item of items) {
    itemCounts[item] = (itemCounts[item] || 0) + 1;
  }

  let totalCost = 0;

  // Calculates total cost after adjusting the discount
  for (const item in itemCounts) {
    const count = itemCounts[item];

    if (Object.keys(PRICES).indexOf(item) === -1) {
      console.log(`Price for ${item} is not available.`);
      return -1;
    }

    // @ts-ignore
    const price = PRICES[item] || 0;

    totalCost += DISCOUNTS[item] ? DISCOUNTS[item](count, price) : count * price;
  }

  return totalCost;
}

// Basket Items
const basket = ["Apple", "Apple", "Banana", "Melon", "Melon", "Lime", "Lime", "Lime", "Lime"];

const totalCost = calculateTotalCost(basket);
if (totalCost == -1) {
  console.log("Please add the price of the missing items before checkign out. Thank you");
} else {
  console.log(`Total cost: ${totalCost}p`);
  // Output: Total cost: 195p
}


