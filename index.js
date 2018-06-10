function indicesOf(needle, haystack, startOffset, endOffset) {

	let index;
	const result = [];

	const needleLen = needle.length;

	while ((index = haystack.indexOf(needle, startOffset)) !== -1) {
		if (index + needleLen > endOffset) return result;

		result.push(index);
		startOffset = index + 1;
	}

	return result;

}

module.exports = indicesOf;
