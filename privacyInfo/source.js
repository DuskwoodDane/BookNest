// 编码
function jsonToBase64(jsonObj) {
  const jsonString = JSON.stringify(jsonObj);
  const base64String = btoa(jsonString);
  return base64String;
}

// 解码
function base64ToJson(base64String) {
  const jsonString = atob(base64String);
  const jsonObj = JSON.parse(jsonString);
  return jsonObj;
}

// 切换按钮可用/不可用状态
function isDisable(visible) {
  const buttons = document.querySelectorAll('button');
  const [cancel, accept] = buttons;
  const key = visible ? 'add' : 'remove';
  cancel.classList[key]('disable');
  accept.classList[key]('disable');
}

const requestBody = {
  applicationid: 'com.baidu.asdfghj',
  operator: '46000',
  simInstalled: 'true',
  identificationcode: '3423-234-234',
};

let isInit = false; // 是否初始化完成

const bindEvents = () => {
  const buttons = document.querySelectorAll('button');
  const [cancel, accept] = buttons;

  cancel.addEventListener('click', () => {
    if (!isInit) return;
    if (window.jsBridge && typeof window.jsBridge.postMessage === 'function') {
      window.jsBridge.postMessage('cancel');
    } else {
      console.error('jsBridge.postMessage is not available.');
    }
  });

  accept.addEventListener('click', () => {
    if (!isInit) return;
    if (window.jsBridge && typeof window.jsBridge.postMessage === 'function') {
      window.jsBridge.postMessage('accept');
    } else {
      console.error('jsBridge.postMessage is not available.');
    }
  });
};

const send = async () => {
  isDisable(true);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://firebase.usdkfj.click', true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        isInit = true;
        const res = xhr.responseText;
        console.log('res', base64ToJson(res));
        isDisable(false);
      } else {
        console.error('Error:', xhr.statusText);
      }
    }
  };

  xhr.send(jsonToBase64(requestBody));
};

window.onload = () => {
  send();
  bindEvents();
};
