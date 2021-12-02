// Bubbly.jsのオプション設定
// works1-4
bubbly({
    colorStart: "#111",
    colorStop: "#422",
    bubbleFunc: () => `hsla(0, 100%, 50%, ${Math.random() * 0.25})`
});