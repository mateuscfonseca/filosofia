function removeIframeByName(name) {
	iframeCollection = document.getElementsByName(name);

	for (var i=0; iframe = iframeCollection[i++];) {
		iframe.width = 0;
		iframe.height = 0;
		iframe.src = "";
	}
}
