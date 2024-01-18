function numberCharacter(){
    let count=0;
    let string = "hello i'm a god";
    for(i=0;i<string.length;i++){
        if(string[i]!=' '){
            count++;
        }
    }
    console.log(`chuỗi hiện tại có ${count} kí tự`);
}

numberCharacter();


