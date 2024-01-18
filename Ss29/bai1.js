function check(n){
    if(n%2==0){
        console.log(n, "CHẴN");
    }else{
        console.log(n, "LẺ");
    }
}

check(Math.floor(Math.random() * 100) + 1);
check(Math.floor(Math.random() * 100) + 1);
check(Math.floor(Math.random() * 100) + 1);