"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePolyanet = exports.postPolyanet = void 0;
const axios_1 = __importDefault(require("axios"));
// service config
const service_config_1 = require("./service_config");
// helpers
const helpers_1 = require("../helpers/helpers");
// types
const types_1 = require("../types/types");
const uriParam = 'polyanets';
const uri = `${service_config_1.baseUri}${uriParam}`;
console.log(uri);
/**
 * Create a new polyanet with the given row and column.
 * @param {number} row - The row position in the map.
 * @param {number} column - The column position in the map.
 * @returns {void}
 */
const postPolyanet = async ({ row, column }) => {
    const data = {
        candidateId: service_config_1.candidateId,
        row,
        column,
    };
    const options = (0, helpers_1.requestOptions)(uri, types_1.HTTPRequest.POST, data);
    const response = await (0, axios_1.default)(options);
    if (response.statusText === 'OK') {
        console.log('🚀 ~ file: polyanet_service.ts ~ postPolyanet: ~ success:', { row, column });
    }
};
exports.postPolyanet = postPolyanet;
/**
 * Delete a polyanet with the given row and column.
 * @param {number} row - The row position in the map.
 * @param {number} column - The column position in the map.
 * @returns {void}
 */
const deletePolyanet = async ({ row, column }) => {
    const data = {
        candidateId: service_config_1.candidateId,
        row,
        column,
    };
    const options = (0, helpers_1.requestOptions)(uri, types_1.HTTPRequest.DELETE, data);
    const response = await (0, axios_1.default)(options);
    if (response.statusText === 'OK') {
        console.log('🚀 ~ file: polyanet_service.ts ~ deletePolyanet ~ success:', { row, column });
    }
};
exports.deletePolyanet = deletePolyanet;
