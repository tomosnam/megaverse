"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postValidateMap = exports.getGoalMap = void 0;
const axios_1 = __importDefault(require("axios"));
// service config
const service_config_1 = require("./service_config");
// helpers
const helpers_1 = require("../helpers/helpers");
// types
const types_1 = require("../types/types");
const uriParamMap = 'map';
/**
 * Get megaverse crossmint logo map.
 * @returns {void}
 */
const getGoalMap = async () => {
    const uriParamGoal = 'goal';
    const uri = `${service_config_1.baseUri}${uriParamMap}/${service_config_1.candidateId}/${uriParamGoal}`;
    const options = (0, helpers_1.requestOptions)(uri, types_1.HTTPRequest.GET);
    const response = await (0, axios_1.default)(options);
    if (response.statusText === 'OK') {
        console.log('🚀 ~ file: megaverse_service.ts ~ getGoalMap: ~ success:', true);
        return response.data;
    }
};
exports.getGoalMap = getGoalMap;
/**
 * Validate  megaverse crossmint logo.
 * @returns {void}
 */
const postValidateMap = async () => {
    const uriParamValidate = 'validate';
    const uri = `${service_config_1.baseUri}${uriParamMap}/${service_config_1.candidateId}/${uriParamValidate}`;
    const options = (0, helpers_1.requestOptions)(uri, types_1.HTTPRequest.POST);
    const response = await (0, axios_1.default)(options);
    if (response.statusText === 'OK') {
        console.log('🚀 ~ file: megaverse_service.ts ~ postValidateMap: ~ success');
        return response.data;
    }
};
exports.postValidateMap = postValidateMap;
