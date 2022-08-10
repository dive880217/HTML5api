function doFirst() {
    // 先跟 HTML 畫面產生關聯，建立事件聆聽功能
    let canvas = document.getElementById('canvas')
    context = canvas.getContext('2d')

    // 格線
    context.beginPath();
    for (let i = 0; i < 100; i++) {
        let interval = i * 50
        // 水平線
        context.moveTo(0, interval);
        context.lineTo(canvas.width, interval);
        context.fillText(interval, 0, interval);

        // 垂直線
        context.moveTo(interval, 0);
        context.lineTo(interval, canvas.height);
        context.fillText(interval, interval, 10);
    }
    context.strokeStyle = 'rgba(0,0,0,0.3)';
    context.stroke();
    // =====

    // 二分之一線
    context.beginPath();
    context.moveTo(0, 400);
    context.lineTo(1000, 400);

    context.strokeStyle = 'rgba(0,0,0,0.7)';
    context.stroke();
    // =====
    context.font = 'bold 30px Tahoma';
    context.strokeStyle = 'red';
    context.lineWidth = 15;

    //上 -- linear gradient
    context.fillText('linear gradient', 50, 50);
    // context.fillStyle='yellow';
    let gradient = context.createLinearGradient(100, 225, 600, 225);
    gradient.addColorStop(0, 'red');
    gradient.addColorStop(1, 'blue');
    gradient.addColorStop(0.5, 'green');
    gradient.addColorStop(0.75, 'pink');
    gradient.addColorStop(0.89, 'black');

    context.fillStyle = gradient;
    context.fillRect(100, 100, 500, 250);

    // 下 -- radial gradient
    context.fillStyle = '#000';
    context.fillText('radial gradient', 50, 450);

    let radialGradient = context.createRadialGradient(350, 625, 50, 250, 625, 150)
    radialGradient.addColorStop(0, 'red');
    radialGradient.addColorStop(1, 'blue');


    context.fillStyle = radialGradient;
    context.fillRect(100, 500, 500, 250);
    //參考 9_arcMore.js

}
window.addEventListener('load', doFirst)