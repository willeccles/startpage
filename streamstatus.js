// these might be needed in the future
var channels = {
	"BarbaricMustard": {
		"id": 29542710
	},
	"Roseychuu": {
		"id": 168375143
	},
	"MoeMarrow": {
		"id": 46725126
	}
};

const clientID = "482cubwkav5oth8fwy0kpgjpcxsw9x";

$(document).ready(function ($) {
	$('.ltwitch').each(function () {
		var tnick = $(this).data('tnick');
		var statusindicator = $(this).find(".status");
		var statustext = $(this).find(".statustext");
		$.ajax({
			url: "https://api.twitch.tv/kraken/streams/" + tnick + "?client_id=" + clientID,
			dataType: 'json',
			success: function (c) {
				if(c.stream == null) {
					statusindicator.removeClass("loading").addClass("offline");
					statustext.html("Offline");
				} else {
					statusindicator.removeClass("loading").addClass("live");
					statustext.removeClass("offline").addClass("online");
					statustext.html(c.stream.game);
					statustext.prop("title", c.stream.game);
				}
			},
			error: function (c) {
				statusindicator.removeClass("loading").addClass("failed");
				statustext.removeClass("offline").addClass("failed");
				statustext.html("Error.");
			}
		});
	});
});
