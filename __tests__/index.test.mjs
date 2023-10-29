import { it } from 'node:test';

import assert from 'assert';

import { INTERNAL_SERVER_ERROR, NOT_FOUND, OK } from '../cjs/index.js';

it('exports 200 OK', () => {
  assert.strictEqual(OK, 200);
});

it('exports 404 Not Found', () => {
  assert.strictEqual(NOT_FOUND, 404);
});

it('exports 500 Internal Server Error', () => {
  assert.strictEqual(INTERNAL_SERVER_ERROR, 500);
});
