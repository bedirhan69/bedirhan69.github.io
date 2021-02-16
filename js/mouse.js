document.oncontextmenu = function() { return false }
if (document.layers) {
    window.captureEvents(Event.MOUSEDOWN);
    window.onrightmousedown = function(e) {
        if (e.target == document) return false;

    }
} else {
    document.onrightmousedown = function() { return false; }
}

var kutu = document.getElementById("123");
window.onkeydown = function(olay) {
    if (olay.keyCode == 85) {
        alert('Dostum Sayfanın yazılımı bizde kalsın')
        return false
    }
}