var mongoose = require('mongoose');
require('mongoose-double')(mongoose);

var SchemaTypes = mongoose.Schema.Types;

module.exports = mongoose.model('Product', {
    title: String,
    description: String,
    type: String,
    price: { 
    	type: SchemaTypes.Double
    }
});