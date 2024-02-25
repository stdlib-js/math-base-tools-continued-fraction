<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# continued-fraction

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Continued fraction][continued-fraction] approximation.



<section class="usage">

## Usage

To use in Observable,

```javascript
continuedFraction = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools-continued-fraction@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var continuedFraction = require( 'path/to/vendor/umd/math-base-tools-continued-fraction/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools-continued-fraction@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.continuedFraction;
})();
</script>
```

#### continuedFraction( generator\[, options ] )

Evaluates the continued fraction described by the supplied `generator` argument. `generator` can be either a function which returns an array with two elements, the `a` and `b` terms of the fraction, or an ES6 [Generator object][es6-generator]. By default, the function computes

<!-- <equation class="equation" label="eq:continued_fraction_a" align="center" raw="\frac{a_1}{b_1+\frac{a_2}{b_2+\frac{a_3}{b_3+\frac{a_4}{b_4}+\ldots}}}" alt="Continued fraction without leading b_0 term"> -->

```math
\frac{a_1}{b_1+\frac{a_2}{b_2+\frac{a_3}{b_3+\frac{a_4}{b_4}+\ldots}}}
```

<!-- <div class="equation" align="center" data-raw-text="\frac{a_1}{b_1+\frac{a_2}{b_2+\frac{a_3}{b_3+\frac{a_4}{b_4}+\ldots}}}" data-equation="eq:continued_fraction_a">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/tools/continued-fraction/docs/img/equation_continued_fraction_a.svg" alt="Continued fraction without leading b_0 term">
    <br>
</div> -->

<!-- </equation> -->

Using an ES6 [Generator object][es6-generator]:

<!-- eslint-disable no-restricted-syntax, node/no-unsupported-features/es-syntax -->

```javascript
// Continued fraction for (e-1)^(-1):
var gen = generator();
var out = continuedFraction( gen );
// returns ~0.582

function* generator() {
    var i = 0;
    while ( true ) {
        i += 1;
        yield [ i, i ];
    }
}
```

Alternatively, one can use a closure to achieve the same goal:

```javascript
// Continued fraction for (e-1)^(-1):
var gen = generator();
var out = continuedFraction( gen );
// returns ~0.582

function generator() {
    var i = 0;
    return gen;

    function gen() {
        i += 1;
        return [ i, i ];
    }
}
```

The function accepts the following `options`:

-   **maxIter**: `integer` denoting the maximum number of times the supplied generator object will be called. Default: `1000000`.
-   **tolerance**: `number` primitive specifying the used tolerance to assess convergence. Default: `2.22e-16`.
-   **keep**: `boolean` primitive indicating whether to keep the `b0` term in the continued fraction. Default: `false`.

To evaluate

<!-- <equation class="equation" label="eq:continued_fraction_b" align="center" raw="b_0 + \frac{a_1}{b_1+\frac{a_2}{b_2+\frac{a_3}{b_3+\frac{a_4}{b_4}+\ldots}}}" alt="Continued fraction with leading b_0 term"> -->

```math
b_0 + \frac{a_1}{b_1+\frac{a_2}{b_2+\frac{a_3}{b_3+\frac{a_4}{b_4}+\ldots}}}
```

<!-- <div class="equation" align="center" data-raw-text="b_0 + \frac{a_1}{b_1+\frac{a_2}{b_2+\frac{a_3}{b_3+\frac{a_4}{b_4}+\ldots}}}" data-equation="eq:continued_fraction_b">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/tools/continued-fraction/docs/img/equation_continued_fraction_b.svg" alt="Continued fraction with leading b_0 term">
    <br>
</div> -->

<!-- </equation> -->

set the `keep` option to `true`.

```javascript
var out = continuedFraction( generator(), {
    'keep': true
});
// returns ~1.718

function generator() {
    var i = 0;
    return gen;

    function gen() {
        i += 1;
        return [ i, i ];
    }
}
```

To change the maximum number of iterations, set the `maxIter` option.

```javascript
var out = continuedFraction( generator(), {
    'maxIter': 10
});
// returns ~0.582

function generator() {
    var i = 0;
    return gen;

    function gen() {
        i += 1;
        return [ i, i ];
    }
}
```

The default tolerance of `2.22e-16` to assess convergence can be changed via the `tolerance` option.

```javascript
var out = continuedFraction( generator(), {
    'tolerance': 1e-1
});
// returns ~0.579

function generator() {
    var i = 0;
    return gen;

    function gen() {
        i += 1;
        return [ i, i ];
    }
}
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-restricted-syntax, node/no-unsupported-features/es-syntax -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools-continued-fraction@umd/browser.js"></script>
<script type="text/javascript">
(function () {
var out;

function* generator() {
    while ( true ) {
        yield [ 1, 1 ];
    }
}

function closure() {
    var ones = [ 1, 1 ];
    return gen;

    function gen() {
        return ones;
    }
}

out = continuedFraction( generator(), {
    'keep': true
});
console.log( 'Golden ratio (generator): %d,', out );

out = continuedFraction( closure(), {
    'keep': true
});
console.log( 'Golden ratio (closure): %d', out );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-tools-continued-fraction.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-tools-continued-fraction

[test-image]: https://github.com/stdlib-js/math-base-tools-continued-fraction/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/math-base-tools-continued-fraction/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-tools-continued-fraction/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-tools-continued-fraction?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-tools-continued-fraction.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-tools-continued-fraction/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-tools-continued-fraction/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-tools-continued-fraction/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-tools-continued-fraction/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-tools-continued-fraction/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-tools-continued-fraction/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-tools-continued-fraction/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-tools-continued-fraction/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-tools-continued-fraction/main/LICENSE

[continued-fraction]: https://en.wikipedia.org/wiki/Continued_fraction

[es6-generator]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*

</section>

<!-- /.links -->
