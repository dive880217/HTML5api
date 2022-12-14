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
    context.lineWidth = 5;


    // 左上
    context.translate(50, 50);
    context.fillText('arc()', 0, 0);
    context.translate(-50, -50);


    context.beginPath();
    // context.arc(250, 200, 150, 0, Math.PI);
    // context.arc(250, 200, 150, 0, Math.PI, true);
    // context.arc(250, 200, 150, 0, 2 * Math.PI);
    context.arc(250, 200, 150, 0.3 * Math.PI, 1.7 * Math.PI);
    context.stroke();

    // 右上
    context.translate(550, 50);
    context.fillText('arcTo()', 0, 0);
    context.translate(-550, -50);
    context.beginPath();
    context.moveTo(600, 250);
    // context.arcTo(x1, y1, x2, y2, radius);
    context.arcTo(750, 100, 850, 300, 100);
    context.stroke();
    //輔助線
    context.strokeStyle = 'blue';
    context.lineWidth = 1;
    context.moveTo(600, 250);
    context.lineTo(750, 100);
    context.lineTo(850, 300);
    context.stroke();











    // 左下
    context.translate(50, 450);
    context.fillText('quadraticCurveTo()', 0, 0);
    context.translate(-50, -450);

    context.strokeStyle = 'red';
    context.lineWidth = 5;

    context.beginPath();
    context.moveTo(100, 650);
    // context.arcTo(250, 500  , 350, 700);
    context.quadraticCurveTo(250, 500, 350, 700,);
    context.stroke();

    //輔助線
    context.strokeStyle = 'blue';
    context.lineWidth = 1;
    context.beginPath();

    context.moveTo(100, 650);
    context.lineTo(250, 500);
    context.lineTo(350, 700);
    context.stroke();


    // 右下
    context.translate(550, 450);
    context.fillText('bezierCurveTo()', 0, 0);
    context.translate(-550, -450);

    context.strokeStyle = 'red';
    context.lineWidth = 5;

    context.moveTo(600, 650);
    context.bezierCurveTo(675, 550, 800, 500, 850, 700,);
    context.stroke();

    //輔助線
    context.strokeStyle = 'blue';
    context.lineWidth = 1;
    context.beginPath();
    // context.lineTo(675, 550);
    // context.lineTo(800, 500);
    context.moveTo(600, 650);
    context.lineTo(675, 550);
    context.lineTo(800, 500);
    context.lineTo(850, 700);
    context.stroke();










}
window.addEventListener('load', doFirst)