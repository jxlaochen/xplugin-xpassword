$(document.body).contextmenu(function (e) {
	XPlugin.passwordDom = e.target;
})

chrome.runtime.onMessage.addListener(function (request, _, response) {
	var onclickFn = XPlugin.contextMenuConfig[request.menuItemId].onclick;
	onclickFn(request);
	response();
});


