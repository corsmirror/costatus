/**
 * 500 Internal Server Error
 *
 * The server has encountered a situation it does not know how to handle.
 *
 * ```ts
 * import { INTERNAL_SERVER_ERROR } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/500}
 */
export const INTERNAL_SERVER_ERROR = 500;

/**
 * 501 Not Implemented
 *
 * The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are `GET` and `HEAD`.
 *
 * ```ts
 * import { NOT_IMPLEMENTED } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/501}
 */
export const NOT_IMPLEMENTED = 501;

/**
 * 502 Bad Gateway
 *
 * This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.
 *
 * ```ts
 * import { BAD_GATEWAY } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/502}
 */
export const BAD_GATEWAY = 502;

/**
 * 503 Service Unavailable
 *
 * The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This response should be used for temporary conditions and the `Retry-After` HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.
 *
 * ```ts
 * import { SERVICE_UNAVAILABLE } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/503}
 */
export const SERVICE_UNAVAILABLE = 503;

/**
 * 504 Gateway Timeout
 *
 * This error response is given when the server is acting as a gateway and cannot get a response in time.
 *
 * ```ts
 * import { GATEWAY_TIMEOUT } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/504}
 */
export const GATEWAY_TIMEOUT = 504;

/**
 * 505 HTTP Version Not Supported
 *
 * The HTTP version used in the request is not supported by the server.
 *
 * ```ts
 * import { HTTP_VERSION_NOT_SUPPORTED } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/505}
 */
export const HTTP_VERSION_NOT_SUPPORTED = 505;

/**
 * 506 Variant Also Negotiates
 *
 * The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.
 *
 * ```ts
 * import { VARIANT_ALSO_NEGOTIATES } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/506}
 */
export const VARIANT_ALSO_NEGOTIATES = 506;

/**
 * 507 Insufficient Storage
 *
 * The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.
 *
 * ```ts
 * import { INSUFFICIENT_STORAGE } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/507}
 */
export const INSUFFICIENT_STORAGE = 507;

/**
 * 508 Loop Detected
 *
 * The server detected an infinite loop while processing the request.
 *
 * ```ts
 * import { LOOP_DETECTED } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/508}
 */
export const LOOP_DETECTED = 508;

/**
 * 510 Not Extended
 *
 * Further extensions to the request are required for the server to fulfill it.
 *
 * ```ts
 * import { NOT_EXTENDED } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/510}
 */
export const NOT_EXTENDED = 510;

/**
 * 511 Network Authentication Required
 *
 * Indicates that the client needs to authenticate to gain network access.
 *
 * ```ts
 * import { NETWORK_AUTHENTICATION_REQUIRED } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/511}
 */
export const NETWORK_AUTHENTICATION_REQUIRED = 511;
