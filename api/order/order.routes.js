const express = require('express')
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { log } = require('../../middlewares/logger.middleware')
const { getOrders, getOrderById, addOrder, updateOrder, removeOrder } = require('./order.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/byUser/:userId', log, requireAuth,getOrders)
router.get('/byOrder/:orderId', getOrderById)
router.post('/', addOrder)
router.put('/', updateOrder)
router.delete('/:orderId', requireAuth, removeOrder)


module.exports = router

