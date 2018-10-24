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

jQuery(document).ready(function ($) {
	$('.ltwitch').each(function () {
		var tnick = $(this).data('tnick');
		//var tid = channels[tnick].id;
		var statusindicator = $(this).find(".status");
		var statustext = $(this).find(".statustext");
		$.getJSON("https://api.twitch.tv/kraken/streams/" + tnick + "?client_id=" + clientID + "&callback=?", function (c) {
			//console.log(c);
			if (c.stream == null) {
				statusindicator.removeClass("loading").addClass("offline");
				statustext.html("Offline");
			} else {
				statusindicator.removeClass("loading").addClass("live");
				statustext.removeClass("offline").addClass("online");
				statustext.html(c.stream.game);
				statustext.prop("title", c.stream.game);
			}
		});
	});
});
