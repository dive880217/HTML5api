function doFirst() {
    // 先跟 HTML 畫面產生關聯，建立事件監聽功能
    let canvas = document.getElementById("canvas")
    context = canvas.getContext('2d')


    for (let i = 0; i < 100; i++) {
        let interval = i * 50
        // 水平線
        context.moveTo(0, interval);
        context.lineTo(canvas.width, interval);
        // context.fillText(interval, 0, interval);

        //  垂直線 
        context.moveTo(interval, 0);
        context.lineTo(interval, canvas.height);
        // context.fillText(interval, interval, 10);

    }
    context.strokeStyle = 'rgba(0,0,0,0.3)';
    // context.stroke();
    // =====
    pic1 = new Image()
    pic1.src = '../../images/cityscape.jpg'
    pic1.addEventListener('load', loadImage)
    // pic1.addEventListener("load", function () {
    //     context.drawImage(pic1, 0, 0,canvas.width ,canvas.height);
    // })

    pic2 = new Image()
    pic2.src = '../../images/Shinnosuke/Shinnosuke9.png'
    pic2.addEventListener('load', loadImage)
    // pic2.addEventListener("load", function () {
    //     // context.drawImage(pic2, 0, 0, 300, 300); //左上
    //     // context.drawImage(pic2, 700, 0, 300, 300); //右上
    //     // context.drawImage(pic2, 0, 500, 300, 300); //左下
    //     // context.drawImage(pic2, 700, 500, 300, 300);//右下

    // }) 
    // 拉出並且改成全域變數 不用更新圖片才出現 let拿掉變成全域
    function loadImage() {
        context.globalAlpha=0.5; //變透明
        context.drawImage(pic1, 0, 0, canvas.width, canvas.height);
        context.globalAlpha =0.7
        context.drawImage(pic2, 700, 0, 300, 300); //右上
    }
}
window.addEventListener('load', doFirst)