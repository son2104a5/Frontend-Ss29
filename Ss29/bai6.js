function uppercase(){
    let arr = ["hello", "kaka", "siuuuu", "abcxyz", "ggwp"];
    let index, upper;
    for(let i=0;i<arr.length;i++){
        index = arr[i];
        for(let j=1;j<index.length;j++){
            if(j==1){
               upper = index[0].toUpperCase();
            }
            upper += index[j];
        }
        arr[i]=upper;
    }
    console.log(arr);
}

uppercase();