// ==UserScript==
// @name         Pulp no overscroll
// @namespace    https://bengrant.dev
// @version      0.1
// @description  Prevent overscroll on mac when using the scroll wheel to emulate the crank in the Playdate Pulp web player
// @author       Benji Grant
// @match        https://play.date/pulp/*/play/
// @icon         http://www.google.com/s2/favicons?domain=play.date
// @grant        none
// ==/UserScript==

document.body.style.overscrollBehavior = 'none'
