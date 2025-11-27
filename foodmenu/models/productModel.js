import { db } from "../config/db.js";

export const getAllProducts = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM products", (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

export const addProduct = (name, price, category) => {
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO products (name, price, category) VALUES (?, ?, ?)",
      [name, price, category],
      (err, result) => {
        if (err) reject(err);
        else resolve(result);
      }
    );
  });
};

export const updateProductModel = (id, name, price, category) => {
  return new Promise((resolve, reject) => {
    db.query(
      "UPDATE products SET name=?, price=?, category=? WHERE id=?",
      [name, price, category, id],
      (err, result) => {
        if (err) reject(err);
        else resolve(result);
      }
    );
  });
};

export const deleteProductModel = (id) => {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM products WHERE id=?", [id], (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};
