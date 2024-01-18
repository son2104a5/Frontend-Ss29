function stringCheck(){
    let arr = [1, 3, 'hello', 'haha', 5398, 2198];
    let max = [100];
    for(let i=0;i<arr.length;i++){
        if(max.length<arr[i].length){
            max = arr[i];
        }
    }
    console.log(max);
}

stringCheck();