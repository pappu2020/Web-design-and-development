let promise1 = new Promise((resolve,reject)=>{
   var con = true;
   if(con){
       resolve("Resolved!!")
   }

   else{
       reject("Reject");
   }
})

promise1.then((re)=>{
    document.write(re);
}).catch((er)=>{
    document.write(er);
})