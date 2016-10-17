var siteLinks = {
	"column one" : {
		"reddit" : "https://www.reddit.com",
		"twitter" : "https://www.twitter.com"
	},
	"column two" : {
		"apple" : "http://apple.com",
		"google" : "http://google.com"
	}
};

var table = "<table id=\"linktable\" class=\"linktable\">";

function loadLinks() {
	for (var key in siteLinks) {
		// key = "column number"
		// siteLinks[key] = {'page':'address'}
		for (var link in siteLinks[key]) {
			
		}
	}
}
