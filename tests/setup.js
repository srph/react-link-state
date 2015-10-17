var jsdom = require('jsdom').jsdom;

global.document = jsdom('<!doctype><html><body></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;