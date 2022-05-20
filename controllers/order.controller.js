const { response, request } = require('express');
const finnegService = require('../services/finneg.service');


const orderNew = async (req = request, res = response) => {

    try {

        const { data: token } = await finnegService.auth();

        /*let items = [];

        for (let i = 0; i < req.body.line_items.length; i++) {
            items.push({
                vinculacionOrigen: req.body.line_items[i].product_id,
                Precio: req.body.line_items[i].price,
                ProductoCodigo: req.body.line_items[i].sku,
                Descripcion: req.body.line_items[i].title,
                Cantidad: req.body.line_items[i].quantity
            });
        }*/

        let items = [
            {
                vinculacionOrigen: 5580102566043,
                Precio: '69999.00',
                ProductoCodigo: 'SS5-X25',
                Descripcion: 'Reactivos para Drogas en Saliva Marca Craigh Medical  Confirm 5 (caja por 25 unidades)',
                Cantidad: 1
            },
            {
                vinculacionOrigen: 5580102566043,
                Precio: '69999.00',
                ProductoCodigo: '10178557',
                Descripcion: 'Reactivos para Drogas en Saliva Marca Craigh Medical  Confirm 5 (caja por 25 unidades)',
                Cantidad: 1
            },
        ]

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

        console.log(order);

        const { data } = await finnegService.orderNew(order, token);

        console.log(order, data.data);

        res.json({
            msg: 'OK',
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            msg: 'Error',
        });

    }

    
}

const orderUpdate = async (req, res = response) => {

    try {

        const { data: token } = await finnegService.auth();

        /*let items = [];

        for (let i = 0; i < req.body.line_items.length; i++) {
            items.push({
                vinculacionOrigen: req.body.line_items[i].product_id,
                Precio: req.body.line_items[i].price,
                ProductoCodigo: req.body.line_items[i].sku,
                Descripcion: req.body.line_items[i].title,
                Cantidad: req.body.line_items[i].quantity
            });
        }*/

        let items = [
            {
                vinculacionOrigen: 5580102566043,
                Precio: '69999.00',
                ProductoCodigo: 'SS5-X25',
                Descripcion: 'Reactivos para Drogas en Saliva Marca Craigh Medical  Confirm 5 (caja por 25 unidades)',
                Cantidad: 1
            },
            {
                vinculacionOrigen: 5580102566043,
                Precio: '69999.00',
                ProductoCodigo: '10178557',
                Descripcion: 'Reactivos para Drogas en Saliva Marca Craigh Medical  Confirm 5 (caja por 25 unidades)',
                Cantidad: 1
            },
        ]

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

        res.status(500).json({
            msg: 'Error',
        });

    }
}




module.exports = {
    orderNew,
    orderUpdate,
}