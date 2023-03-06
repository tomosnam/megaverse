export enum HTTPRequest {
    GET = 'GET',
    POST = 'POST',
    DELETE = 'DELETE',
    PUT = 'PUT',
    PATCH = 'PATCH',
    OPTIONS = 'OPTIONS',
}

export enum Colors {
    blue = 'blue',
    red = 'red',
    purple = 'purple',
    white = 'white',
}

export enum Direction {
    up = 'up',
    down = 'down',
    right = 'right',
    left = 'left',
}

export enum AstralObjects {
    polyanet = 'polyanet',
    soloon = 'soloon',
    cometh = 'cometh',
    space = 'space',
}

export type Position = {
    row: number;
    column: number;
};
