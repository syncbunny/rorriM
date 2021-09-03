
chrome.contextMenus.create({
  title: 'Mirror',
  type: 'normal',
  contexts: ['all'],
  onclick: (info, tab) => {
    let el;
    chrome.tabs.sendMessage(
      tab.id,
      "x-mirror"
    );
  }
})
