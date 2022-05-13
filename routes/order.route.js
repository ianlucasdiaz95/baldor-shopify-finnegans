const { Router } = require('express');

const { orderNew,
        orderUpdate } = require('../controllers/order.controller');

const router = Router();


router.post('/new', orderNew );
router.post('/update', orderUpdate);




module.exports = router;