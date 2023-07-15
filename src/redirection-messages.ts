/**
 * 300 Multiple Choices
 *
 * The request has more than one possible response. The user agent or user should choose one of them. (There is no standardized way of choosing one of the responses, but HTML links to the possibilities are recommended so the user can pick.)
 *
 * ```ts
 * import { MULTIPLE_CHOICES } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/300}
 */
export const MULTIPLE_CHOICES = 300;

/**
 * 301 Moved Permanently
 *
 * The URL of the requested resource has been changed permanently. The new URL is given in the response.
 *
 * ```ts
 * import { MOVED_PERMANENTLY } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/301}
 */
export const MOVED_PERMANENTLY = 301;

/**
 * 302 Found
 *
 * This response code means that the URI of requested resource has been changed _temporarily_. Further changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests.
 *
 * ```ts
 * import { FOUND } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/302}
 */
export const FOUND = 302;

/**
 * 303 See Other
 *
 * The server sent this response to direct the client to get the requested resource at another URI with a GET request.
 *
 * ```ts
 * import { SEE_OTHER } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/303}
 */
export const SEE_OTHER = 303;

/**
 * 304 Not Modified
 *
 * This is used for caching purposes. It tells the client that the response has not been modified, so the client can continue to use the same cached version of the response.
 *
 * ```ts
 * import { NOT_MODIFIED } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/304}
 */
export const NOT_MODIFIED = 304;

/**
 * 305 Use Proxy
 *
 * @deprecated
 *
 * Defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy. It has been deprecated due to security concerns regarding in-band configuration of a proxy.
 *
 * ```ts
 * import { USE_PROXY } from 'costatus';
 * ```
 */
export const USE_PROXY = 305;

/**
 * 306 unused
 *
 * @deprecated
 *
 * This response code is no longer used; it is just reserved. It was used in a previous version of the HTTP/1.1 specification.
 *
 * ```ts
 * import { UNUSED } from 'costatus';
 * ```
 */
export const UNUSED = 306;

/**
 * 307 Temporary Redirect
 *
 * The server sends this response to direct the client to get the requested resource at another URI with the same method that was used in the prior request. This has the same semantics as the `302 Found` HTTP response code, with the exception that the user agent _must not_ change the HTTP method used: if a `POST` was used in the first request, a `POST` must be used in the second request.
 *
 * ```ts
 * import { TEMPORARY_REDIRECT } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/307}
 */
export const TEMPORARY_REDIRECT = 307;

/**
 * 308 Permanent Redirect
 *
 * This means that the resource is now permanently located at another URI, specified by the `Location:` HTTP Response header. This has the same semantics as the `301 Moved Permanently` HTTP response code, with the exception that the user agent _must not_ change the HTTP method used: if a `POST` was used in the first request, a `POST` must be used in the second request.
 *
 * ```ts
 * import { PERMANENT_REDIRECT } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/308}
 */
export const PERMANENT_REDIRECT = 308;
