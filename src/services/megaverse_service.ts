import axios, { AxiosError } from 'axios';

// service config
import { candidateId, baseUri } from './service_config';

// helpers
import { requestOptions } from '../helpers/helpers';

// types
import { HTTPRequest } from '../types/types';

const uriParamMap = 'map';

/**
 * Get megaverse crossmint logo map.
 * @returns {void}
 */
export const getGoalMap = async () => {
    const uriParamGoal = 'goal';
    const uri = `${baseUri}${uriParamMap}/${candidateId}/${uriParamGoal}`;
    const options = requestOptions(uri, HTTPRequest.GET);
    const response = await axios(options);
    if (response.statusText === 'OK') {
        console.log(
            '🚀 ~ file: megaverse_service.ts ~ getGoalMap: ~ success:',
            true,
        );
        return response.data;
    }
};

/**
 * Validate  megaverse crossmint logo.
 * @returns {void}
 */
export const postValidateMap = async () => {
    const uriParamValidate = 'validate';
    const uri = `${baseUri}${uriParamMap}/${candidateId}/${uriParamValidate}`;
    const options = requestOptions(uri, HTTPRequest.POST);
    const response = await axios(options);
    if (response.statusText === 'OK') {
        console.log(
            '🚀 ~ file: megaverse_service.ts ~ postValidateMap: ~ success',
        );
        return response.data;
    }
};
