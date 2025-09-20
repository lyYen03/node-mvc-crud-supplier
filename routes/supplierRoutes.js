const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/supplierController');

/**
 * @swagger
 * /suppliers:
 *   get:
 *     summary: Get list of suppliers
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