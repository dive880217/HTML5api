function doFirst() {
    // 先跟 HTML 畫面產生關聯,建立事件監聽功能
    myMovie = document.getElementById('myMovie')
    playButton = document.getElementById('playButton')
    defaultBar = document.getElementById('defaultBar')

    barSize = parseInt(getComputedStyle(defaultBar).width)
    //alert (barSize)

    playButton.addEventListener('click', playOrPause)
    defaultBar.addEventListener('click', clickedBar)

    // fullButton.addEventListener('click', function () {
    //     myMovie.webkitEnterFullScreen()
    // })
}
function playOrPause() {
    if (!myMovie.paused && !myMovie.ended) { //影片正在跑
        myMovie.pause()
        playButton.innerText = 'play'
    } else {
        myMovie.play()
        playButton.innerText = 'pause'
        setInterval(update, 300)
    }
}
function update() {
    if (!myMovie.ended) {
        //進度調顯示
        let size = barSize / myMovie.duration * myMovie.currentTime
        progress.style.width = `${size}px`
    } else {
        progress.style.width = `0px`
        playButton.innerText = 'play'
        myMovie.currentTime = 0
    }

}

function clickedBar(e) {
    let mouseX = e.clientX - defaultBar.offsetLeft
    progress.style.width = `${mouseX}px`
    let newTime = mouseX / (barSize / myMovie.duration)
    myMovie.currentTime = newTime

}




window.addEventListener('load', doFirst)