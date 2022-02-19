
function encode(length){
    var encodeVal = hex_md5($("#xpassword").val()+$("#xhostname").val()).substring(0,length);
    $("#xpassword-result").html("<p>密码已复制，移动端可扫以下二维码获取！</p>");
    $("#xpassword-result").qrcode(encodeVal);
    XPlugin.copy(encodeVal);
}
$(function(){
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs){
        if(tabs.length>0){
            var url = new URL(tabs[0].url);
            $("#xhostname").val( url.hostname);
        }
    })

    $("#btn-en10").click(function(){
        encode(10);
    });
    $("#btn-en16").click(function(){
        encode(16);
    });
    $("#a_help").click(function(){
        var url = chrome.runtime.getURL("help.html");
        chrome.tabs.create({
            url:url
        });
    });
});