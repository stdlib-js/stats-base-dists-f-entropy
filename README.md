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

# Entropy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [F][f-distribution] distribution [differential entropy][entropy].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [differential entropy][entropy] (in [nats][nats]) for a [F][f-distribution] random variable is

<!-- <equation class="equation" label="eq:f_entropy" align="center" raw="h\left( X \right) = \ln\left( \tfrac{d_2}{d_1} \Gamma\left( \tfrac{d_1}{2} \right) \Gamma\left( \tfrac{d_2}{2} \right) \Gamma\left( \tfrac{d_1+d_2}{2} \right) \right) \\ + \left( 1-\tfrac{d_1}{2} \right) \Psi\left( \tfrac{d_1}{2} \right) +  \left( 1-\tfrac{d_2}{2} \right) \Psi\left( \tfrac{d_2}{2} \right) + \tfrac{d_1+d_2}{2} \Psi\left( \tfrac{d_1+d_2}{2} \right)" alt="Differential entropy for an F distribution."> -->

```math
h\left( X \right) = \ln\left( \tfrac{d_2}{d_1} \Gamma\left( \tfrac{d_1}{2} \right) \Gamma\left( \tfrac{d_2}{2} \right) \Gamma\left( \tfrac{d_1+d_2}{2} \right) \right) \\ + \left( 1-\tfrac{d_1}{2} \right) \Psi\left( \tfrac{d_1}{2} \right) +  \left( 1-\tfrac{d_2}{2} \right) \Psi\left( \tfrac{d_2}{2} \right) + \tfrac{d_1+d_2}{2} \Psi\left( \tfrac{d_1+d_2}{2} \right)
```

<!-- <div class="equation" align="center" data-raw-text="h\left( X \right) = \ln\left( \tfrac{d_2}{d_1} \Gamma\left( \tfrac{d_1}{2} \right) \Gamma\left( \tfrac{d_2}{2} \right) \Gamma\left( \tfrac{d_1+d_2}{2} \right) \right) \\ + \left( 1-\tfrac{d_1}{2} \right) \Psi\left( \tfrac{d_1}{2} \right) +  \left( 1-\tfrac{d_2}{2} \right) \Psi\left( \tfrac{d_2}{2} \right) + \tfrac{d_1+d_2}{2} \Psi\left( \tfrac{d_1+d_2}{2} \right)" data-equation="eq:f_entropy">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/f/entropy/docs/img/equation_f_entropy.svg" alt="Differential entropy for an F distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `d1` is the numerator degrees of freedom, `d2` is the denominator degrees of freedom, and `Γ` and `Ψ` denote the [gamma][gamma-function] and [digamma][digamma] functions, respectively.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import entropy from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-f-entropy@deno/mod.js';
```
The previous example will load the latest bundled code from the deno branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/stats-base-dists-f-entropy/tags). For example,

```javascript
import entropy from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-f-entropy@v0.3.1-deno/mod.js';
```

#### entropy( d1, d2 )

Returns the [differential entropy][entropy] of an [F][f-distribution] distribution with numerator degrees of freedom `d1` and denominator degrees of freedom `d2` (in [nats][nats]).

```javascript
var v = entropy( 4.0, 7.0 );
// returns ~1.277

v = entropy( 4.0, 12.0 );
// returns ~1.12

v = entropy( 8.0, 2.0 );
// returns ~2.144
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = entropy( NaN, 7.0 );
// returns NaN

v = entropy( 3.0, NaN );
// returns NaN
```

If provided `d1 <= 0`, the function returns `NaN`.

```javascript
var v = entropy( 0.0, 2.0 );
// returns NaN

v = entropy( -1.0, 1.0 );
// returns NaN
```

If provided `d2 <= 0`, the function returns `NaN`.

```javascript
var v = entropy( 3.0, 0.0 );
// returns NaN

v = entropy( 3.0, -1.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import uniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-uniform@deno/mod.js';
import logEachMap from 'https://cdn.jsdelivr.net/gh/stdlib-js/console-log-each-map@deno/mod.js';
import EPS from 'https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-eps@deno/mod.js';
import entropy from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-f-entropy@deno/mod.js';

var opts = {
    'dtype': 'float64'
};
var d1 = uniform( 10, EPS, 10.0, opts );
var d2 = uniform( 10, EPS, 20.0, opts );

logEachMap( 'd1: %0.4f, d2: %0.4f, h(X;d1,d2): %0.4f', d1, d2, entropy );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-f-entropy.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-f-entropy

[test-image]: https://github.com/stdlib-js/stats-base-dists-f-entropy/actions/workflows/test.yml/badge.svg?branch=v0.3.1
[test-url]: https://github.com/stdlib-js/stats-base-dists-f-entropy/actions/workflows/test.yml?query=branch:v0.3.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-f-entropy/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-f-entropy?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-f-entropy.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-f-entropy/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-f-entropy/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-f-entropy/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-f-entropy/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-f-entropy/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-f-entropy/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-f-entropy/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-f-entropy/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-f-entropy/main/LICENSE

[f-distribution]: https://en.wikipedia.org/wiki/F_distribution

[entropy]: https://en.wikipedia.org/wiki/Entropy_%28information_theory%29

[nats]: https://en.wikipedia.org/wiki/Nat_%28unit%29

[gamma-function]: https://en.wikipedia.org/wiki/Gamma_function

[digamma]: https://en.wikipedia.org/wiki/Digamma_function

</section>

<!-- /.links -->
