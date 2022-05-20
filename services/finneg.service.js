const axios = require('axios');

const finnegService = {

    auth() {
        return axios.get(`${process.env.FINNEG_API_URL}/oauth/token?grant_type=client_credentials&client_id=${process.env.FINNEG_CLIENT}&client_secret=${process.env.FINNEG_SECRET}`);
    },

    orderNew(order, token) {
        return axios.post(`${process.env.FINNEG_API_URL}/pedidoVenta?ACCESS_TOKEN=${token}`, order );
    },

    orderUpdate(order, token) {
        return axios.put(`${process.env.FINNEG_API_URL}/pedidoVenta/${order.IdentificacionExterna}?ACCESS_TOKEN=${token}`, order );
    }
}

module.exports = finnegService;