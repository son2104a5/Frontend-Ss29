function duplicateString(){
    let arr = ['hello', "it's me", 'hello', "i'm fine", 'hello'];
    let string = prompt("nhập vào 1 chuỗi bất kỳ");
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(string==arr[i]){
            console.log(`Phần tử thứ ${i} trong mảng có chứa chuỗi kí tự ${string}`);
            count++;
        }
    }
    if(count==0){
        console.log(`Không có phần tử nào trong mảng có chuỗi ${string}`);
    }
}

duplicateString();

