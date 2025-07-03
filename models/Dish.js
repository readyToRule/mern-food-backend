const mongoose = require('mongoose');

const DishSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cuisineType: { type: String, enum: ['north', 'south'], required: true },
  mealType: { type: String, enum: ['breakfast', 'lunch', 'dinner'], required: true },
  image: { type: String },
  description: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Dish', DishSchema);
