const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Blog=require("./models/Blog");
const sai = require('./models/Blog');





async function main() {
    await mongoose.connect('mongodb://127.0.0.1/blog-api',{useNewUrlParser: true,useUnifiedTopology:true}
  );
    console.log('Connected successfully to server');



}
main();
app.listen(3000, () => console.log('Server running......'));



