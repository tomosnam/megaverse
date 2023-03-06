"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MegaverseService = exports.ComethService = exports.SoloonService = exports.PolyanetService = void 0;
const polyanet_service_1 = require("./polyanet_service");
const soloon_service_1 = require("./soloon_service");
const cometh_service_1 = require("./cometh_service");
const megaverse_service_1 = require("./megaverse_service");
exports.PolyanetService = {
    postPolyanet: polyanet_service_1.postPolyanet,
    deletePolyanet: polyanet_service_1.deletePolyanet,
};
exports.SoloonService = {
    postSoloon: soloon_service_1.postSoloon,
    deleteSoloon: soloon_service_1.deleteSoloon,
};
exports.ComethService = {
    postCometh: cometh_service_1.postCometh,
    deleteCometh: cometh_service_1.deleteCometh,
};
exports.MegaverseService = {
    getGoalMap: megaverse_service_1.getGoalMap,
    postValidateMap: megaverse_service_1.postValidateMap,
};
