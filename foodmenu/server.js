// import express from "express";
// import cors from "cors";
// import './config/db.js'
// import dotenv from "dotenv";
// import adminRoutes from './routes/adminRoutes.js'
// import productRoutes from "./routes/productRoutes.js";
// import userRoutes from './routes/userRoutes.js';
                    
// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());


// app.use("/api/products", productRoutes);
// app.use("/api/admin", adminRoutes)
// app.use("/api/user",userRoutes)

// app.listen(5000, () => console.log("Server running on port 5000"));

import express from "express";
import cors from "cors";
// import './config/db.js';
import dotenv from "dotenv";

import adminRoutes from './routes/adminRoutes.js';
import productRoutes from "./routes/productRoutes.js";
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// API routes
app.use("/api/products", productRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/user", userRoutes);


app.listen(5000, () => console.log("Server running on port 5000"));
