function createRow(users){
    //travel the array users
    for(let i=0;i<users.length;i++){
        //get each one  of the  users
        let user=users[i];
        //display the user
        let tmp=`<tr>
                    <td>${user.email}</td>
                    <td>${user.fname}</td>
                    <td>${user.lname}</td>
                    <td>${user.age}</td>
                    <td>${user.address}</td>
                    <td>${user.phone}</td>
                </tr>`;
                
        $(".usersTable").append(tmp);
        console.log(tmp);
        
    }
}

function init(){
    console.log("Listing Users");
    let users=readUsers();
    createRow(users);
}

window.onload=init;