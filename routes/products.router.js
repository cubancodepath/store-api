const express = require("express");
const { faker } = require("@faker-js/faker");

const router = express.Router();

router.get("/", (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;

  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.product(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.food(),
    });
  }
  res.json(products);
});

router.get("/filter", (req, res) => {
  res.send("I'm a filter");
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ id, name: "Producto 2", price: 50.0 });
});

module.exports = router;
