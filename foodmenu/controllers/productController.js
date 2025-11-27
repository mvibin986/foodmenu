import {
  getAllProducts,
  addProduct,
  updateProductModel,
  deleteProductModel,
} from "../models/productModel.js";
 

export const getProducts = async (req, res) => {
  const products = await getAllProducts();
  res.json(products);
};

export const createProduct = async (req, res) => {
  const { name, price, category } = req.body;
  await addProduct(name, price, category);
  res.json({ message: "Product added" });
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, category } = req.body;
  await updateProductModel(id, name, price, category);
  res.json({ message: "Product updated" });
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  await deleteProductModel(id);
  res.json({ message: "Product deleted" });
};    