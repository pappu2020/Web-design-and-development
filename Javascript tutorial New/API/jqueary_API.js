const makeRequest = async(url,method,data)=>{
    const result =await $.ajax({
        url: url,
        method: method,
        data:data
    })

    return result;
}

const getData = ()=>{
   makeRequest("https://jsonplaceholder.typicode.com/posts/1","GET")
   .then((res)=>{
       console.log(res);
   })
   .catch((err)=>{
    console.log(err);
   })
}

//getData();

const postData = ()=>{
    makeRequest("https://jsonplaceholder.typicode.com/posts","POST",{
        method: 'POST',

        title: 'kakukakululu',
        body: 'bar',
        userId: 1,
        
  
    })
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
     console.log(err);
    })
 }

 //postData();


 const updateData = ()=>{
    makeRequest("https://jsonplaceholder.typicode.com/posts/1","PUT",{
        method: 'PUT',

        title: 'lalu',
        body: 'paku',
        userId: 1,
        id:1,
        
  
    })
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
     console.log(err);
    })
 }

// getData();
// updateData();

const updateSpecificData = ()=>{
    makeRequest("https://jsonplaceholder.typicode.com/posts/1","PATCH",{
        method: 'PATCH',

        title: 'ualu',
        
        
  
    })
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
     console.log(err);
    })
 }
//  getData();
//  updateSpecificData();


 const deleteData = ()=>{
    makeRequest("https://jsonplaceholder.typicode.com/posts/101","DELETE",{
        method: 'DELETE',
  
    })
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
     console.log(err);
    })
 }

 postData();
 deleteData();