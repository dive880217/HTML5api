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
    readFile.readAsText(file)
    readFile.addEventListener('load', function () {
        document.getElementById('fileContent').value = readFile.result

    })
}
window.addEventListener('load', doFirst)