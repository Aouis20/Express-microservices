const Product = require("../models/product.js");

exports.list = async (req, res) => {
  try {
    const products = await Product.find();
    if (!products) {
      return res.status(404).json({
        error: "Products not found",
      });
    }
    res.status(200).json(products);

  } catch (err) {
    res.status(500).json({
      error:
        err.message ||
        `Some error occurred while retrieving products`,
    });
  }
};

exports.create = async (req, res) => {
  try {
    const product = new Product({
      name: req.body.name,
      price: req.body.price,
      owner: req.auth.userId
    })
    await product.save();
    res.status(200).json(product);

  } catch (err) {
    res.status(500).json({
      error:
        err.message ||
        `Some error occurred while creating new product`,
    });
  }
};

exports.get = async (req, res) => {
  try {
    const product = await Product.findOne({ email: req.body.id });
    if (!product) {
      return res.status(404).json({
        error: "Product not found",
      });
    }
    res.status(200).json(product);

  } catch (err) {
    res.status(500).json({
      error:
        err.message ||
        `Some error occurred while retrieving product with id ${req.body.id}`,
    });
  }
};


exports.update = async (req, res) => {
  const { name, price } = req.body;

  try {
    const newProduct = await Product.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      {
        name,
        price,
      },
      { returnDocument: "after" }
    );

    if (!newProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (req.auth.userId !== newProduct.owner.valueOf()) {
      return res.status(403).json({ message: "This is not your product" });
    }

    return res.status(200).json(newProduct);
  } catch (err) {
    return res.status(500).json({
      error: err.message || "Some error occurred while updating product.",
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({
      _id: req.params.id,
      owner: req.auth.userId,
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(204).send()
  } catch (err) {
    return res.status(500).json({
      error: err.message || "Some error occurred while deleting product.",
    });
  }
};