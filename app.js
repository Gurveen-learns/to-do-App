const url = 'https://webdev-bwqmu.run-ap-south1.goorm.io/api/todos/';

fetch(url).then((data) => data.json()).then((jsonData) => {
	jsonData.forEach((element) => {
		$('.list').append('<li>' + element.name + '</li>');
	});
});
