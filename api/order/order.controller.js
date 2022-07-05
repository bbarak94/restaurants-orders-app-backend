const orderService = require('./order.service.js');
const logger = require('../../services/logger.service')
const authService = require('../auth/auth.service')


async function getOrders(req, res) {
    try {
        logger.debug('Getting Orders')
        var params = req.params.userId;
        const orders = await orderService.query(params)
        res.json(orders);
    } catch (err) {
        logger.error('Failed to get orders', err)
        res.status(500).send({ err: 'Failed to get orders' })
    }
}

async function getOrderById(req, res) {
    try {
        console.log('test')
        
        const orderId = req.params.orderId;
        console.log('orderId:',orderId)        
        const order = await orderService.getById(orderId)
        console.log('order ---------------:',order)
        
        res.json(order)
    } catch (err) {
        logger.error('Failed to get order', err)
        res.status(500).send({ err: 'Failed to get order' })
    }
}

async function addOrder(req, res) {
    try {
        const order = req.body;
        const addedOrder = await orderService.add(order)
        res.json(addedOrder)
    } catch (err) {
        logger.error('Failed to add order', err)
        res.status(500).send({ err: 'Failed to add order' })
    }
}

async function updateOrder(req, res) {
    try {
        const order = req.body;
        const updatedOrder = await orderService.update(order)
        res.json(updatedOrder)
    } catch (err) {
        logger.error('Failed to update order', err)
        res.status(500).send({ err: 'Failed to update order' })
    }
}

async function removeOrder(req, res) {
    try {
        const orderId = req.params.orderId;
        const removedId = await orderService.remove(orderId)
        res.send(removedId)
    } catch (err) {
        logger.error('Failed to remove order', err)
        res.status(500).send({ err: 'Failed to remove order' })
    }
}

module.exports = {
    getOrders,
    getOrderById,
    addOrder,
    updateOrder,
    removeOrder
}