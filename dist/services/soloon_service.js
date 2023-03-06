"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSoloon = exports.postSoloon = void 0;
const axios_1 = __importDefault(require("axios"));
// service config
const service_config_1 = require("./service_config");
// helpers
const helpers_1 = require("../helpers/helpers");
// types
const types_1 = require("../types/types");
const uriParam = 'soloons';
const uri = `${service_config_1.baseUri}${uriParam}`;
/**
 * Create a new soloon with the given row and column. You should specify
 * a color parameter which can be used to customize the appearance of the soloon.
 * @param {number} row - The row position in the map.
 * @param {number} column - The column position in the map.
 * @param {Colors} color - The soloon color .
 * @returns {void}
 */
const postSoloon = async ({ row, column }, color) => {
    const data = {
        candidateId: service_config_1.candidateId,
        row,
        column,
        color,
    };
    const options = (0, helpers_1.requestOptions)(uri, types_1.HTTPRequest.POST, data);
    const response = await (0, axios_1.default)(options);
    if (response.statusText === 'OK') {
        console.log('🚀 ~ file: soloon_service.ts ~ postSoloon: ~ success:', {
            row,
            column,
            color,
        });
    }
};
exports.postSoloon = postSoloon;
/**
 * Delete a soloon with the given row and column.
 * If you made a mistake a Polyanet will be deleted.
 * @param {number} row - The row position in the map.
 * @param {number} column - The column position in the map.
 * @returns {void}
 */
const deleteSoloon = async ({ row, column }) => {
    const data = {
        candidateId: service_config_1.candidateId,
        row,
        column,
    };
    const options = (0, helpers_1.requestOptions)(uri, types_1.HTTPRequest.DELETE, data);
    const response = await (0, axios_1.default)(options);
    if (response.statusText === 'OK') {
        console.log('🚀 ~ file: soloon_service.ts ~ deleteSoloon ~ success:', {
            row,
            column,
        });
    }
};
exports.deleteSoloon = deleteSoloon;
