let request = (method,url,Data1)=>{
    let xhr = new XMLHttpRequest();

    xhr.open(method,url);
    xhr.setRequestHeader("Content-Type","application/json");
    

     xhr.onload = ()=>{
         let data = xhr.response;
         console.log(JSON.parse(data));
     }

    xhr.send(JSON.stringify(Data1));

}


let getData = ()=>{
    request("GET",'https://jsonplaceholder.typicode.com/posts');
}

let sendData = ()=>{
    request("POST",'https://jsonplaceholder.typicode.com/posts',{
        title: 'foo',
        body: 'bar',
        userId: 1,
    });
}

let updateData = ()=>{
    request("PUT",'https://jsonplaceholder.typicode.com/posts/1',{
        id: 1,
        title: 'fooma',
        body: 'barma',
        userId: 1,
    });
}

let updateSingleData = ()=>{
    request("PATCH",'https://jsonplaceholder.typicode.com/posts/1',{
        title: 'changed',
        
    });
}

let deleteData = ()=>{
    request("DELETE",'https://jsonplaceholder.typicode.com/posts/1',{
        
        
    });
}

deleteData();