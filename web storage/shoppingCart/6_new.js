let storage = localStorage;
function doFirst() {
    let itemString = storage.getItem('addItemList')
    let items = itemString.substr
        (0, itemString.length - 2).split(', ')
    console.log(items);   // ['A1001', 'A1005', 'A1006', 'A1002']
    newDiv = document.createElement('div')
    newTable = document.createElement('table')

    // table 放進 div , div 放進 cartList 裡
    newDiv.appendChild(newTable)
    cartList.appendChild(newDiv)

    for (let i = 0; i < items.length; i++) {
        let itemInfo = storage.getItem(items[i])
        createCartList(item[i], itemInfo)
    }
}
function createCartList(itemId, itemValue) {
    // alert(`${itemId}:${itemValue}`)
    let itemTitle = itemValue.split('|')[0]
    let itemImage = 'imgs/' + itemValue.split('|')[1]
    let itemPrice = parseInt(itemValue.split('|')[2])

    // 建立每個品項的清單區域 -- tr
    let trItemList = document.createElement('tr')
    trItemList.className = 'item'

    newTable.appendChild(trItemList)


    // 建立商品圖片 -- 第一個td
    let tdImage = document.createElement('td')
    tdImage.style.width = '200px'

    let image = document.createElement('img')
    image.src = itemImage
    image.width = 80

    tdImage.appendChild(image)
    trItemList.appendChild(tdImage)

    // 建立商品名稱和刪除按鈕 -- 第二個td
    let tdTitle = document.createElement('td')
    tdTitle.style.width = '280px'
    tdTitle.id = itemId

    let pTitle = document.createElement('p')
    pTitle.innerText = itemTitle

    let delButton =document.createElement('button')
    delButton.innerText='Delete'

    tdTitle.appendChild(pTitle)
    tdTitle.appendChild(delButton)
    
    trItemList.appendChild(tdTitle)
    // 建立商品價格 -- 第三個td
    let tdPrice = document.createElement('td')
    tdPrice.style.width = '170px'


    let pPrice = document.createElement('p')
    pPrice.innerText = itemTitle

    tdPrice.appendChild(pPrice)
    trItemList.appendChild(tdPrice)


    // 建立商品數量 -- 第四個td
    let tdMember = document.createElement('td')
    tdPrice.style.width = '170px'


    let pPrice = document.createElement('p')
    pPrice.innerText = itemTitle

}

window.addEventListener('load', doFirst);