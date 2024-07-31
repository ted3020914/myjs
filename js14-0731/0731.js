// 取得送出按鈕(擇其一做)
// let btn2 =document.querySelector('#btn');
let btn1 =document.getElementById('btn');

// 監聽按鈕是否被按
btn1.addEventListener('click',()=>{
    let result="";
    // 取得科目的全部
    let subjects=document.getElementsByName('subject');
    // 使用迴圈逐一檢查，是否被選取=>checked
    for(let i=0;i<subjects.length;i++){
        if(subjects[i].checked){
            // 取得選項按鈕值
            result=subjects[i].value;
            // 因為是單選，所以找到選項後(結束迴圈)
            break;
        }
    }
    console.log('選擇的科目是:'+result);
});
