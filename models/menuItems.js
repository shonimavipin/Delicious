
// models/MenuItem.js
const mongoose=require("mongoose");

const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    enum: ["breakfast", "lunch", "dinner", "desserts"],
    required: true
  },
  imgUrl: {
    type: String
  },
  rating: {
    type: Number,
    default: 4
  },
  comments: {
    type: Number,
    default: 0
  },
  date: {
    type: String
  },
  cookTime: {
    type: String,
    default: "30 mins"
  },
  ingredients: [
    {
      name: String,
      quantity: String,
    },
  ],
  instructions: [
    {
      stepNumber: Number,
      text: String,
    },
  ],
});

module.exports= mongoose.model("MenuItem", menuItemSchema);
