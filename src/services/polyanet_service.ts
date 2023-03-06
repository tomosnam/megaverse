import axios, { AxiosError } from 'axios';

// service config
import { candidateId, baseUri } from './service_config';

// helpers
import { requestOptions } from '../helpers/helpers';

// types
import { HTTPRequest, Position } from '../types/types';

const uriParam = 'polyanets';
const uri = `${baseUri}${uriParam}`;
console.log(uri);

/**
 * Create a new polyanet with the given row and column.
 * @param {number} row - The row position in the map.
 * @param {number} column - The column position in the map.
 * @returns {void}
 */
export const postPolyanet = async ({ row, column }: Position) => {
    const data = {
        candidateId,
        row,
        column,
    };
    const options = requestOptions(uri, HTTPRequest.POST, data);
    const response = await axios(options);
    if (response.statusText === 'OK') {
        console.log(
            '🚀 ~ file: polyanet_service.ts ~ postPolyanet: ~ success:',
            { row, column },
        );
    }
};

/**
 * Delete a polyanet with the given row and column.
 * @param {number} row - The row position in the map.
 * @param {number} column - The column position in the map.
 * @returns {void}
 */
export const deletePolyanet = async ({ row, column }: Position) => {
    const data = {
        candidateId,
        row,
        column,
    };
    const options = requestOptions(uri, HTTPRequest.DELETE, data);
    const response = await axios(options);
    if (response.statusText === 'OK') {
        console.log(
            '🚀 ~ file: polyanet_service.ts ~ deletePolyanet ~ success:',
            { row, column },
        );
    }
};
