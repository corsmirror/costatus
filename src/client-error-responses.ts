/**
 * 400 Bad Request
 *
 * The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).
 *
 * ```ts
 * import { BAD_REQUEST } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/400}
 */
export const BAD_REQUEST = 400;

/**
 * 401 Unauthorized
 *
 * Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.
 *
 * ```ts
 * import { UNAUTHORIZED } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/401}
 */
export const UNAUTHORIZED = 401;

/**
 * 402 Payment Required
 *
 * This response code is reserved for future use. The initial aim for creating this code was using it for digital payment systems, however this status code is used very rarely and no standard convention exists.
 *
 * ```ts
 * import { PAYMENT_REQUIRED } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/402}
 */
export const PAYMENT_REQUIRED = 402;

/**
 * 403 Forbidden
 *
 * The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike `401 Unauthorized`, the client's identity is known to the server.
 *
 * ```ts
 * import { FORBIDDEN } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/403}
 */
export const FORBIDDEN = 403;

/**
 * 404 Not Found
 *
 * The server cannot find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of `403 Forbidden` to hide the existence of a resource from an unauthorized client. This response code is probably the most well known due to its frequent occurrence on the web.
 *
 * ```ts
 * import { NOT_FOUND } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/404}
 */
export const NOT_FOUND = 404;

/**
 * 405 Method Not Allowed
 *
 * The request method is known by the server but is not supported by the target resource. For example, an API may not allow calling `DELETE` to remove a resource.
 *
 * ```ts
 * import { METHOD_NOT_ALLOWED } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/405}
 */
export const METHOD_NOT_ALLOWED = 405;

/**
 * 406 Not Acceptable
 *
 * This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content that conforms to the criteria given by the user agent.
 *
 * ```ts
 * import { NOT_ACCEPTABLE } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/406}
 */
export const NOT_ACCEPTABLE = 406;

/**
 * 407 Proxy Authentication Required
 *
 * This is similar to `401 Unauthorized` but authentication is needed to be done by a proxy.
 *
 * ```ts
 * import { PROXY_AUTHENTICATION_REQUIRED } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/407}
 */
export const PROXY_AUTHENTICATION_REQUIRED = 407;

/**
 * 408 Request Timeout
 *
 * This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection. This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP pre-connection mechanisms to speed up surfing. Also note that some servers merely shut down the connection without sending this message.
 *
 * ```ts
 * import { REQUEST_TIMEOUT } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/408}
 */
export const REQUEST_TIMEOUT = 408;

/**
 * 409 Conflict
 *
 * This response is sent when a request conflicts with the current state of the server.
 *
 * ```ts
 * import { CONFLICT } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/409}
 */
export const CONFLICT = 409;

/**
 * 410 Gone
 *
 * This response is sent when the requested content has been permanently deleted from server, with no forwarding address. Clients are expected to remove their caches and links to the resource. The HTTP specification intends this status code to be used for "limited-time, promotional services". APIs should not feel compelled to indicate resources that have been deleted with this status code.
 *
 * ```ts
 * import { GONE } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/410}
 */
export const GONE = 410;

/**
 * 411 Length Required
 *
 * Server rejected the request because the `Content-Length` header field is not defined and the server requires it.
 *
 * ```ts
 * import { LENGTH_REQUIRED } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/411}
 */
export const LENGTH_REQUIRED = 411;

/**
 * 412 Precondition Failed
 *
 * The client has indicated preconditions in its headers which the server does not meet.
 *
 * ```ts
 * import { PRECONDITION_FAILED } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/412}
 */
export const PRECONDITION_FAILED = 412;

/**
 * 413 Payload Too Large
 *
 * Request entity is larger than limits defined by server. The server might close the connection or return an `Retry-After` header field.
 *
 * ```ts
 * import { PAYLOAD_TOO_LARGE } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/413}
 */
export const PAYLOAD_TOO_LARGE = 413;

/**
 * 414 URI Too Long
 *
 * The URI requested by the client is longer than the server is willing to interpret.
 *
 * ```ts
 * import { URI_TOO_LONG } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/414}
 */
export const URI_TOO_LONG = 414;

/**
 * 415 Unsupported Media Type
 *
 * The media format of the requested data is not supported by the server, so the server is rejecting the request.
 *
 * ```ts
 * import { UNSUPPORTED_MEDIA_TYPE } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/415}
 */
export const UNSUPPORTED_MEDIA_TYPE = 415;

/**
 * 416 Range Not Satisfiable
 *
 * The range specified by the `Range` header field in the request cannot be fulfilled. It's possible that the range is outside the size of the target URI's data.
 *
 * ```ts
 * import { RANGE_NOT_SATISFIABLE } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/416}
 */
export const RANGE_NOT_SATISFIABLE = 416;

/**
 * 417 Expectation Failed
 *
 * This response code means the expectation indicated by the `Expect` request header field cannot be met by the server.
 *
 * ```ts
 * import { EXPECTATION_FAILED } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/417}
 */
export const EXPECTATION_FAILED = 417;

/**
 * 418 I'm a teapot
 *
 * The server refuses the attempt to brew coffee with a teapot.
 *
 * ```ts
 * import { IM_A_TEAPOT } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/418}
 */
export const IM_A_TEAPOT = 418;

/**
 * 421 Misdirected Request
 *
 * The request was directed at a server that is not able to produce a response. This can be sent by a server that is not configured to produce responses for the combination of scheme and authority that are included in the request URI.
 *
 * ```ts
 * import { MISDIRECTED_REQUEST } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/421}
 */
export const MISDIRECTED_REQUEST = 421;

/**
 * 422 Unprocessable Content
 *
 * The request was well-formed but was unable to be followed due to semantic errors.
 *
 * ```ts
 * import { UNPROCESSABLE_CONTENT } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/422}
 */
export const UNPROCESSABLE_CONTENT = 422;

/**
 * 423 Locked
 *
 * The resource that is being accessed is locked.
 *
 * ```ts
 * import { LOCKED } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/423}
 */
export const LOCKED = 423;

/**
 * 424 Failed Dependency
 *
 * The request failed due to failure of a previous request.
 *
 * ```ts
 * import { FAILED_DEPENDENCY } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/424}
 */
export const FAILED_DEPENDENCY = 424;

/**
 * 425 Too Early
 *
 * Indicates that the server is unwilling to risk processing a request that might be replayed.
 *
 * ```ts
 * import { TOO_EARLY } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/425}
 */
export const TOO_EARLY = 425;

/**
 * 426 Upgrade Required
 *
 * The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol. The server sends an `Upgrade` header in a 426 response to indicate the required protocol(s).
 *
 * ```ts
 * import { UPGRADE_REQUIRED } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/426}
 */
export const UPGRADE_REQUIRED = 426;

/**
 * 428 Precondition Required
 *
 * The origin server requires the request to be conditional. This response is intended to prevent the 'lost update' problem, where a client `GET`s a resource's state, modifies it and `PUT`s it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.
 *
 * ```ts
 * import { PRECONDITION_REQUIRED } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/428}
 */
export const PRECONDITION_REQUIRED = 428;

/**
 * 429 Too Many Requests
 *
 * The user has sent too many requests in a given amount of time ("rate limiting").
 *
 * ```ts
 * import { TOO_MANY_REQUESTS } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/429}
 */
export const TOO_MANY_REQUESTS = 429;

/**
 * 431 Request Header Fields Too Large
 *
 * The server is unwilling to process the request because its header fields are too large. The request may be resubmitted after reducing the size of the request header fields.
 *
 * ```ts
 * import { REQUEST_HEADER_FIELDS_TOO_LARGE } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/431}
 */
export const REQUEST_HEADER_FIELDS_TOO_LARGE = 431;

/**
 * 451 Unavailable For Legal Reasons
 *
 * The user agent requested a resource that cannot legally be provided, such as a web page censored by a government.
 *
 * ```ts
 * import { UNAVAILABLE_FOR_LEGAL_REASONS } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/451}
 */
export const UNAVAILABLE_FOR_LEGAL_REASONS = 451;
