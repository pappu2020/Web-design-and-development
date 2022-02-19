var fun1 = ()=>{
    document.write("Task one");
}

var fun2 = ()=>{
    setTimeout(dataloading,2000);
}

var dataloading = ()=>{
    document.write("data loading....");
}

var fun4 = ()=>{
    document.write("Task two");
}
var fun5 = ()=>{
    document.write("Task three");
}

fun1();
fun2();
fun4();
fun5();
