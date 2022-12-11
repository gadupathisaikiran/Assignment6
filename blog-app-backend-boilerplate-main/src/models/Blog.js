const mongooose = require('mongoose');

const blogSchema = new mongooose.Schema({
   topic:String,
   discription:String,
   posted_at:String,
   posted_by:String

})

const sai = mongooose.model('kiran', blogSchema);
const kiran = mongooose.model('kiran', blogSchema);

module.exports = sai,kiran;