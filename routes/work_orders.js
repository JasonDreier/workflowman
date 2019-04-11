import { Router } from 'express';
import { getWorkOrders } from '../dal';

var router = Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('work_orders', { title: 'Work Orders', msg: 'Good day!', workOrders: getWorkOrders() });
});

export default router;
