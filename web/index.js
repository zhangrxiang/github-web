require.config({
    paths: {
        // baseUrl: '../lib/',
        jquery: '../lib/bootstrap/js/jquery',
        Vue: '../lib/vue/vue',
        'jquery.qrcode': '../lib/qrcodejs/qrcode',
        'jquery.qrcode2': '../lib/qrcodejs/qrcode2',
        'canvas-time': '../lib/canvas-time'
    }
});
require(['jquery', 'jquery.qrcode'], function (jQuery) {
    jQuery("#qr-value").val(document.baseURI);
    $("#qr-value").on("blur", function () {
        makeCode();
    }).on("keydown", function (e) {
        if (e.keyCode === 13) {
            makeCode();
        }
    });
    makeCode();

    function makeCode() {
        $("#qrcodeTable").text("");
        $("#qrcodeCanvas").text("");
        var text = jQuery("#qr-value").val();
        jQuery('#qrcodeTable').qrcode({
            render: "table",
            text: text
        });
        jQuery('#qrcodeCanvas').qrcode({
            text: text
        });
    }

})
