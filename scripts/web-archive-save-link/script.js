// ==UserScript==
// @icon       http://web.archive.org/favicon.ico
// @name       Web Archive Save Link
// @version    1.5
// @description  Adds a save button to web archive pages.
// @match      https://web.archive.org/web/*
// @match      http://web.archive.org/web/*
// @grant      none
// @require	   https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @namespace https://greasyfork.org/users/4072
// ==/UserScript==

$( "#wmtb" ).append( "<a href='http://web.archive.org/save/" + $('#wmtbURL').val() + "'><img src='http://www.clker.com/cliparts/F/6/s/8/x/V/button-save-hi.png' height='27px' width='70px' /></a>" );
