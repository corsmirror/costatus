import { describe, it } from 'node:test';

import assert from 'assert';

import { name } from '../esm/index.js';

describe('index', () => {
  it('exports name', () => {
    assert.strictEqual(name, 'costatus');
  });
});
