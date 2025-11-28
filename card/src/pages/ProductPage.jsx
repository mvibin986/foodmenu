import { useEffect, useState } from "react";
import API from "../api/axios";
import '../css/apro.css'

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", price: "", category: "" });
  const [editingId, setEditingId] = useState(null); 

  
  const fetchProducts = async () => {
    const res = await API.get("/products");
    setProducts(res.data);
  };

  
  const addProduct = async () => {
    await API.post("/products", form);
    setForm({ name: "", price: "", category: "" });
    fetchProducts();
  };

  
  const startEdit = (product) => {
    setEditingId(product.id);
    setForm({
      name: product.name,
      price: product.price,
      category: product.category,
    });
  };

  
  const updateProduct = async () => {
    await API.put(`/products/${editingId}`, form);
    setEditingId(null);
    setForm({ name: "", price: "", category: "" });
    fetchProducts();
  };

  
  const deleteProduct = async (id) => {
    await API.delete(`/products/${id}`);
    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="product-page">
  <div className="container" style={{ width: "500px" }}>
    <h2>Product Management</h2>

    <input
      placeholder="Name"
      value={form.name}
      onChange={(e) => setForm({ ...form, name: e.target.value })}
    />

    <input
      placeholder="Price"
      value={form.price}
      onChange={(e) => setForm({ ...form, price: e.target.value })}
    />

    <input
      placeholder="Category"
      value={form.category}
      onChange={(e) => setForm({ ...form, category: e.target.value })}
    />

    {editingId ? (
      <button onClick={updateProduct}>Update Product</button>
    ) : (
      <button onClick={addProduct}>Add Product</button>
    )}

    <h3>Products List</h3>

    {products.map((p) => (
      <div key={p.id} className="product-box">
        <b>{p.name}</b> <b>₹{p.price}</b>  <b>{p.category}</b>
        <button onClick={() => startEdit(p)}>Edit</button>
        <button onClick={() => deleteProduct(p.id)}>Delete</button>
      </div>
    ))}
  </div>
</div>

  );
}
