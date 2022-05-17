const { response, request } = require('express');
const finnegService = require('../services/finneg.service');


const orderNew = async (req = request, res = response) => {

    try {

        const { data: token } = await finnegService.auth();

        let items = [];

        for (let i = 0; i < req.body.line_items.length; i++) {
            items.push({
                vinculacionOrigen: req.body.line_items[i].product_id,
                Precio: req.body.line_items[i].price,
                ProductoCodigo: req.body.line_items[i].sku,
                Descripcion: req.body.line_items[i].title,
                Cantidad: req.body.line_items[i].quantity
            });
        }

        const order = {
            Cliente: "Prueba",
            IdentificacionExterna: req.body.number,
            EmpresaCodigo: "1",
            Fecha: req.body.created_at,
            CondicionPagoCodigo: "CE",
            TransaccionSubtipoCodigo: "PEDVTA",
            Items: items,
            Descripcion: "",
            TransaccionTipoCodigo: "OPER",
            WorkflowCodigo: "VENTAS",
            MonedaCodigo: "PES",
        }

        const { data } = await finnegService.orderNew(order, token);

        console.log(order, data.data);

        res.json({
            msg: 'OK',
        });

    } catch (error) {

        console.log(error);

        res.json({
            msg: 'Error',
        });

    }

    
}

const orderUpdate = async (req, res = response) => {

    try {

        const { data: token } = await finnegService.auth();

        let items = [];

        for (let i = 0; i < req.body.line_items.length; i++) {
            items.push({
                vinculacionOrigen: req.body.line_items[i].product_id,
                Precio: req.body.line_items[i].price,
                ProductoCodigo: req.body.line_items[i].sku,
                Descripcion: req.body.line_items[i].title,
                Cantidad: req.body.line_items[i].quantity
            });
        }

        const order = {
            Cliente: "Prueba",
            IdentificacionExterna: req.body.number,
            EmpresaCodigo: "1",
            Fecha: req.body.created_at,
            CondicionPagoCodigo: "CE",
            TransaccionSubtipoCodigo: "PEDVTA",
            Items: items,
            Descripcion: "",
            TransaccionTipoCodigo: "OPER",
            WorkflowCodigo: "VENTAS",
            MonedaCodigo: "PES",
        }

        const { data } = await finnegService.orderUpdate(order, token);

        console.log(order, data.data);

        res.json({
            msg: 'OK',
        });

    } catch (error) {

        console.log(error);

        res.json({
            msg: 'Error',
        });

    }
}




module.exports = {
    orderNew,
    orderUpdate,
}