const LS_KEY="users";

function saveUser(user){
    //load old data 
    let oldData=readUsers();
    //merge the data
    oldData.push(user);
    let value=JSON.stringify(oldData);//parse into a JSON string
    localStorage.setItem(LS_KEY,value);
    //user is an obj
}

function readUsers(){
    //get values from local storage
    let data=localStorage.getItem(LS_KEY);
    if(!data){//NOT data? true/false
        return [];//create the array the first registeration
    }else{
        let list=JSON.parse(data);//parse string back into obj/array
        return list;
    }
}