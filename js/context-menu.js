XPlugin.contextMenuConfig = {
    encryption10:{
        title: "加密10位",
        onclick:function (info) {
            var encodeVal = hex_md5($(XPlugin.passwordDom).val()+window.location.hostname);
            $(XPlugin.passwordDom).val(encodeVal.substring(0,10));
        }
    },
    encryption16:{
        title: "加密16位",
        onclick:function (info) {
            var encodeVal = hex_md5($(XPlugin.passwordDom).val()+window.location.hostname);
            $(XPlugin.passwordDom).val(encodeVal.substring(0,16));
        }
    }
}