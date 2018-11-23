// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
	
	commandName = command.split(' ')[0];

	// вызываем необходимые функции в зависимости от входных данных
	if (commandName === 'ADD') {
		return AddContact(command);
	} else if (commandName === 'REMOVE_PHONE') {
		return RemovePhone(command);
	} else if (commandName === "SHOW") {
		return Show(command);
	}

};

function AddContact(command) {
	// разбиваем формат команды на необходимые данные
	// команда
	var commandArr = command.split(' ');
	// имя контакта
	var name = commandArr[1];
	// телефоны
	var phones = commandArr[2].split(',');

	// если контакта не существует - создаем новый
	// иначе – находим контакт и добавляем у нему телефоны
	if (!phoneBook.hasOwnProperty(name)) {
		phoneBook[name] = phones;
	} else {
		phoneBook[name] = phoneBook[name].concat(phones);
	}

	return phoneBook[name];
}

function RemovePhone(command) {
	// разбиваем на даныне
	var commandArr = command.split(' ');
	var phone = commandArr[1];

	// флаг, который будет показывать есть ли такой телефон у контакты
	var isExist = false;
	
	// идем по телефонный книге и находим соответствующий телефон
	var keys = Object.keys(phoneBook);
	for (var i = 0; i < keys.length; ++i) {
		var key = keys[i];
		for (var j = 0; j < phoneBook[key].length; ++j) {
			if (phone === phoneBook[key][j]) {
				isExist = true;
				phoneBook[key].splice(j, 1);
				break;
			}
		}
	}

	return isExist;
}

function Show(command) {

	var arr = [];

	// выводим контакты
	var keys = Object.keys(phoneBook);
	for (var i = 0; i < keys.length; ++i) {
		var key = keys[i];
		if (phoneBook[key].length > 0) {
			var tmpstr = key + ': ' + phoneBook[key].join(', ');
			arr.push(tmpstr)
		}
	}

	return arr.sort();
	
}
