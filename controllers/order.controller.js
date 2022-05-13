const { response, request } = require('express');


const orderNew = (req = request, res = response) => {

    console.log(res.body);

     res.json({
        msg: 'Endpoint Deshabilitado',
    });
}

const orderUpdate = (req, res = response) => {

    console.log(res.body);

     res.json({
        msg: 'Endpoint Deshabilitado',
    });
}




module.exports = {
    orderNew,
    orderUpdate,
}