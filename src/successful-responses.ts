/**
 * 200 OK
 *
 * The request succeeded. The result meaning of "success" depends on the HTTP method:
 *
 * - `GET`: The resource has been fetched and transmitted in the message body.
 * - `HEAD`: The representation headers are included in the response without any message body.
 * - `PUT` or `POST`: The resource describing the result of the action is transmitted in the message body.
 * - `TRACE`: The message body contains the request message as received by the server.
 *
 * ```ts
 * import { OK } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/200}
 */
export const OK = 200;

/**
 * 201 Created
 *
 * The request succeeded, and a new resource was created as a result. This is typically the response sent after `POST` requests, or some `PUT` requests.
 *
 * ```ts
 * import { CREATED } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/201}
 */
export const CREATED = 201;

/**
 * 202 Accepted
 *
 * The request has been received but not yet acted upon. It is noncommittal, since there is no way in HTTP to later send an asynchronous response indicating the outcome of the request. It is intended for cases where another process or server handles the request, or for batch processing.
 *
 * ```ts
 * import { ACCEPTED } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/202}
 */
export const ACCEPTED = 202;

/**
 * 203 Non-Authoritative Information
 *
 * This response code means the returned metadata is not exactly the same as is available from the origin server, but is collected from a local or a third-party copy. This is mostly used for mirrors or backups of another resource. Except for that specific case, the 200 OK response is preferred to this status.
 *
 * ```ts
 * import { NON_AUTHORITATIVE_INFORMATION } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/203}
 */
export const NON_AUTHORITATIVE_INFORMATION = 203;

/**
 * 204 No Content
 *
 * There is no content to send for this request, but the headers may be useful. The user agent may update its cached headers for this resource with the new ones.
 *
 * ```ts
 * import { NO_CONTENT } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/204}
 */
export const NO_CONTENT = 204;

/**
 * 205 Reset Content
 *
 * Tells the user agent to reset the document which sent this request.
 *
 * ```ts
 * import { RESET_CONTENT } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/205}
 */
export const RESET_CONTENT = 205;

/**
 * 206 Partial Content
 *
 * This response code is used when the `Range` header is sent from the client to request only part of a resource.
 *
 * ```ts
 * import { PARTIAL_CONTENT } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/206}
 */
export const PARTIAL_CONTENT = 206;

/**
 * 207 Multi-Status
 *
 * Conveys information about multiple resources, for situations where multiple status codes might be appropriate.
 *
 * ```ts
 * import { MULTI_STATUS } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/207}
 */
export const MULTI_STATUS = 207;

/**
 * 208 Already Reported
 *
 * Used inside a `<dav:propstat>` response element to avoid repeatedly enumerating the internal members of multiple bindings to the same collection.
 *
 * ```ts
 * import { ALREADY_REPORTED } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/208}
 */
export const ALREADY_REPORTED = 208;

/**
 * 226 IM Used
 *
 * The server has fulfilled a `GET` request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.
 *
 * ```ts
 * import { IM_USED } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/226}
 */
export const IM_USED = 226;
