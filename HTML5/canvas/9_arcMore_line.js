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

    // 四分之一線
    context.beginPath();
    context.moveTo(0, 400);
    context.lineTo(1000, 400);

    context.moveTo(500, 0);
    context.lineTo(500, 800);

    context.strokeStyle = 'rgba(0,0,0,0.7)';
    context.stroke();
    // =====
    context.font = 'bold 30px Tahoma';
    context.strokeStyle = 'red';
    context.lineWidth = 15;

    // 左上
    context.fillText('arc() + translate()', 50, 40);

    context.translate(250, 200);  // (250, 200) ---> (0,0)

    context.beginPath();
    context.arc(0, 0, 150, 0, 2 * Math.PI);
    context.stroke();

    context.moveTo(0, 0);
    context.lineTo(0, -100);
    context.stroke();

    context.translate(-250, -200);

    // 右上
    context.fillText('radial gradient', 550, 40);

    context.translate(750, 200);

    context.lineWidth = 15;
    let radius = 150;
    let circleGradient = context.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    circleGradient.addColorStop(0, '#666');
    circleGradient.addColorStop(0.5, '#fff');
    circleGradient.addColorStop(1, '#666');

    context.beginPath();
    context.strokeStyle = circleGradient;
    context.arc(0, 0, radius, 0, 2 * Math.PI);
    context.stroke();

    context.translate(-750, -200);
    context.strokeStyle = 'red';

    // 左下
    // lineCap
    context.fillText('lineCap', 50, 450);

    context.beginPath();
    context.lineCap = 'butt';
    context.moveTo(100, 500);
    context.lineTo(200, 500);
    context.stroke();

    context.beginPath();
    context.lineCap = 'round';
    context.moveTo(100, 550);
    context.lineTo(200, 550);
    context.stroke();

    context.beginPath();
    context.lineCap = 'square';
    context.moveTo(100, 600);
    context.lineTo(200, 600);
    context.stroke();

    // 右下
    // lineJoin
    context.fillText('lineJoin', 550, 450);

    context.lineJoin = 'miter';
    context.strokeRect(550, 500, 100, 150);

    context.lineJoin = 'bevel';
    context.strokeRect(700, 500, 100, 150);

    context.lineJoin = 'round';
    context.strokeRect(850, 500, 100, 150);
}
window.addEventListener('load', doFirst)