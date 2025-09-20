const Product = require('../models/Product');
const Supplier = require('../models/Supplier');

exports.index = async(req, res) => {
    const supplierFilter = req.query.supplier || null;
    const query = supplierFilter ? { supplierId: supplierFilter } : {};
    const products = await Product.find(query).populate('supplierId').lean();
    const suppliers = await Supplier.find().lean();
    res.render('products/index', { products, suppliers, supplierFilter });
};

exports.newForm = async(req, res) => {
    const suppliers = await Supplier.find().lean();
    res.render('products/new', { suppliers });
};

exports.create = async(req, res) => {
    const { name, price, quantity, supplierId } = req.body;
    await Product.create({ name, price, quantity, supplierId });
    res.redirect('/products');
};

exports.editForm = async(req, res) => {
    const product = await Product.findById(req.params.id).lean();
    const suppliers = await Supplier.find().lean();
    if (!product) return res.redirect('/products');
    res.render('products/edit', { product, suppliers });
};

exports.update = async(req, res) => {
    const { name, price, quantity, supplierId } = req.body;
    await Product.findByIdAndUpdate(req.params.id, { name, price, quantity, supplierId });
    res.redirect('/products');
};

exports.delete = async(req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect('/products');
};