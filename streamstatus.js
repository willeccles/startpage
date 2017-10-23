function streamStatus(stream, span) {
	getStreamInfo(stream, function(output){
		console.log(output);
		var info = JSON.parse(output);
		
		console.log(info);
		if (info.stream) {
			span.innerHTML += "<div class='status live'></div>"+info.stream.viewers;
		} else {
			return "<span class='stream'>"+stream+"<div class='status offline'></div></span>";
		}
	});
}
