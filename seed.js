const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Supplier = require('./models/Supplier');
const Product = require('./models/Product');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async() => {
        console.log('Seeding data...');
        await Supplier.deleteMany({});
        await Product.deleteMany({});

        const s1 = await Supplier.create({ name: 'NCC A', address: 'Hà Nội', phone: '0123456789' });
        const s2 = await Supplier.create({ name: 'NCC B', address: 'HCM', phone: '0987654321' });

        await Product.create({ name: 'Sản phẩm 1', price: 100000, quantity: 10, supplierId: s1._id });
        await Product.create({ name: 'Sản phẩm 2', price: 200000, quantity: 5, supplierId: s2._id });

        console.log('✅ Seed done');
        process.exit();
    })
    .catch(err => console.error(err));