function findStreamKey(urlStreamOverlay){
	$(".findKey").html('Loading..');
	$.get(urlStreamOverlay, function(data, status){
		if (status == 'success'){
			var keyStream = {};
			var posisiStart = data.indexOf("Echo.channel('creator-stream") + 14;
			var posisiEnd = data.indexOf("').notification(",posisiStart);
			keyStream[0] = data.substring(posisiStart,posisiEnd);
			var posisiStart = data.indexOf("Echo.channel('creator-stream-test") + 14;
			var posisiEnd = data.indexOf("').notification(",posisiStart);
			keyStream[1] = data.substring(posisiStart,posisiEnd);
			$("#keyUtama").val(keyStream[0]);
			$("#keyTest").val(keyStream[1]);
			$(".findKey").html('Selesai!');
		}else{
			$(".findKey").html('Error!');
		}
		console.log(status);
	});
}
$(document).on('click','.findKey',function(e){
    var urlOverlay = $("#urlOverlay").val();findStreamKey(urlOverlay);
});