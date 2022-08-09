function doFirst() {
    // 先跟HTML畫面產生關聯，建立事件監聽功能
    let canvas = document.getElementById("canvas")
    let context = canvas.getContext('2d')


    context.strokeStyle = 'blue';
    context.fillStyle = 'red';
    context.lineWidth= 5 ;
    
//詳細看講義 canvas 2d作法

    context.moveTo(100, 100); //移到某個位置(座標)
    context.lineTo(250, 250); // 畫線
    context.lineTo(400, 50);
    context.lineTo(50, 200);
    context.closePath();

    context.stroke(); //輸出外框，輸出線條
    context.fill(); //輸出外框，輸出線條
}
window.addEventListener('load', doFirst)