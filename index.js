
import createUser from './createUser'
import updateUser from './updateUser'
import getUserById from './getUserById'
import createOrder from './createOrder'
import getOrdersByCustomerId from './getOrdersByCustomerId'
import getAllProducts from './getAllProducts'
import getProductCategory from './getProductCategory'
import getProductByCategory from './getProductByCategory'
import getShippingClasses from './getShippingClasses'
import getShippingZones from './getShippingZones'
import customerLogin from './customerLogin'
module.exports = {
    createUser: createUser,
    updateUser: updateUser,
    getUserById: getUserById,
    createOrder: createOrder,
    getOrdersByCustomerId:getOrdersByCustomerId,
    getAllProducts:getAllProducts,
    getProductCategory:getProductCategory,
    getProductByCategory:getProductByCategory,
    getShippingClasses:getShippingClasses,
    getShippingZones:getShippingZones,
    customerLogin:customerLogin
} 