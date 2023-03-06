"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCometh = exports.postCometh = void 0;
const axios_1 = __importDefault(require("axios"));
// service config
const service_config_1 = require("./service_config");
// helpers
const helpers_1 = require("../helpers/helpers");
// types
const types_1 = require("../types/types");
const uriParam = 'comeths';
const uri = `${service_config_1.baseUri}${uriParam}`;
/**
 * Create a new cometh with the given row and column. You should specify
 * a direction parameter which can be used to indicate the cometh pathway.
 * @param {number} row - The row position in the map.
 * @param {number} column - The column position in the map.
 * @param {Direction} direction - The cometh direction.
 * @returns {void}
 */
const postCometh = async ({ row, column }, direction) => {
    const data = {
        candidateId: service_config_1.candidateId,
        row,
        column,
        direction,
    };
    const options = (0, helpers_1.requestOptions)(uri, types_1.HTTPRequest.POST, data);
    const response = await (0, axios_1.default)(options);
    if (response.statusText === 'OK') {
        console.log('🚀 ~ file: cometh_service.ts ~ postCometh: ~ success:', {
            row,
            column,
            direction,
        });
    }
};
exports.postCometh = postCometh;
/**
 * Delete a cometh with the given row and column.
 * If you made a mistake a Polyanet will be deleted.
 * @param {number} row - The row position in the map.
 * @param {number} column - The column position in the map.
 * @returns {void}
 */
const deleteCometh = async ({ row, column }) => {
    const data = {
        candidateId: service_config_1.candidateId,
        row,
        column,
    };
    const options = (0, helpers_1.requestOptions)(uri, types_1.HTTPRequest.DELETE, data);
    const response = await (0, axios_1.default)(options);
    if (response.statusText === 'OK') {
        console.log('🚀 ~ file: cometh_service.ts ~ deleteCometh ~ success:', {
            row,
            column,
        });
    }
};
exports.deleteCometh = deleteCometh;
