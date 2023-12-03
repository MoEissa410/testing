export const sectorsData = [
  {
    category: "Manufacturing",
    subcategories: [
      "Construction materials",
      "Electronics and Optics",
      "Food and Beverage",
      "Machinery",
      "Metalworking",
      "Plastic and Rubber",
      "Wood",
      "Creative industries",
      "Energy technology",
      "Environment",
      "Service",
      "Transport and Logistics",
    ],
  },
  {
    category: "Construction materials",
    subcategories: [
      "Bricks",
      "Cement",
      "Glass",
      "Insulation",
      "Lumber",
      "Metals",
      "Paints",
      "Plastics",
      "Roofing",
      "Siding",
      "Tile",
    ],
  },
  {
    category: "Electronics and Optics",
    subcategories: [
      "Capacitors",
      "Diodes",
      "Fiber optics",
      "Integrated circuits",
      "Lasers",
      "LEDs",
      "Resistors",
      "Transistors",
    ],
  },
  // ... (repeat the same structure for other categories)
];
//
// database.js

let userDataList = [];

const saveUserData = (data) => {
  // Simulate saving to the "database" (in-memory array)
  userDataList.push(data);
};

const getUserDataList = () => {
  // Simulate retrieving all data from the "database"
  return [...userDataList]; // Return a copy of the array
};

export { saveUserData, getUserDataList };
