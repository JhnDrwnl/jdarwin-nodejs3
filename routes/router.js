const express = require('express');
const router = express.Router();
const controller = require('../controller/jdelcontroller.js');

router.get('/', controller.home);
router.get('/shop', controller.shop);
router.get('/main', controller.main);
router.get('/about', controller.about);
router.get('/shopdetails', controller.shopdetails);
router.get('/shoppingcart', controller.shoppingcart);
router.get('/checkout', controller.checkout);
router.get('/blogdetails', controller.blogdetails);
router.get('/blog', controller.blog);
router.get('/contact', controller.contact);
router.get('/home', controller.home);

module.exports = router;