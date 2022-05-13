const { response, request } = require('express');
const { finneg } = require('../services/finneg.service');


const orderNew = (req = request, res = response) => {

    console.log(req.body);



     res.json({
        msg: 'Endpoint Deshabilitado',
    });
}

const orderUpdate = (req, res = response) => {

    console.log(req.body);

     res.json({
        msg: 'Endpoint Deshabilitado',
    });
}




module.exports = {
    orderNew,
    orderUpdate,
}