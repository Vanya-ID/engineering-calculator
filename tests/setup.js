import jsdom from "jsdom";

const DEFAULT_HTML = '<html lang="ru"><body></body></html>';

global.document = jsdom.jsdom(DEFAULT_HTML);

global.window = document.defaultView;
global.navigator = window.navigator;
