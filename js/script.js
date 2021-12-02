// Bubbly.jsのオプション設定
// ホーム
bubbly({
    animate: true, 
    blur: 4, 
    bubbleFunc: () => `hsla(${Math.random() * 360}, 100%, 50%, ${Math.random() * 0.2})`, 
    bubbles: 100, 
    canvas: document.querySelector("#background"), 
    colorStart: "#dfe166", 
    colorStop: "#9a9eab",
    compose: "lighter", 
    shadowColor: "#0ff", 
});


$('#works1').mouseover(function() {
    $('#works-bg').attr('class', 'bg-1');
}).mouseout(function() {
    $('#works-bg').attr('class', 'works-wrapper');
});

$('#works2').mouseover(function() {
    $('#works-bg').attr('class', 'bg-2');
}).mouseout(function() {
    $('#works-bg').attr('class', 'works-wrapper');
});

$('#works3').mouseover(function() {
    $('#works-bg').attr('class', 'bg-3');
}).mouseout(function() {
    $('#works-bg').attr('class', 'works-wrapper');
});

$('#works4').mouseover(function() {
    $('#works-bg').attr('class', 'bg-4');
}).mouseout(function() {
    $('#works-bg').attr('class', 'works-wrapper');
});

