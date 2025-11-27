import { getAdminByemail, insertAdmin } from '../models/adminModel.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/generateToken.js';


export const adminSignup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const exists = await getAdminByemail(email);
    if (exists.length > 0) {
      return res.status(400).json({ message: 'Admin already exists' });
    }

    const hashed = await bcrypt.hash(password, 10);
    const result = await insertAdmin({ name, email, password: hashed });

    const token = generateToken({ id: result.insertId, role: 'admin' });

    return res.status(201).json({
      message: 'Admin created successfully',
      token,
      adminId: result.insertId
    });

  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};






export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await getAdminByemail(email);
    if (admin.length === 0) {
      return res.status(400).json({ message: 'Admin not found' });
    }

    const isMatch = await bcrypt.compare(password, admin[0].password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    const token = generateToken({ id: admin[0].id, role: 'admin' });

    return res.status(200).json({ message: 'Login successful', token });

  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};
