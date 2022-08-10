function doFirst() {
    // 先跟 HTML 畫面產生關聯，建立事件聆聽功能


    document.getElementById('theFile').onchange = fileChange
}
function fileChange() {
    let file = document.getElementById('theFile').files[0]
    // console.log(file)
    let info = ``
    info += `File name: ${file.name} \n`
    info += `File type: ${file.type}\n`
    info += `File size: ${file.size} byte\n`
    info += `Last Modified: ${file.lastModifiedDate}\n`
    document.getElementById('fileInfo').value = info

    //=====
    let readFile = new FileReader()
    readFile.readAsDataURL(file)
    readFile.addEventListener('load', function () {
        let image = document.getElementById('image') 
            image.src = readFile.result
            image.style.maxWidth='500px'
            image.style.maxWidth ='500px'


            
    })
}
window.addEventListener('load', doFirst)