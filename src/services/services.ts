import { postPolyanet, deletePolyanet } from './polyanet_service';
import { postSoloon, deleteSoloon } from './soloon_service';
import { postCometh, deleteCometh } from './cometh_service';
import { getGoalMap, postValidateMap } from './megaverse_service';

export const PolyanetService = {
    postPolyanet,
    deletePolyanet,
};

export const SoloonService = {
    postSoloon,
    deleteSoloon,
};

export const ComethService = {
    postCometh,
    deleteCometh,
};

export const MegaverseService = {
    getGoalMap,
    postValidateMap,
};
