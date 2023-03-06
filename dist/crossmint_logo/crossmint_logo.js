"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCrossmintLogo_2 = exports.createCrossmintLogo = void 0;
// services
const services_1 = require("../services/services");
// types
const types_1 = require("../types/types");
const createAstral = {
    polyanet: async ({ row, column }) => {
        await services_1.PolyanetService.postPolyanet({ row, column });
    },
    soloon: async ({ row, column }, property) => {
        const color = property;
        await services_1.SoloonService.postSoloon({ row, column }, types_1.Colors[color]);
    },
    cometh: async ({ row, column }, property) => {
        const direction = property;
        await services_1.ComethService.postCometh({ row, column }, types_1.Direction[direction]);
    },
};
function delayFiveSecond() {
    return new Promise((ok) => setTimeout(ok, 5000));
}
const createCrossmintLogo = async () => {
    try {
        const { goal } = await services_1.MegaverseService.getGoalMap();
        for (let row = 0; row < goal.length; row++) {
            for (let column = 0; column < goal[row].length; column++) {
                const astral = goal[row][column].toLowerCase();
                const [property, name] = astral.split('_');
                console.log('🚀 ~ file: crossmint_logo.ts ~ createCrossmintLogo ~ success:', {
                    astral,
                    row,
                    column,
                });
                if (astral === types_1.AstralObjects.space)
                    continue;
                if (astral === types_1.AstralObjects.polyanet) {
                    await createAstral[astral]({ row, column });
                }
                else {
                    await createAstral[name]({ row, column }, property);
                }
            }
            // avoid error 429 to many requests
            await delayFiveSecond();
        }
        console.log('🚀 ~ file: crossmint_logo.ts: ~ createCrossmintLogo ~ success:');
    }
    catch (err) {
        const error = err;
        console.log('file: crossmint_logo.ts: ~ createCrossmintLogo ~ error ', {
            status: error?.response?.status,
            statusText: error?.response?.statusText,
        });
    }
};
exports.createCrossmintLogo = createCrossmintLogo;
const createCrossmintLogo_2 = async () => {
    try {
        const { goal } = await services_1.MegaverseService.getGoalMap();
        for (let row = 0; row < goal.length; row++) {
            const map = [];
            for (let column = 0; column < goal[row].length; column++) {
                const astral = goal[row][column].toLowerCase();
                const [property, name] = astral.split('_');
                if (astral === types_1.AstralObjects.space)
                    continue;
                if (astral === types_1.AstralObjects.polyanet) {
                    map.push(async () => await createAstral[astral]({ row, column }));
                }
                else {
                    map.push(async () => await createAstral[name]({ row, column }, property));
                }
            }
            // avoid error 429 to many requests
            await Promise.all(map);
            await delayFiveSecond();
        }
    }
    catch (err) {
        const error = err;
        console.log('file: crossmint_logo.ts: ~ createCrossmintLogo_2 ~ error ', {
            status: error?.response?.status,
            statusText: error?.response?.statusText,
        });
    }
};
exports.createCrossmintLogo_2 = createCrossmintLogo_2;
