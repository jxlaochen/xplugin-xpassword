var XPlugin = {
    //默认右键菜单配置
    defalultContextMenuConfig: {
    },
    //初始化右键菜单
    initContextMenu: function (contextMenuConfig) {
        XPlugin.createContextMenu(contextMenuConfig);
        chrome.contextMenus.onClicked.addListener(function (info, tab) {
            chrome.tabs.sendMessage(tab.id, info, function (response) {
            });
        });
    },
    //创建右键菜单
    createContextMenu: function (contextMenuConfig) {
        chrome.contextMenus.removeAll();
        for (var key in contextMenuConfig) {
            var val = contextMenuConfig[key];
            chrome.contextMenus.create({
                "id": key,
                "type": "normal",
                "title": val.title,
                "contexts": ["all"]
            });
        }
    },
    //重置右键菜单
    resetContextMenu: function () {
        XPlugin.createContextMenu(XPlugin.defalultContextMenuConfig);
    },
    copy: function (text) {
        var transfer = document.createElement('textarea');
        document.body.appendChild(transfer);
        transfer.value = text;
        transfer.focus();
        transfer.select();
        if (document.execCommand('copy')) {
            document.execCommand('copy');
        }
        transfer.blur();
        document.body.removeChild(transfer);
    }
}
