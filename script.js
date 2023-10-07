var box = document.getElementById("searchbox");

// this should catch most URLs, or at least the ones I would type
var urlPattern = /^((https?|file):\/\/\/?)?\S+(:\d+|\.\S+(\.\S+)*)(\/\S+)?$/i;

// regex for a hashtag taken straight from twitter's source code
var hashtag = "(#|＃)?([a-z0-9_\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0100-\u024f\u0253-\u0254\u0256-\u0257\u0300-\u036f\u1e00-\u1eff\u0400-\u04ff\u0500-\u0527\u2de0-\u2dff\ua640-\ua69f\u0591-\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05d0-\u05ea\u05f0-\u05f4\ufb12-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4f\u0610-\u061a\u0620-\u065f\u066e-\u06d3\u06d5-\u06dc\u06de-\u06e8\u06ea-\u06ef\u06fa-\u06fc\u0750-\u077f\u08a2-\u08ac\u08e4-\u08fe\ufb50-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\u200c-\u200c\u0e01-\u0e3a\u0e40-\u0e4e\u1100-\u11ff\u3130-\u3185\ua960-\ua97f\uac00-\ud7af\ud7b0-\ud7ff\uffa1-\uffdc\u30a1-\u30fa\u30fc-\u30fe\uff66-\uff9f\uff10-\uff19\uff21-\uff3a\uff41-\uff5a\u3041-\u3096\u3099-\u309e\u3400-\u4dbf\u4e00-\u9fff\u20000-\u2a6df\u2a700-\u2b73f\u2b740-\u2b81f\u2f800-\u2fa1f]*[a-z_\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0100-\u024f\u0253-\u0254\u0256-\u0257\u0300-\u036f\u1e00-\u1eff\u0400-\u04ff\u0500-\u0527\u2de0-\u2dff\ua640-\ua69f\u0591-\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05d0-\u05ea\u05f0-\u05f4\ufb12-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4f\u0610-\u061a\u0620-\u065f\u066e-\u06d3\u06d5-\u06dc\u06de-\u06e8\u06ea-\u06ef\u06fa-\u06fc\u0750-\u077f\u08a2-\u08ac\u08e4-\u08fe\ufb50-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\u200c-\u200c\u0e01-\u0e3a\u0e40-\u0e4e\u1100-\u11ff\u3130-\u3185\ua960-\ua97f\uac00-\ud7af\ud7b0-\ud7ff\uffa1-\uffdc\u30a1-\u30fa\u30fc-\u30fe\uff66-\uff9f\uff10-\uff19\uff21-\uff3a\uff41-\uff5a\u3041-\u3096\u3099-\u309e\u3400-\u4dbf\u4e00-\u9fff\u20000-\u2a6df\u2a700-\u2b73f\u2b740-\u2b81f\u2f800-\u2fa1f][a-z0-9_\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0100-\u024f\u0253-\u0254\u0256-\u0257\u0300-\u036f\u1e00-\u1eff\u0400-\u04ff\u0500-\u0527\u2de0-\u2dff\ua640-\ua69f\u0591-\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05d0-\u05ea\u05f0-\u05f4\ufb12-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4f\u0610-\u061a\u0620-\u065f\u066e-\u06d3\u06d5-\u06dc\u06de-\u06e8\u06ea-\u06ef\u06fa-\u06fc\u0750-\u077f\u08a2-\u08ac\u08e4-\u08fe\ufb50-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\u200c-\u200c\u0e01-\u0e3a\u0e40-\u0e4e\u1100-\u11ff\u3130-\u3185\ua960-\ua97f\uac00-\ud7af\ud7b0-\ud7ff\uffa1-\uffdc\u30a1-\u30fa\u30fc-\u30fe\uff66-\uff9f\uff10-\uff19\uff21-\uff3a\uff41-\uff5a\u3041-\u3096\u3099-\u309e\u3400-\u4dbf\u4e00-\u9fff\u20000-\u2a6df\u2a700-\u2b73f\u2b740-\u2b81f\u2f800-\u2fa1f]*)";

// add on here with more handy things
var handy = /^(google|gmail|dropbox)$/i;

var instaregex = /^i(nsta(gram)?|g)/i;

// search for text in text box
function search() {
  console.log("Googling \"" + box.value + "\"");
  console.log("Encoded query: \n" + encodeURIComponent(box.value));
  if (/^!.*/.test(box.value)) {
    document.location.href = "https://www.duckduckgo.com/?q=" + encodeURIComponent(box.value);
  } else {
    document.location.href = "https://www.bing.com/?q=" + encodeURIComponent(box.value);
  }
}

// if not search, nav to somewhere
function nav(address) {
  // if the address starts with "https?|ftp ://"
  if (/^(?:(?:https?|ftp):\/\/).*/i.test(address)) {
    document.location.href = address;
  } else {
    document.location.href = "http://" + address;
  }
}

// Handle enter key press in text box
// also handle the command parsing in the event that the text in the box is a command
function searchKeyPress(e) {
  if (window.commandsshown) return false;

  e = e || window.event;
  if (e.keyCode == 13) {
    parseCom(box.value);
  }
}

// when you hover a link, show its href
function aTitle(e) {
  e.title = e.href;
}

// focus the search box on load
window.onload = function() {
  document.getElementById("searchbox").focus();
};

$(document).keydown(function (e) {
  if (e.keyCode == 27 && window.commandsshown) {
    window.commandsshown = false;
    $("#help").removeClass("shown").addClass("hidden");
    $("#searchbox").focus();
    $("#searchbox").val("");
  }
});

// parse the user's command
function parseCom(com) {
  // handle help command
  if (/^h[ea]lp$/i.test(com) || /^commands$/i.test(com)) {
    //document.location.href = "commands.txt";
    window.commandsshown = true;
    $("#help").removeClass("hidden").addClass("shown");
  }
  // handle reddit command
  else if (com.startsWith("reddit")==true) {
    // if the subreddit command is matched
    if (/^reddit -r [A-Za-z0-9][A-Za-z0-9_]{2,20}$/i.test(com)) {
      var sargs = com.split(" ");
      nav("https://www.reddit.com/r/" + sargs.pop());
    }
    // if the user command is matched
    else if (/^reddit -u [\w-]{3,20}$/i.test(com)) {
      var uargs = com.split(" ");
      nav("https://www.reddit.com/u/" + uargs.pop());
    }
    // if the plain old reddit command is matched
    else if (/^reddit$/i.test(com)) {
      nav("https://www.reddit.com/");
    }
    // if anything else, it'll just google it because who cares
    else if (urlPattern.test(com)){
      nav(com);
    }
    // if all else fails, google it
    else {
      search();
    }
  }
  // handle twt command
  else if (com.startsWith("twt")==true) {
    // if matches the "twt" command
    if (/^twt$/i.test(com)) {
      nav("https://www.twitter.com/");
    }
    // if the twt [@]user_name command
    else if (/^twt @?[A-Za-z0-9_]{1,15}$/i.test(com)) {
      var targs = com.split(" ");
      nav("https://www.twitter.com/" + targs.pop());
    }
    // search twitter for text
    else if (/^twt -s .{1,140}$/i.test(com)) {
      var query = com.replace(/^twt -s /i, "");
      nav("https://www.twitter.com/search?q=" + encodeURIComponent(query));
    }
    // search twitter for text from user
    else if (/^twt -su @?[A-Za-z0-9_]{1,15} .{1,140}$/i.test(com)) {
      var qparts = com.split(" ");
      var query = com.replace(/^twt -su @?[A-Za-z0-9_]{1,15} /i, "");

      nav("https://www.twitter.com/search?q=" + encodeURIComponent(query + " from:" + qparts[2]));
    }
    // search twitter for tweets with a hashtag
    else if (/^twt -sh " + hashtag + "$/i.test(com)) {
      var tag = com.replace(/^twt -sh #?/i, "");
      nav("https://www.twitter.com/search?q=" + encodeURIComponent("#" + tag));
    }
    // search twitter for hashtags from user
    else if (/^twt -sh @?[A-Za-z0-9_]{1,15} " + hashtag + "$/i.test(com)) {
      var comparts = com.split(" ");
      nav("https://www.twitter.com/search?q=" + encodeURIComponent(comparts[3] + " from:" + comparts[2]));
    }
    // if anything else, it'll just google it because who cares
    else if (urlPattern.test(com)){
      nav(com);
    }
    // if all else fails, google it
    else {
      search();
    }
  }
  // handle ig command
  else if (instaregex.test(com)) {
    // just plain old ig
    if (/^i(nsta(gram)?|g)$/i.test(com)) {
      nav("https://www.instagram.com/");
    }
    // ig [@]username command
    else if (/^i(nsta(gram)?|g) @?[A-Za-z0-9_.]{1,30}/i.test(com)) {
      var iargs = com.split(" ");
      nav("https://www.instagram.com/" + iargs.pop());
    }
    // if anything else, it'll just google it because who cares
    else if (urlPattern.test(com)){
      nav(com);
    }
    // if all else fails, google it
    else {
      search();
    }
  }
  // misc commands
  else if (/^inbox$/i.test(com)) {
    nav("http://inbox.google.com");
  }
  else if (/^drive$/i.test(com)) {
    nav("http://drive.google.com");
  }
  else if (/^speedtest$/i.test(com) || /^spd$/i.test(com)) {
    nav("http://www.speedtest.net");
  }
  // Media commands
  else if (/^youtube$/i.test(com) || /^yt$/i.test(com)) {
    nav("http://www.youtube.com");
  }
  else if (/^yt m$/i.test(com) || /^(yt )?mrzic$/i.test(com)) {
    nav("https://www.youtube.com/playlist?list=PLFO5u7DxWplMm2RfQ8FUMZs5ydmChx2V8");
  }
  else if (/^ttv$/i.test(com)) {
    nav("http://www.twitch.tv/following/live");
  }
  else if (/^ttv [a-zA-Z0-9_]{4,25}$/i.test(com)) {
    var parts = com.split(" ");
    nav("http://www.twitch.tv/" + parts.pop());
  }
  else if (/^spotify$/i.test(com) || /^sptfy$/i.test(com)) {
    nav("https://play.spotify.com");
  }
  else if (/^soundcloud$/i.test(com) || /^sc$/i.test(com)) {
    nav("https://soundcloud.com/stream");
  }
  // github
  else if (/^\$$/i.test(com)) {
    nav("https://github.com");
  }
  else if (m = com.match(/^\$\s*(\S+)\s*$/i)) {
    nav(`https://github.com/${m[1]}`);
  }
  // Here are some really handy ones I'll probably have to use
  else if (handy.test(com)) {
    nav("http://www."+com+".com/");
  }
  else if (/^about:[A-Za-z0-9_-]+$/i.test(com)) {
    document.location.href = com;
  }
  else if (/^(ttv\s)?(donny|mustard|bm)$/.test(com)) {
    nav("https://twitch.tv/barbaricmustard");
  }
  // These are some commands that are just for fun, and probably won't be added to the list
  else if (/^(std::)?cout << .*$/i.test(com)) {
    var message = com.replace(/^cout << /i, "");
    alert(message);
  }
  // bitwarden
  else if (com.startsWith("bw")) {
    nav("https://www.bitwarden.com");
  }
  // crunchyroll
  else if (/^cr(unchyroll)?$/i.test(com)) {
    nav("https://www.crunchyroll.com");
  }
  // if it doesn't match any of the commands...
    // ... but is a valid URL
  else if (urlPattern.test(com)) {
    nav(com);
  }
  // ... or should be searched
  else {
    search();
  }
}
