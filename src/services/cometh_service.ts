import axios, { AxiosError } from 'axios';

// service config
import { candidateId, baseUri } from './service_config';

// helpers
import { requestOptions } from '../helpers/helpers';

// types
import { HTTPRequest, Direction, Position } from '../types/types';

const uriParam = 'comeths';
const uri = `${baseUri}${uriParam}`;

/**
 * Create a new cometh with the given row and column. You should specify
 * a direction parameter which can be used to indicate the cometh pathway.
 * @param {number} row - The row position in the map.
 * @param {number} column - The column position in the map.
 * @param {Direction} direction - The cometh direction.
 * @returns {void}
 */
export const postCometh = async (
    { row, column }: Position,
    direction: Direction,
) => {
    const data = {
        candidateId,
        row,
        column,
        direction,
    };
    const options = requestOptions(uri, HTTPRequest.POST, data);
    const response = await axios(options);
    if (response.statusText === 'OK') {
        console.log('🚀 ~ file: cometh_service.ts ~ postCometh: ~ success:', {
            row,
            column,
            direction,
        });
    }
};

/**
 * Delete a cometh with the given row and column.
 * If you made a mistake a Polyanet will be deleted.
 * @param {number} row - The row position in the map.
 * @param {number} column - The column position in the map.
 * @returns {void}
 */
export const deleteCometh = async ({ row, column }: Position) => {
    const data = {
        candidateId,
        row,
        column,
    };
    const options = requestOptions(uri, HTTPRequest.DELETE, data);
    const response = await axios(options);
    if (response.statusText === 'OK') {
        console.log('🚀 ~ file: cometh_service.ts ~ deleteCometh ~ success:', {
            row,
            column,
        });
    }
};
