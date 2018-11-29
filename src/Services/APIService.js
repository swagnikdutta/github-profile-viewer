const axios = require('axios');

const invoke = (options) => {
    return new Promise((resolve, reject) => {
        axios({
            url: options.url,
            method: options.method,
        }).then((response) => {
            // resolve({
            //     data: response.data,
            //     statusCode: response.status,
            // });
        }).catch((err) => {
            // reject({
            //     statusCode: err.response.status,
            //     errorMessage: err.response.data.message
            // });
        });
    });
};

module.exports = {
    invoke
}
