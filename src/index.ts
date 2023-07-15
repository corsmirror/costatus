/**
 * HTTP response status codes
 *
 * 1. Informational responses (`100` - `199`)
 * 2. Successful responses (`200` – `299`)
 * 3. Redirection messages (`300` – `399`)
 * 4. Client error responses (`400` – `499`)
 * 5. Server error responses (`500` – `599`)
 *
 * @see {@link https://developer.mozilla.org/docs/Web/HTTP/Status}
 */

export * from './client-error-responses';
export * from './information-responses';
export * from './redirection-messages';
export * from './server-error-responses';
export * from './successful-responses';
