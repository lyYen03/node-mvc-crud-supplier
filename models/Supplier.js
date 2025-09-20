const mongoose = require('mongoose');

const SupplierSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    address: { type: String, default: '' },
    phone: { type: String, default: '' }
}, { timestamps: true });

module.exports = mongoose.model('Supplier', SupplierSchema);