// Copyright ehm kah
browser.browserAction.onClicked.addListener(() => {
    browser.tabs.executeScript({
        file: 'callScript.js'
    });
});