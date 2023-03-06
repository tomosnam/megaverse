import { AxiosError } from 'axios';

// services
import {
    MegaverseService,
    PolyanetService,
    SoloonService,
    ComethService,
} from '../services/services';

// types
import { AstralObjects, Colors, Direction, Position } from '../types/types';

interface CrossmintLogoInterface {
    [key: string]: (position: Position, property?: string) => Promise<void>;
}

const createAstral: CrossmintLogoInterface = {
    polyanet: async ({ row, column }) => {
        await PolyanetService.postPolyanet({ row, column });
    },
    soloon: async ({ row, column }, property) => {
        const color = property as keyof typeof Colors;
        await SoloonService.postSoloon({ row, column }, Colors[color]);
    },

    cometh: async ({ row, column }, property) => {
        const direction = property as keyof typeof Direction;
        await ComethService.postCometh({ row, column }, Direction[direction]);
    },
};

function delayFiveSecond() {
    return new Promise((ok) => setTimeout(ok, 5000));
}

export const createCrossmintLogo = async () => {
    try {
        const { goal } = await MegaverseService.getGoalMap();

        for (let row = 0; row < goal.length; row++) {
            for (let column = 0; column < goal[row].length; column++) {
                const astral: string = goal[row][column].toLowerCase();
                const [property, name] = astral.split('_');
                console.log(
                    '🚀 ~ file: crossmint_logo.ts ~ createCrossmintLogo ~ success:',
                    {
                        astral,
                        row,
                        column,
                    },
                );
                if (astral === AstralObjects.space) continue;
                if (astral === AstralObjects.polyanet) {
                    await createAstral[astral]({ row, column });
                } else {
                    await createAstral[name]({ row, column }, property);
                }
            }
            // avoid error 429 to many requests
            await delayFiveSecond();
        }

        console.log(
            '🚀 ~ file: crossmint_logo.ts: ~ createCrossmintLogo ~ success:',
        );
    } catch (err) {
        const error = err as AxiosError;
        console.log('file: crossmint_logo.ts: ~ createCrossmintLogo ~ error ', {
            status: error?.response?.status,
            statusText: error?.response?.statusText,
        });
    }
};

export const createCrossmintLogo_2 = async () => {
    try {
        const { goal } = await MegaverseService.getGoalMap();

        for (let row = 0; row < goal.length; row++) {
            const map = [];
            for (let column = 0; column < goal[row].length; column++) {
                const astral: string = goal[row][column].toLowerCase();
                const [property, name] = astral.split('_');
                if (astral === AstralObjects.space) continue;
                if (astral === AstralObjects.polyanet) {
                    map.push(
                        async () => await createAstral[astral]({ row, column }),
                    );
                } else {
                    map.push(
                        async () =>
                            await createAstral[name]({ row, column }, property),
                    );
                }
            }

            // avoid error 429 to many requests
            await Promise.all(map);
            await delayFiveSecond();
        }
    } catch (err) {
        const error = err as AxiosError;
        console.log(
            'file: crossmint_logo.ts: ~ createCrossmintLogo_2 ~ error ',
            {
                status: error?.response?.status,
                statusText: error?.response?.statusText,
            },
        );
    }
};
