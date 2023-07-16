# costatus

[![NPM](https://nodei.co/npm/costatus.png)](https://nodei.co/npm/costatus/)

[![NPM version](https://img.shields.io/npm/v/costatus.svg)](https://www.npmjs.com/package/costatus)
[![build](https://github.com/corsmirror/costatus/actions/workflows/build.yml/badge.svg)](https://github.com/corsmirror/costatus/actions/workflows/build.yml)
[![codecov](https://codecov.io/gh/corsmirror/costatus/branch/master/graph/badge.svg?token=OX7UM4QNPB)](https://codecov.io/gh/corsmirror/costatus)

[HTTP response status codes.](https://developer.mozilla.org/docs/Web/HTTP/Status) See [docs](https://corsmirror.github.io/costatus/).

## Quick Start

```ts
import { OK } from 'costatus';

console.log(OK); // 200
```

## Installation

[NPM](https://www.npmjs.com/package/costatus):

```sh
npm install costatus
```

[Yarn](https://yarnpkg.com/package/costatus):

```sh
yarn add costatus
```

## Usage

### ES Modules

Namespace import:

```ts
import * as costatus from 'costatus';
```

Named import:

```ts
import { OK } from 'costatus';
```

### CommonJS

Namespace require:

```ts
const costatus = require('costatus');
```

Named require:

```ts
const { OK } = require('costatus');
```

## Release

Release is automated with [Release Please](https://github.com/googleapis/release-please).

## License

[MIT](https://github.com/corsmirror/costatus/blob/master/LICENSE)
