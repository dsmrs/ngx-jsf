import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { resolve } from 'json-schema-faker';

const httpStatus = {
    CONTINUE: 100,
    SWITCHING_PROTOCOLS: 101,
    CONNECTION_TIMED_OUT: 110,
    CONNECTION_REFUSED: 111,
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NON_AUTHORITATIVE_INFORMATION: 203,
    NO_CONTENT: 204,
    RESET_CONTENT: 205,
    PARTIAL_CONTENT: 206,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    PAYMENT_REQUIRED: 402,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    REQUEST_TIMEOUT: 408,
    INTERNAL_SERVER_ERROR: 500
}

@Injectable()
export class HttpMock extends Http {
}
