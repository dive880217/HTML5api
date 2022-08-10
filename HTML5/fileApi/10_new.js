function doFirst() {
    // 先跟 HTML 畫面產生關聯，建立事件聆聽功能
    document.getElementById('theFile').onchange = fileChange
}
function fileChange() {
    let files = document.getElementById('theFile').files
    // console.log(files);
    let info = ` `
    for (let i = 0; i < files.length; i++) {
        info += `File name: ${files[i].name}\n`
        info += `File type: ${files[i].type}\n`
        info += `File size: ${files[i].size} byte\n`
        info += `Last Modified: ${files[i].lastModifiedDate} \n`
        info += `-----------------------------------\n`
    }

    document.getElementById('fileInfo').value = info
}
window.addEventListener('load', doFirst)