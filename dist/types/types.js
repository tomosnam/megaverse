"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AstralObjects = exports.Direction = exports.Colors = exports.HTTPRequest = void 0;
var HTTPRequest;
(function (HTTPRequest) {
    HTTPRequest["GET"] = "GET";
    HTTPRequest["POST"] = "POST";
    HTTPRequest["DELETE"] = "DELETE";
    HTTPRequest["PUT"] = "PUT";
    HTTPRequest["PATCH"] = "PATCH";
    HTTPRequest["OPTIONS"] = "OPTIONS";
})(HTTPRequest = exports.HTTPRequest || (exports.HTTPRequest = {}));
var Colors;
(function (Colors) {
    Colors["blue"] = "blue";
    Colors["red"] = "red";
    Colors["purple"] = "purple";
    Colors["white"] = "white";
})(Colors = exports.Colors || (exports.Colors = {}));
var Direction;
(function (Direction) {
    Direction["up"] = "up";
    Direction["down"] = "down";
    Direction["right"] = "right";
    Direction["left"] = "left";
})(Direction = exports.Direction || (exports.Direction = {}));
var AstralObjects;
(function (AstralObjects) {
    AstralObjects["polyanet"] = "polyanet";
    AstralObjects["soloon"] = "soloon";
    AstralObjects["cometh"] = "cometh";
    AstralObjects["space"] = "space";
})(AstralObjects = exports.AstralObjects || (exports.AstralObjects = {}));
