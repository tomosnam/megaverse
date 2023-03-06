import axios, { AxiosError } from 'axios';

// service config
import { candidateId, baseUri } from './service_config';

// helpers
import { requestOptions } from '../helpers/helpers';

// types
import { HTTPRequest, Colors, Position } from '../types/types';

const uriParam = 'soloons';
const uri = `${baseUri}${uriParam}`;

/**
 * Create a new soloon with the given row and column. You should specify
 * a color parameter which can be used to customize the appearance of the soloon.
 * @param {number} row - The row position in the map.
 * @param {number} column - The column position in the map.
 * @param {Colors} color - The soloon color .
 * @returns {void}
 */
export const postSoloon = async ({ row, column }: Position, color: Colors) => {
    const data = {
        candidateId,
        row,
        column,
        color,
    };
    const options = requestOptions(uri, HTTPRequest.POST, data);
    const response = await axios(options);

    if (response.statusText === 'OK') {
        console.log('🚀 ~ file: soloon_service.ts ~ postSoloon: ~ success:', {
            row,
            column,
            color,
        });
    }
};

/**
 * Delete a soloon with the given row and column.
 * If you made a mistake a Polyanet will be deleted.
 * @param {number} row - The row position in the map.
 * @param {number} column - The column position in the map.
 * @returns {void}
 */
export const deleteSoloon = async ({ row, column }: Position) => {
    const data = {
        candidateId,
        row,
        column,
    };
    const options = requestOptions(uri, HTTPRequest.DELETE, data);
    const response = await axios(options);
    if (response.statusText === 'OK') {
        console.log('🚀 ~ file: soloon_service.ts ~ deleteSoloon ~ success:', {
            row,
            column,
        });
    }
};
