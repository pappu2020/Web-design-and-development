function fetchGetFUnction(){
     fetch('https://jsonplaceholder.typicode.com/posts/1')
     .then((res)=>{
         if(!res.ok){
             const msg = res.status;
             throw new Error(`message: ${msg}`);
         }

         return res.json();
     })
     .then((res)=>{
         console.log(res);
     }).catch((err)=>{
         console.log(err);
     })

}

function fetchSendFUnction(){
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        body: JSON.stringify({
        title: 'foonakakakaka',
        body: 'bar',
        userId: 1,
        
  }),
    })
    .then((res)=>{
        if(!res.ok){
            const msg = res.status;
            throw new Error(`message: ${msg}`);
        }

        return res.json();
    })
    .then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    })

}


function fetchUpdateFUnction(){
    fetch('https://jsonplaceholder.typicode.com/posts/1',{
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        body: JSON.stringify({
            id: 1,
            title: 'foonanananananana',
            body: 'bar',
            userId: 1,
  }),
    })
    .then((res)=>{
        if(!res.ok){
            const msg = res.status;
            throw new Error(`message: ${msg}`);
        }

        return res.json();
    })
    .then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    })

}



function fetchSingleUpdateFUnction(){
    fetch('https://jsonplaceholder.typicode.com/posts/1',{
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        body: JSON.stringify({
            
            title: 'kaka'
            
  }),
    })
    .then((res)=>{
        if(!res.ok){
            const msg = res.status;
            throw new Error(`message: ${msg}`);
        }

        return res.json();
    })
    .then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    })

}


function fetchDeleteFUnction(){
    fetch('https://jsonplaceholder.typicode.com/posts/101',{
        method: 'DELETE',
        
    })
    .then((res)=>{
        if(!res.ok){
            const msg = res.status;
            throw new Error(`message: ${msg}`);
        }

        return res.json();
    })
    .then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    })

}



//....................Using Await,Asynchronous..................




const fetchMakeRequest = async(url,config)=>{
   const req= await fetch(url,config);
   if(!req.ok){
       const msg = console.log(`Message: ${msg}`);
       throw new Error(msg);
   }
   const data = req.json();
   return data;
}

const getData = ()=>{
    fetchMakeRequest('https://jsonplaceholder.typicode.com/posts/1')
    .then((res)=> console.log(res))
    .catch((res)=> console.log(res));
}

//getData();

const sendData = ()=>{
    fetchMakeRequest('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        body: JSON.stringify({
        title: 'kakukakululu',
        body: 'bar',
        userId: 1,
        
  }),
    })
    .then((res)=> console.log(res))
    .catch((res)=> console.log(res));
}

//sendData();


const UpdateData = ()=>{
    fetchMakeRequest('https://jsonplaceholder.typicode.com/posts/1',{
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        body: JSON.stringify({
        title: 'babubabu',
        body: 'yuyuyuyuyu',
        userId: 1,
        
  }),
    })
    .then((res)=> console.log(res))
    .catch((res)=> console.log(res));
}

// getData();
// UpdateData()


const UpdateSingleData = ()=>{
    fetchMakeRequest('https://jsonplaceholder.typicode.com/posts/1',{
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        body: JSON.stringify({
        title: 'opopopopo',
        
        
  }),
    })
    .then((res)=> console.log(res))
    .catch((res)=> console.log(res));
}

// getData();
// UpdateSingleData();

const deleteData = ()=>{
    fetchMakeRequest('https://jsonplaceholder.typicode.com/posts/101',{
        method: 'DELETE',
    })
    .then((res)=> console.log(res))
    .catch((res)=> console.log(res));
}


sendData();
deleteData();




// // fetchSendFUnction();
// // fetchUpdateFUnction();
// // fetchGetFUnction();
// // fetchSingleUpdateFUnction();
// fetchSendFUnction();
// fetchDeleteFUnction();
