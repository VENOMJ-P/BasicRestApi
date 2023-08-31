const express = require("express");
const bodyParser = require("body-parser");
const app = express();

let id =0;
const PORT = 3003;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())//this is middle ware 

let blogList = [];

app.get('/blogs', (req,res) => {
    return res.status(200).json({
        data: blogList,
        success:true,
    })
});

// why do we need body parser in order to parse in json
app.post('/blogs',(req,res) => {
    blogList.push({
        id:++id, 
        title: req.body.title,
        content:req.body.content
    });
    return res.status(200).json({
        success:true,
    })
})

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
});


//const result = blogslist.filter((blog)=> blog.id == req.params.id);
