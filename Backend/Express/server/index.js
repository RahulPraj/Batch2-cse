const express = require('express')
const app = express();

// app.use((req,res)=>{
//     // console.log(req);
//     res.send('<h1>happy holiday</h1>')
//     console.log("i am a middleware");
// })

// app.use('/namaste',(req,res)=>{
//     // console.log(req);
//     res.send('<h1>happy holiday</h1>')
//     console.log("i am a middleware");
// })

// app.get('/cat',(req,res)=>{
//     res.send('<h1>i am a cat</h1>')
// })
app.get('/dog',(req,res)=>{
    console.log(req.query);
    console.log(req.query.namm);
    res.send('<h1>i am a dog</h1>')
})
// app.get('/lion',(req,res)=>{
//     res.send('<h1>i am a tiger</h1>')
// })

app.get('/r/:subreddit',(req,res)=>{
   console.log(req.params);
   let {subreddit} = req.params;
   res.send(`i am ${subreddit}`);
})

app.get('/tiger',(req,res)=>{
    res.send('<h1>i am a tiger</h1>')
})

app.listen(8080, ()=>{
    console.log("server connected to port 8080");
})