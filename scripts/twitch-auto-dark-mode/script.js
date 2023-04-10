// ==UserScript==
// @name         Twitch Auto Dark Mode
// @namespace    https://bengrant.dev
// @version      0.2
// @description  Sync Twitch dark theme with system color scheme
// @author       Benji Grant
// @match        https://www.twitch.tv/*
// @icon         http://www.google.com/s2/favicons?domain=twitch.tv
// @grant        none
// @license      MIT
// ==/UserScript==

const darkQuery = window.matchMedia('(prefers-color-scheme: dark)')

const setIsDark = isDark => {
  if (document.documentElement.classList.contains('tw-root--theme-dark') && isDark) return

  let shouldCloseMenu = false
  if (document.querySelector('[data-a-target="dark-mode-toggle"]') === null) {
    document.querySelector('[data-a-target="user-menu-toggle"]').click()
    shouldCloseMenu = true
  }
  document.querySelector('[data-a-target="dark-mode-toggle"]').parentElement.querySelector('label').click()
  if (shouldCloseMenu) {
    document.querySelector('[data-a-target="user-menu-toggle"]').click()
  }
}

const init = () => {
  setIsDark(darkQuery.matches)
  darkQuery.addListener(e => setIsDark(e.matches))
}

window.onload = init

init()
