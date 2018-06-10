js-indicesof
============

Just like `indexOf()`, but returns an array of all occurrences.

Will return an empty array if there is no match.

Install
-------

	npm i indicesof

Syntax
------

	const indicesOf = require('indicesof');
	indicesOf(needle, haystack, startOffset, endOffset ]);

* `haystack` can be a string or a buffer.
* `startOffset` is optional. Default is 0.
* `endOffset` is optional. Default is the haystack length. Note
  that the entire length of the needle must be within the
  offsets to be a match. Also, the offset is not inclusive.

Strings vs Buffers
------------------

Note that the byte position is returned for Buffers, which
might not be the same as the char position for strings:

	indicesOf('l', 'Älg'); // Returns [ 1 ]
	indicesOf('l', Buffer.from('Älg')); // Returns [ 2 ]

Example
-------

	var indicesOf = require('indicesof');
	var haystack = "If I Can't Dance It's Not My Revolution";
	indicesOf('n', haystack); // [ 7, 13, 38 ]
	indicesOf('an', haystack); // [ 6, 12 ]
	indicesOf('Dan', haystack); // [ 11 ]
	indicesOf('dan', haystack); // [ ]

