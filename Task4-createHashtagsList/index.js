/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
	var arrayOfHashtags =	[];
	var isHash = false;
	var savePos = 0;
	
	for (var i = 0; i < tweet.length; ++i) {
		if (tweet[i] === '#') {
			isHash = true;
			savePos = i;
		}
		if (tweet[i] === ' ' && isHash) {
			arrayOfHashtags.push(tweet.slice(savePos + 1,i));
			isHash = false;
		} else if (i === tweet.length - 1 && isHash) {
			arrayOfHashtags.push(tweet.slice(savePos + 1,i + 1));
			isHash = false;
		}
	}

	return arrayOfHashtags;
};
