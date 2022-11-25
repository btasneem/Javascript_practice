let getUser=new Promise((resolve,reject)=>{
    let userDetails={
        userName:'btasneem',
        emailID:'btasneem',
        address:"ABC ABC ABC",
        permissions1:['CAD','IT','Finance']
    };
    resolve(userDetails);
})

getUser.then((userDetails)=>{
    console.log(`Got userDetails ${userDetails.userName}`);
    if(userDetails.permissions1.includes('HR')){
        throw new Error("Its contain an HR details");
    };
    return userDetails.emailID;
}).then((emailID)=>{
    console.log(`Email ID ${emailID}`);
}).catch((error)=>{
    console.error(error);
});