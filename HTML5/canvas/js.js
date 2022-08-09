事件
1. 建立事件監聽
   包含一個物件 + 一個事件 + 一個處理函數 
   (1). html <body onload="doFirst()">
   (2). js window.onload = doFirst
    (3).js window.addEventListener('load', doFirst)





   [JS 呼叫函數]
   1.直接呼叫 : drawing()
   2.事件監聽 : theButton.onclick = drawing
   3.計時器: setInterval(drawing,1000)