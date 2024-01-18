function ncis(){
    let char = prompt("nhập 1 kí tự bất kì");
    let string = prompt("nhập vào 1 chuỗi");
    let count=0;
    for(let i=0;i<string.length;i++){
        if(string[i]==char){
            count++;
        }
    }
    console.log(`Số lần kí tự ${char} xuất hiện trong chuỗi là ${count} lần`);
}

ncis();
