export const numberFormat = (n) => {
    if(n<10){
        return "0" + n.toFixed(2);
    }else{
        return n.toFixed(2);
    }
}