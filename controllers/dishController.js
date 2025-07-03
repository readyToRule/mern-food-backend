const Dish = require('../models/Dish');

exports.getDishes = async (req, res) => {
  const { cuisine, meal } = req.query;
  try {
    const filter = {};
    if (cuisine) filter.cuisineType = cuisine;
    if (meal) filter.mealType = meal;
    const dishes = await Dish.find(filter);
    res.json(dishes);
  } catch (err) {
    res.status(500).json({ msg: "Server error", err });
  }
};
