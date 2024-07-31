// 建立一個存放選取結果變數
let result = "";
// 取得送出按鈕
let btn1 = document.querySelector('#btn');
// 監聽按鈕是否左鍵一下
btn1.addEventListener('click', () => {
    // 取得下拉式方塊
    let myCity = document.querySelector('#city');
    // 逐一檢查是否被選取 =>selected
    for (let i = 0; i < myCity.length; i++) {
        if (myCity[i].selected) {
            if (myCity[i].value == "") {
                result='尚未選取縣市';
            }else{
                result = myCity[i].value;
            }
            break;
        }
    }
    console.log('縣市:' + result);
});