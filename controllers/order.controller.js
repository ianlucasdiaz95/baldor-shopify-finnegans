const { response, request } = require('express');


const orderNew = (req = request, res = response) => {

     res.json({
        msg: 'Endpoint Deshabilitado',
    });
}

const orderUpdate = (req, res = response) => {

     res.json({
        msg: 'Endpoint Deshabilitado',
    });
}




module.exports = {
    orderNew,
    orderUpdate,
}