// function step1(){
//     console.log("selecting image")
//     setTimeout(function(){
//         console.log("image selected");
//         return("image selected");
//     } , 4000)
// }

// function step2(image){
//     console.log('applying filter')
//     setTimeout(function(){
//         console.log(`applied the fiter to the ${image}`);
//         return "filtered image"
//     } , 2000)
// }

// function step3(filter){
//     console.log("selecting caption");
//     setTimeout(function(){
//         console.log(`caption added to the ${filter}`)
//         return 'final image'
//     } , 3000)
// }

// function step4(final){
//     console.log('uploading your image plz wait');
//     setTimeout(function(){
//         console.log(`uploaded your ${final}`)
//     } , 4000)
// }

// let image = step1();
// let filter = step2(image);
// let final = step3(filter);
// step4(final);

function step1(cb){
    console.log("selecting the image")
    setTimeout(function(){
        console.log('image selected')
        cb('selected image');
    } , 4000)
}
function step2(image , cb){
    console.log(`applying filter to the ${image}`)
    setTimeout(function(){
        console.log('filter applied successfully');
        cb('filtered image')
    } , 2000)
}
function step3(filter , cb){
    console.log(`applying caption to the ${filter}`);
    setTimeout(function(){
        console.log('caption apllied successfuly');
        cb('final image')
    } , 3000)
}
function step4(final){
    console.log(`uploading the ${final}`);
    setTimeout(function(){
        console.log('image uploaded successfully')
    } , 4000)
}

step1(function(image){
    step2(image , function(filter){
        step3(filter , function(final){
            step4(final);
        });
    })
});

// -----------------------------

// let step1 = function(){
//     console.log('selecting image')
//     return new Promise(function(resolve , reject){
//     setTimeout(function(){
//         console.log('image selected');
//         resolve('image selected')
//     } , 4000)
//     })
// }
// let step2 = function(image){
//     console.log(`applying filter to the ${image}`)
//     return new Promise(function(resolve , reject){
//         setTimeout(function(){
//             console.log('filter applied');
//             resolve('filtered image');
//         } , 2000)
//     }) 
// }
// let step3 = function(filter){
//     console.log(`adding caption to the ${filter}`)
//     return new Promise(function(resolve , reject){
//         setTimeout(function(){
//             console.log('caption aded to the image')
//             resolve('final image')
//         } , 3000)
//     })
// }

// let step4 = function(final){
//     console.log(`uploading the ${final}`)
//     return new Promise(function(resolve , reject){
//         setTimeout(function(){
//             console.log('iamge uplaod successfully')
//             // resolve('final image')
//         } , 3000)
//     })
// }

// step1()
// .then(function(image){
//     return step2(image)
// })
// .then(function(filter){
//     return step3(filter)
// })
// .then(function(final){
//     step4(final)
// })
// .catch(function(err){
//     console.log('code fatt gya error agya')
// })