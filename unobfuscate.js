(function() {window.Echo.channel($("meta[name='trakteer_streamkey']").attr("content")).notification(function(data) {if (data.type === 'new-tip-success') { consolelog(data); }});window.Echo.channel($("meta[name='trakteer_streamkeytest']").attr("content")).notification(function(data) {if (data.type === 'new-tip-simulation') { consolelog(data); } });})();
function consolelog(incomedata) {
	console.log(incomedata);
}
