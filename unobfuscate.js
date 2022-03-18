(function() {
	window.Echo.channel($("meta[name='trakteer_streamkey']").attr("content")).notification(function(data) {
		if (data.type === 'new-tip-success') {
			trakteerCall(data);
		}
	});
	window.Echo.channel($("meta[name='trakteer_streamkeytest']").attr("content")).notification(function(data) {
		if (data.type === 'new-tip-simulation') {
			trakteerCall(data);
		}
	});
})();
function trakteerCall(trakteerJson) {
	/// trakteerJson berbentuk data array pendonasi.
	$("#log").append(trakteerJson.supporter_name+' - '+trakteerJson.price+'<br>');
}