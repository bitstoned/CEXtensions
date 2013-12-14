// ==UserScript==
// @name       CEX.io en-US tweaks
// @namespace  https://github.com/bitstoned/CEXtensions
// @version    0.2
// @description  Overwrite strings with jQuery
// @match      https://cex.io/
// @match      https://www.cex.io/
// @license    GPLv2
// ==/UserScript==

$(document).ready(function() {
	$('form#buy .btn').text('Bid');
	$('form#sell .btn').text('Ask');
});