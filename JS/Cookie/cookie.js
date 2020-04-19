function addCookie(name, value) {
	document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
}

function getCookie(name) {
	let matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	/*	return matches ? decodeURIComponent(matches[1]) : undefined;	*/
	return matches ? decodeURIComponent(matches[1]) : "";
}

function deleteCookie(name) {
	var date = new Date();
	date.setTime(date.getTime() - 1);
	document.cookie = name += "=; expires=" + date.toGMTString();
}
