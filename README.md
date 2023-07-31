<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

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

# enum2str

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return the policy string associated with an output ndarray [data type policy][@stdlib/ndarray/output-dtype-policies] enumeration constant.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import enum2str from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-output-policy-enum2str@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/ndarray-base-output-policy-enum2str/tags). For example,

```javascript
import enum2str from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-output-policy-enum2str@v0.0.2-esm/index.mjs';
```

#### enum2str( policy )

Returns the policy string associated with an output ndarray [data type policy][@stdlib/ndarray/output-dtype-policies] enumeration constant.

```javascript
import str2enum from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-output-policy-str2enum@esm/index.mjs';

var v = str2enum( 'same' );
// returns <number>

var policy = enum2str( v );
// returns 'same'
```

If unable to resolve a policy string, the function returns `null`.

```javascript
var v = enum2str( -999999999 );
// returns null
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

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import str2enum from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-output-policy-str2enum@esm/index.mjs';
import enum2str from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-output-policy-enum2str@esm/index.mjs';

var str = enum2str( str2enum( 'same' ) );
// returns 'same'

str = enum2str( str2enum( 'floating_point' ) );
// returns 'floating_point'

str = enum2str( str2enum( 'signed_integer' ) );
// returns 'signed_integer'

str = enum2str( str2enum( 'unsigned_integer' ) );
// returns 'unsigned_integer'

str = enum2str( str2enum( 'integer' ) );
// returns 'integer'

str = enum2str( str2enum( 'promoted' ) );
// returns 'promoted'

str = enum2str( str2enum( 'complex_floating_point' ) );
// returns 'complex_floating_point'

str = enum2str( str2enum( 'real_floating_point' ) );
// returns 'real_floating_point'

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

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

## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-base-output-policy-enum2str.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-base-output-policy-enum2str

[test-image]: https://github.com/stdlib-js/ndarray-base-output-policy-enum2str/actions/workflows/test.yml/badge.svg?branch=v0.0.2
[test-url]: https://github.com/stdlib-js/ndarray-base-output-policy-enum2str/actions/workflows/test.yml?query=branch:v0.0.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-base-output-policy-enum2str/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-base-output-policy-enum2str?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-base-output-policy-enum2str.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-base-output-policy-enum2str/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-base-output-policy-enum2str/tree/deno
[umd-url]: https://github.com/stdlib-js/ndarray-base-output-policy-enum2str/tree/umd
[esm-url]: https://github.com/stdlib-js/ndarray-base-output-policy-enum2str/tree/esm
[branches-url]: https://github.com/stdlib-js/ndarray-base-output-policy-enum2str/blob/main/branches.md

[@stdlib/ndarray/output-dtype-policies]: https://github.com/stdlib-js/stdlib/tree/esm

</section>

<!-- /.links -->
