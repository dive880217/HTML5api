function doFirst() {
    // 先跟HTML畫面產生關聯，建立事件監聽功能
    let canvas = document.getElementById("canvas")
    let context = canvas.getContext('2d')
    //  console.log(canvas)


    context.fillStyle = "blue";


    context.fillRect(100, 100, 300, 200) //填滿
    // context.strokeRect(100, 100, 300, 200); // 描邊
    context.clearRect(150, 150, 50, 50); //填起一部分

    context.rect(700, 500, 300, 300);
    context.fill();
    
    //橡皮擦
    //  context.clearRect(0, 0, canvas.width, canvas.height);
    
    
    //  let temp = window.getComputedStyle(canvas).width
    //  alert(temp)
}

window.addEventListener('load', doFirst)
//  window.onload=doFirst