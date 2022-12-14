import CartItem from "../models/CartItem";
import tshirt from "../assets/images/tshirt.png";
import box from "../assets/images/box.png";
import waterBottle from "../assets/images/water-bottle.png";
import ShoppingItem from "../models/ShoppingItem";

const SHOPPING_ITEMS: ShoppingItem[] = [
  {
    id: "1",
    name: "Cardboard Box",
    description: "container",
    minimunAmount: 10,
    posibleAmounts: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    image: box,
    price: 9.5,
  },
  {
    id: "2",
    name: "Basic T-Shirt",
    description: "Green, Small",
    minimunAmount: 24,
    posibleAmounts: [24, 30, 40, 50, 60, 70, 80, 90, 100],
    priceRange: [10, 24],
    image: tshirt,
    price: 13.5,
  },
  {
    id: "3",
    name: "Woman bottle",
    description: "Blue",
    minimunAmount: 10,
    posibleAmounts: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    image: waterBottle,
    price: 36.5,
  },
];

export const CART_ITEMS: CartItem[] = [
  {
    id: "pack1",
    item: {
      id: "1",
      name: "My Christmas pack",
      shoppingItems: SHOPPING_ITEMS,
      posibleAmounts: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    },
    amount: 50,
  },
  {
    id: "1",
    item: SHOPPING_ITEMS[1],
    amount: 10,
  },
  {
    id: "2",
    item: SHOPPING_ITEMS[2],
    amount: 10,
  },
];

export const SUGESTED_ITEMS = new Array<ShoppingItem>(4).fill(
  SHOPPING_ITEMS[1]
);
