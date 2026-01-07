// controllers/menuController.js
const MenuItem=require("../models/menuItem");

exports.getAllMenus = async (req, res) => {
  try {
    const items = await MenuItem.find();

    // Group by category
    const grouped = {
      breakfast: items.filter((item) => item.category === "breakfast"),
      lunch: items.filter((item) => item.category === "lunch"),
      dinner: items.filter((item) => item.category === "dinner"),
      desserts: items.filter((item) => item.category === "desserts"),
    };

    res.json(grouped);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch menu items" });
  }
};
exports.addMenuItem = async (req, res) => {
  try {
    const newItem = new MenuItem(req.body); // req.body should contain the item data
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(500).json({ error: "Failed to add menu item" });
  }
};
