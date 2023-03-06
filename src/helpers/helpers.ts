import { HTTPRequest } from '../types/types.js';

export const requestOptions = (
    uri: string,
    method: HTTPRequest = HTTPRequest.GET,
    data = {},
) => {
    const options = {
        method,
        headers: { 'content-type': 'application/json' },
        data: JSON.stringify(data),
        url: uri,
    };

    return options;
};
