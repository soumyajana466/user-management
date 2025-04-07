const db = require('../models'); 
const Customer = db.Customer;

// Create a new customer
exports.createCustomer = async (req, res) => {
  const { name, gmail, number, created_by, address } = req.body;
  try {
    const customer = await Customer.create({
      name,
      gmail,
      number,
      created_by,
      address,
    });
    return res.status(201).json(customer);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Get all customers
exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.findAll();
    return res.status(200).json(customers);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Get a customer by ID
exports.getCustomerById = async (req, res) => {
  const { id } = req.params;
  try {
    const customer = await Customer.findByPk(id);
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    return res.status(200).json(customer);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Update a customer by ID
exports.updateCustomer = async (req, res) => {
  const { id } = req.params;
    const { name, gmail, number, created_by, address } = req.body;
  try {
    const customer = await Customer.findByPk(id);
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    customer.name = name;
    customer.gmail = gmail;
    customer.number = number;
    customer.created_by = created_by;
    customer.address = address;
    await customer.save();
    return res.status(200).json(customer);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Delete a customer by ID
exports.deleteCustomer = async (req, res) => {
  const { id } = req.params;
  try {
    const customer = await Customer.findByPk(id);
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    await customer.destroy();
    return res.status(200).json({ message: "Customer deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};