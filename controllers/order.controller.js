const { response, request } = require('express');
const finnegService = require('../services/finneg.service');


const orderNew = (req = request, res = response) => {

    console.log(req.body);

    const reponse = finnegService.auth();

    console.log(response);



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