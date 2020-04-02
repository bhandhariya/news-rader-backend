var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NewsSchema = new Schema({
    query:{type:Schema.Types.String},
    article:{type:Schema.Types.Array}
   
})



module.exports = mongoose.model('News', NewsSchema);