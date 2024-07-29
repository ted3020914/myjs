// 使用name屬性，取得元素內容
// let myDrinks = document.getElementsByName('drinks');

// for (let i = 0; myDrinks.length > i; i++) {
//     console.log(myDrinks.item(i).value);
//     console.log(myDrinks[i].value);
// }

// 取得勾選項目
let myBtn = document.querySelector('#btn');
// 2.監聽按鈕是否被按了(click =>左鍵一下的事件)
myBtn.addEventListener('click', function () {
    let arrResult = [];
    let arrResultNot = [];
    let myDrinks = document.getElementsByName('drinks');
    // 逐一檢查是否被勾選
    for (let i = 0; i < myDrinks.length; i++) {
        // 有被勾選的項目
        if (myDrinks[i].checked) {
            arrResult.push(myDrinks[i].value);
        }

        // 沒有被勾選
        if (!myDrinks[i].checked) {
            arrResultNot.push(myDrinks[i].value);
        }
    }
    console.log('被勾選的項目:'+arrResult);
    console.log('沒有被勾選的項目:'+arrResultNot);
});