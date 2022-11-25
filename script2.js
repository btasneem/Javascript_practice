// let promise=new Promise(function(resolve,reject){
//     resolve("Faking Promise to be resolved");
 
// });

// promise.then(function(value){
//     console.log(value);
// });

let promise1=new Promise(function(resolve,reject){
    resolve("THe fake promise will be resolved");
});

promise1.then(function(value){
    console.log(value);
});