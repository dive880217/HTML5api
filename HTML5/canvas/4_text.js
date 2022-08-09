function doFirst() {
    // 先跟HTML畫面產生關聯，建立事件監聽功能
    let canvas = document.getElementById("canvas")
    let context = canvas.getContext('2d')


    context.font = 'bold 80px sans-serif';
    // 第一個字
    // context.textBaseline='top | hanging | middle | 
    // alphabetic | ideographic | bottom';

    context.textBaseline = ' alphabetic';

    context.fillText('Style', 100, 100);


    //輔助線
    context.moveTo(100, 100);
    context.lineTo(300, 100);
    context.strokeStyle = 'red';
    context.stroke();
    context.arc(100, 100, 5, 0, 2, Math.PI);
    context.stroke();

    // 第二個字
    context.shadowColor='red';
    context.shadowOffsetX=5;
    context.shadowOffsetY=5;
    context.shadowBlur=5;
    context.fillText('Style', 100, 250);

    // 第三個字
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    context.shadowBlur = 15;
    context.fillStyle='#fff';

    context.fillText('Style', 100, 400);

    // 第四個字 多重陰影
    context.shadowBlur = 10;
    context.shadowColor='blue';
    context.fillText('Style', 100, 550);
    context.shadowColor = 'red';
    context.fillText('Style', 100, 550);
    context.shadowColor = 'green';
    context.fillText('Style', 100, 550);

}
window.addEventListener('load', doFirst)