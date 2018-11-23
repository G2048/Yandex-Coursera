/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {

	// массив хештегов
	var arr1 = hashtags;
	// результирующий массив
	var arr2 = [];

	// идем по массиву хештегов и каждый хештег приводим к нижнему регистру
	for (var i = 0; i < arr1.length; ++i) {
		arr1[i] = arr1[i].toLowerCase();
		// проходим от текущего элемента дальше по массиву и ищем - есть ли такие же
		for (var j = i + 1; j < arr1.length; ++j) {
			var tmp = arr1[j].toLowerCase();
			if (arr1[i] === tmp) {
				// если нашли похожий, то удаляем его
				// ставим в качестве флага #
				arr1[j] = '#';
			}
		}
		// если у нас не #, то и не было повторяющихся хештегов
		// а значит добавляем хештег в результирующий
		if (arr1[i] !== '#') {
			arr2.push(arr1[i]);
		}
	}
	// вовзращаем через запятую
	return arr2.join(', ');

};



