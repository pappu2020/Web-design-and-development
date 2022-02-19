var task1 = ()=>{
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve("Task 1 is  completed");
           },500)
      
    })
}



var task2 = ()=>{
    return new Promise((resolve,reject)=>{
     
        setTimeout(()=>{
            resolve("Task 2 is  completed");
           },1000)
     
    })
}

var task3 = ()=>{
    return new Promise((resolve,reject)=>{
      
        setTimeout(()=>{
            resolve("Task 3 is  completed");
           },1500)
      
    })
}

var task4 = ()=>{
    return new Promise((resolve,reject)=>{
      
        setTimeout(()=>{
            resolve("Task 4 is  completed");
           },2000)
      
    })
}

var task5 = ()=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
       resolve("Task 5 is  completed");
      },2500)
    })
}



// task1()
// .then((res)=> document.write(res +"<br>"))
// .then(task2)
// .then((res)=> document.write(res +"<br>"))
// .then(task3)
// .then((res)=> document.write(res +"<br>"))
// .then(task4)
// .then((res)=> document.write(res +"<br>"))
// .then(task5)
// .then((res)=> document.write(res +"<br>"))
// .catch((err)=> document.write(err))


async function task(){
    const t1 = await task1();
    document.write(t1);
    document.write("<br>");

    const t2 = await task2();
    document.write(t2);
    document.write("<br>");

    const t3 = await task3();
    document.write(t3);
    document.write("<br>");

    const t4 = await task4();
    document.write(t4);
    document.write("<br>");

    const t5 = await task5();
    document.write(t5);
}

task();