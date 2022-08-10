事件
1. 建立事件聆聽
包含一個物件 + 一個事件 + 一個處理函數
   (1).html < body onload = "doFirst()" >
      (2).js   window.onload = doFirst
         (3).js   window.addEventListener('load', doFirst)

2. 事件分類
   (1) 輸入裝置(滑鼠)
click
mousedown
mouseup

dblclick

mousemove
        
        mouseover   支援冒泡事件
mouseout

        mouseenter  沒有支援冒泡事件
mouseleave

contextmenu

   (2) 鍵盤
keypress
keydown
keyup

   (3) 瀏覽器
load
unload
beforeunload

resize
scroll

cut | paste | copy

   (4) 表單
submit
reset
theForm.onreset = function () {
   return confirm('Are you sure you want to reset the form?')
}

focus
blur

change
input
select
scroll(textarea)

3. 事件物件的屬性和方法
   - 屬性:
target
type
clientX | clientY
pageX | pageY

   - 方法:
preventDefault()    取消預設行為
stopPropagation()   停止冒泡事件

4. 引用事件物件

theButton.onclick = function (e) {
   // 在此，只要有使用任何一個事件物件的屬性或方法，就要『引用事件物件』
   console.log(e.target);          // <button>click me</button>
   console.log(e.target.nodeName); // BUTTON  
   console.log(e.type);            // type
   e.preventDefault()
}
-------------------------------------------------------------------





   [JS 呼叫函數]
1. 直接呼叫: drawing()
2. 事件聆聽: theButton.onclick = drawing
3. 計時器: setInterval(drawing, 1000)