/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
	var newMinutes = (minutes + interval) % 60;
	var newHours = (hours + Math.floor((minutes + interval)/60)) % 24;
	var StrM = String(newMinutes);
	var StrH = String(newHours)
	if (newMinutes < 10) {
		StrM = '0' + StrM;
	}
	if (newHours < 10) {
		StrH = '0' + StrH;
	}
	return StrH + ':' + StrM;
};
