let data = require("./json_intro.json");
//console.log(data.Member[0].Assistant[0].Name);
let id = data.Member[0].Id;

if(id<=4){
    console.log("valid");
}

for(var x in data){
    console.log(data[x])
}