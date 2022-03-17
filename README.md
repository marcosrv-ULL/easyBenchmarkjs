[![npm version](https://badge.fury.io/js/%40marcosrv-ull%2Feasybenchmark.js.svg)](https://badge.fury.io/js/%40marcosrv-ull%2Feasybenchmark.js)

## easybenchmark.js

A really light tool to benchmark functions in js

## Installation

For the package installation you only have to:

```
npm i @marcosrv-ull/easybenchmark.js
```

## Usage from code:

```javascript
const { fastBench } = require('@marcosrv-ULL/easybenchmark.js');
```

[The documentation of the function](https://marcosrv-ull.github.io/easyBenchmarkjs/).

## Examples

This is the main idea of the function:
```javascript
const { fastBench } = require('@marcosrv-ULL/easybenchmark.js');

const myFunction = (whatEverAreTheParams) => {
    // Do things
}

const TIMES_TO_BE_EXECUTED = 10;
let argumentA;
let argumentB;
.
.
.
let argumentN;
console.log(`Mean time elapsed with ${TIMES_TO_BE_EXECUTED} executions: ${fastBench(myFunction, [argumentA, argumentB, ..., argumentN], TIMES_TO_BE_EXECUTED)} ms`);
```

Output:
```
Mean time elapsed with 10 executions: <result_in_ms> ms
```
## Author

marcosrv-ull

## Tests

ejecute:
```
npm run versions
mocha
```
