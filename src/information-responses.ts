/**
 * 100 Continue
 *
 * This interim response indicates that the client should continue the request or ignore the response if the request is already finished.
 *
 * ```ts
 * import { CONTINUE } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/100}
 */
export const CONTINUE = 100;

/**
 * 101 Switching Protocols
 *
 * This code is sent in response to an `Upgrade` request header from the client and indicates the protocol the server is switching to.
 *
 * ```ts
 * import { SWITCHING_PROTOCOLS } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/101}
 */
export const SWITCHING_PROTOCOLS = 101;

/**
 * 102 Processing
 *
 * This code indicates that the server has received and is processing the request, but no response is available yet.
 *
 * ```ts
 * import { PROCESSING } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/102}
 */
export const PROCESSING = 102;

/**
 * 103 Early Hints
 *
 * This status code is primarily intended to be used with the `Link` header, letting the user agent start preloading resources while the server prepares a response.
 *
 * ```ts
 * import { EARLY_HINTS } from 'costatus';
 * ```
 *
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Status/103}
 */
export const EARLY_HINTS = 103;
