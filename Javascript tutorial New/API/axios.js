function axiosGet(){
    axios
    .get("https://jsonplaceholder.typicode.com/posts/1")
    .then((res)=>{
        console.log(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })

}

function axiosPost(){
    axios
    .post("https://jsonplaceholder.typicode.com/posts",{
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
    .then((res)=>{
        console.log(res.data)
    })
    .catch((err)=>{
        console.log(err);
    })

}
//axiosPostRequest();


function axiosUpdate(){
    axios
    .put("https://jsonplaceholder.typicode.com/posts/1",{
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        body: JSON.stringify({
        title: 'kakukakululu',
        body: 'Mar',
        userId: 1,
        id:1,
        
  }),
    })
    .then((res)=>{
        console.log(res.data)
    })
    .catch((err)=>{
        console.log(err);
    })

}


//axiosUpdate();


function axiosSpecificUpdate(){
    axios
    .patch("https://jsonplaceholder.typicode.com/posts/1",{
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        body: JSON.stringify({
        title: 'mak',
       
        
  }),
    })
    .then((res)=>{
        console.log(res.data)
    })
    .catch((err)=>{
        console.log(err);
    })

}

//axiosSpecificUpdate();


function axiosDelete(){
    axios
    .delete("https://jsonplaceholder.typicode.com/posts/101",{
        method: 'DELETE',
    })
    .then((res)=>{
        console.log(res.data)
    })
    .catch((err)=>{
        console.log(err);
    })

}

axiosPost();
axiosDelete();

