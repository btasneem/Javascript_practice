let getUser=new Promise((resolve,reject)=>{
    let user={
        userName:"Bilal Tasneem",
        emailId:"b.tasneem@hotmail.com",
        address:"3/6 E Jamshed"
    };
    resolve(user);
});

getUser.then((user)=>{
    console.log(`Get username ${user.userName}`);
    return user.emailId;
}).then((email)=>{
    console.log(`user email is${email}`);
});
