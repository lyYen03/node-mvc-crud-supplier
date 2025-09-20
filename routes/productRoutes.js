const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/productController');

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get list of products
 *     responses:
 *       200:
 *         description: ok
 */
router.get('/', ctrl.index);
router.get('/new', ctrl.newForm);
router.post('/create', ctrl.create);
router.get('/edit/:id', ctrl.editForm);
router.post('/update/:id', ctrl.update);
router.post('/delete/:id', ctrl.delete);

module.exports = router;