let getUser=new Promise((resolve,reject)=>{
    const user={
        userName:'Bilal Tasneem',
        emai:'b.tasneem@hotmail.com',
        address:'Flat#104 SB8'
    };
    resolve(user);
});

getUser.then((user)=>{
    console.log(`Got userName: ${user.userName}`)
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve("Karachi");    
        }, 1000);
    });
}).then((address)=>{
    console.log(address);

});

// // Create a Promise
// let getUser1 = new Promise(function(resolve, reject) {
//     const user1 = { 
//            name: 'John Doe', 
//            email: 'jdoe@email.com', 
//            password: 'jdoe.password' 
//      };
//    resolve(user);
// });

// getUser
// .then(function(user) {
//     console.log(`Got user ${user.name}`);
//     // Return a Promise
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             // Fetch address of the user based on email
//             resolve('Bangalore');
//          }, 1000);
//     });
// })
// .then(function(address) {
//     console.log(`User address is ${address}`);
// });