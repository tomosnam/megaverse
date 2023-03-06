"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestOptions = void 0;
const types_js_1 = require("../types/types.js");
const requestOptions = (uri, method = types_js_1.HTTPRequest.GET, data = {}) => {
    const options = {
        method,
        headers: { 'content-type': 'application/json' },
        data: JSON.stringify(data),
        url: uri,
    };
    return options;
};
exports.requestOptions = requestOptions;
